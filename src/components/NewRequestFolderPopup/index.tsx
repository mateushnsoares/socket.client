import React, { FormEvent, useRef, Dispatch, SetStateAction } from 'react'
import useCache from '../../hooks/useCache'

import { Container, Input, SubmitButton, Select, Option } from './styles'
import Request from '../../types/Request'
import Folder from '../../types/Folder'
import { v4 as uuid } from 'uuid'

interface Props {
  display: 'none' | 'flex'
  setDisplay: Dispatch<SetStateAction<'none' | 'flex'>>
  request: boolean
  folderId: string | null
}

const NewRequestFolderPopup: React.FC<Props> = (
  {
    display,
    setDisplay: setNewRequestFolderPopupDisplay,
    request,
    folderId
  }
) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [Requests, setRequests] = useCache<Request[]>('requests')
  const [Folders, setFolders] = useCache<Folder[]>('folders')
  const typeArray: ['send', 'listen'] = ['send', 'listen']

  function handleSubmit (e: FormEvent) {
    e.preventDefault()
    const name = e.currentTarget.querySelector('input')?.value || ''
    let type = 'send' as 'send' | 'listen'
    if (request) {
      type = typeArray[
        e.currentTarget.querySelector('select')?.selectedIndex || 0
      ]
    }
    request
      ? setRequests(
        [
          ...(Requests || []),
          {
            name,
            type,
            id: uuid(),
            folderId:
            Requests
              .filter(
                request => request.id === folderId
              ).length === 0
              ? Folders
                .find(
                  folder => folder.id === folderId
                ) ? folderId : null : null,
            url: '',
            body: '',
            message: '',
            selected: false
          }
        ]
      )
      : setFolders(
        [
          ...(Folders || []),
          { name, opened: false, id: uuid() }
        ]
      )
    setNewRequestFolderPopupDisplay('none')
  }
  return (
    <Container display={display} onSubmit={handleSubmit}>
      <Input ref={inputRef} type="text" maxLength={20} required/>
      {
        request && (
          <Select>
            <Option type="send" value="send">
              SEND
            </Option>
            <Option type="listen" value="listen">
              LISTEN
            </Option>
          </Select>
        )
      }
      <SubmitButton type="submit">
        Create
      </SubmitButton>
    </Container>
  )
}

export default NewRequestFolderPopup
