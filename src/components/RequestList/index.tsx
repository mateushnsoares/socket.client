import React, { useRef, MouseEvent, useEffect, useState, Dispatch, SetStateAction } from 'react'

import RequestListContext from './RequestListContext'

import { Container, RequestFolderContainer, RequestFolderName, RequestType } from './styles'
import Request from '../../types/Request'

import useCache from '../../hooks/useCache'
import Folder from '../../types/Folder'
import { MdFolder, MdFolderOpen } from 'react-icons/md'
import AuxPopup from './AuxPopup'

interface Props {
  setNewRequestFolderPopupDisplay: Dispatch<SetStateAction<'flex' | 'none'>>
  setRequest: Dispatch<SetStateAction<boolean>>
  setFolderId: Dispatch<SetStateAction<string | null>>
}

const RequestList: React.FC<Props> = (
  {
    setNewRequestFolderPopupDisplay,
    setRequest,
    setFolderId
  }
) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [Requests] = useCache<Request[]>('requests')
  const [Folders, setFolders] = useCache<Folder[]>('folders')
  const [FolderOrDeleteOrBoth, setFolderOrDeleteOrBoth] = useState<'folder' | 'delete' | 'both'>('folder')
  const [FolderOrRequest, setFolderOrRequest] = useState<'folder' | 'request'>('folder')
  const [FolderRequestId, setFolderRequestId] = useState('')
  const [auxPopupDisplay, setAuxPopupDisplay] = useState<
  'none' | 'flex'
  >('none')
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)
  useEffect(() => {
    document.addEventListener('click', handleClick)
  })

  function calculateMarginTop (pageY: number, id: string | null = null) {
    function foldersIsOpened (id: string | null = null) {
      let filtredFolders = Folders.filter(
        folder => folder.opened
      )

      if (id !== null) {
        const index = filtredFolders.findIndex(folder => folder.id === id)
        filtredFolders = filtredFolders.slice(0, index)
      }

      return filtredFolders
    }
    const rootRequests = Requests.filter(
      request => request.folderId === null
    )
    const filtredRequests = [
      ...rootRequests,
      ...foldersIsOpened(id)
    ]

    const RequestHeight = 38.4

    const res = (
      pageY - (filtredRequests.length + Folders.length) * RequestHeight
    )

    return res
  }

  function handleAuxClick (e: MouseEvent) {
    function calculateFiltredRequests () {
      function folderIsOpened (request: Request) {
        return Folders.find(
          folder => folder.id === request.folderId
        )?.id && Folders.find(
          folder => folder.id === request.folderId
        )?.opened
      }
      const rootRequests = Requests.filter(
        request => request.folderId === null
      )
      return [
        ...rootRequests,
        ...Requests.filter(request => folderIsOpened(request))
      ]
    }

    const FolderHeight = 40
    const RequestHeight = 38.4
    const BarHeight = 111.2

    if (
      e.pageY >
      (
        (calculateFiltredRequests().length * RequestHeight) +
        (Folders.length * FolderHeight) +
        BarHeight)
    ) {
      setFolderOrDeleteOrBoth('folder')
    }
    handleClick()
    setAuxPopupDisplay('flex')
    setTop(calculateMarginTop(e.pageY))
    setLeft(e.pageX)
  }
  function handleClick () {
    setAuxPopupDisplay('none')
  }

  function handleFolderClick (id: string) {
    const folders = Folders || []
    const clickedFolder = folders.filter(
      folder => folder.id === id
    )[0]
    const index = folders.indexOf(
      folders
        .find(
          folder => folder.id === clickedFolder.id
        ) || {} as Folder
    )

    folders[index].opened = !folders[index].opened
    setFolders(
      folders
    )
  }

  function handleFolderRequestAuxClick (
    e: MouseEvent,
    id: string | null = null,
    type: 'request' | 'folder'
  ) {
    setFolderOrDeleteOrBoth(type === 'request' ? 'both' : 'delete')
    setFolderOrRequest(type)
    setFolderRequestId(id || '')
    handleClick()
    setFolderId(id)
    setAuxPopupDisplay('flex')
    setTop(calculateMarginTop(e.pageY, id))
    setLeft(e.pageX)
  }

  return (
    <RequestListContext.Provider
      value={
        {
          setNewRequestFolderPopupDisplay,
          setRequest
        }
      }
    >
      <Container ref={containerRef} onAuxClick={handleAuxClick}>
        {
        Requests
        ?.filter(request => request.folderId === null)
        ?.map(request => (
          <RequestFolderContainer key={request.id} onAuxClick={
            (e) => handleFolderRequestAuxClick(e, request.id, 'request')
          }>
            <RequestType type={request.type}>
              {
                request.type.toUpperCase()
              }
            </RequestType>
            <RequestFolderName>
              {
                request.name
              }
            </RequestFolderName>
          </RequestFolderContainer>
        ))
        }
        {
        Folders?.map(folder => (
          <div key={folder.id}>
            <RequestFolderContainer
              onClick={
                () => handleFolderClick(folder.id)
              }
              onAuxClick={
                (e) => handleFolderRequestAuxClick(e, folder.id, 'folder')
              }
            >
              {
                folder.opened
                  ? <MdFolderOpen size={20} style={{ marginRight: 10 }}/>
                  : <MdFolder size={20} style={{ marginRight: 10 }}/>
              }
              <RequestFolderName>
                {
                  folder.name
                }
              </RequestFolderName>
            </RequestFolderContainer>
            {
              folder.opened && (
                Requests.filter(
                  request => request.folderId === folder.id
                ).map(request => (
                  <RequestFolderContainer key={request.id} onAuxClick={
                    (e) => handleFolderRequestAuxClick(e, request.id, 'request')
                  }>
                    <RequestType type={request.type}>
                      {
                        request.type.toUpperCase()
                      }
                    </RequestType>
                    <RequestFolderName>
                      {
                        request.name
                      }
                    </RequestFolderName>
                  </RequestFolderContainer>
                ))
              )
            }
          </div>
        )
      )
        }
        <AuxPopup
          display={auxPopupDisplay}
          top={top - 76}
          left={left}
          FolderOrDeleteOrBoth={FolderOrDeleteOrBoth}
          FolderOrRequest={FolderOrRequest}
          FolderRequestId={FolderRequestId}
        />
      </Container>
    </RequestListContext.Provider>
  )
}

export default RequestList
