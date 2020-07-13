import React, { useRef, useContext } from 'react'
import { ThemeProvider } from 'styled-components'

import { Container, CreateRequest, CreateFolderRemove } from './styles'
import { defaultTheme } from '../../../styles/theme'
import { FiPlusCircle, FiFolder, FiTrash } from 'react-icons/fi'
import useCache from '../../../hooks/useCache'
import Request from '../../../types/Request'
import Folder from '../../../types/Folder'
import RequestListContext from '../RequestListContext'

interface Props {
  top: number
  left: number
  display: 'none' | 'flex'
  FolderOrRequest: 'folder' | 'request'
  FolderOrDeleteOrBoth: 'folder' | 'delete' | 'both'
  FolderRequestId: string
}

const AuxPopup: React.FC<Props> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [Requests, setCachedRequests] = useCache<Request[]>('requests')
  const [Folders, setFolders] = useCache<Folder[]>('folders')
  const {
    setNewRequestFolderPopupDisplay,
    setRequest
  } = useContext(RequestListContext)
  return (
    <ThemeProvider theme={defaultTheme} >
      <Container
        ref={containerRef}
        top={props.top}
        left={props.left}
        display={props.display}
      >
        <CreateRequest onClick={() => {
          setNewRequestFolderPopupDisplay('flex')
          setRequest(true)
        }}>
          <FiPlusCircle size={20} style={{ marginRight: '12px', marginBottom: '6px' }}/>
          <p style={{ marginTop: '3px' }}>
                New Request
          </p>
        </CreateRequest>
        {
          props.FolderOrDeleteOrBoth === 'folder' ? (
            <CreateFolderRemove onClick={() => {
              setRequest(false)
              setNewRequestFolderPopupDisplay('flex')
            }}>
              <FiFolder size={20} style={{ marginRight: '12px', marginBottom: '6px' }}/>
              <p style={{ marginTop: '3px' }}>
                    New Folder
              </p>
            </CreateFolderRemove>
          ) : props.FolderOrDeleteOrBoth === 'delete' ? (
            <CreateFolderRemove onClick={() => {
              (props.FolderOrRequest === 'folder'
                ? () => {
                  setFolders(
                    Folders.filter(
                      folder => folder.id !== props.FolderRequestId
                    )
                  )
                  setCachedRequests(
                    Requests.filter(
                      request => request.folderId !== props.FolderRequestId
                    )
                  )
                }
                : () => {
                  setCachedRequests(
                    Requests.filter(
                      request => request.id !== props.FolderRequestId
                    )
                  )
                })()
            }}>
              <FiTrash size={20} style={{ marginRight: '12px', marginBottom: '6px' }}/>
              <p style={{ marginTop: '3px' }}>
                    Delete
              </p>
            </CreateFolderRemove>
          ) : (
            <>
              <CreateFolderRemove onClick={() => {
                setRequest(false)
                setNewRequestFolderPopupDisplay('flex')
              }}>
                <FiFolder size={20} style={{ marginRight: '12px', marginBottom: '6px' }}/>
                <p style={{ marginTop: '3px' }}>
                    New Folder
                </p>
              </CreateFolderRemove>
              <CreateFolderRemove onClick={() => {
                (props.FolderOrRequest === 'folder'
                  ? () => {
                    setFolders(
                      Folders.filter(
                        folder => folder.id !== props.FolderRequestId
                      )
                    )
                    setCachedRequests(
                      Requests.filter(
                        request => request.folderId !== props.FolderRequestId
                      )
                    )
                  }
                  : () => {
                    setCachedRequests(
                      Requests.filter(
                        request => request.id !== props.FolderRequestId
                      )
                    )
                  })()
              }}>
                <FiTrash size={20} style={{ marginRight: '12px', marginBottom: '6px' }}/>
                <p style={{ marginTop: '3px' }}>
                    Delete
                </p>
              </CreateFolderRemove>
            </>
          )
        }
      </Container>
    </ThemeProvider>
  )
}

export default AuxPopup
