import React, { useState, useEffect, useRef, FormEvent, ChangeEvent } from 'react'

import {
  Container,
  Select,
  Option,
  Url,
  SubmitButton,
  SubmitIcon,
  NoSelectedRequestOrTypeListen,
  Icon,
  Text,
  Message
} from './styles'
import CodeEditor from './CodeEditor'
import useCache from '../../hooks/useCache'
import Request from '../../types/Request'

const RequestInfo: React.FC = () => {
  const [Requests, setRequests] = useCache<Request[]>('requests')
  const [selectedRequest, setSelectedRequest] = useState<Request>()

  useEffect(() => {
    setSelectedRequest(Requests.find(request => request.selected))
  }, [Requests])

  function handleUrlChange (e: ChangeEvent<HTMLInputElement>) {
    const updatedRequests = Requests

    updatedRequests[
      Requests.indexOf(selectedRequest as Request)
    ].url = e.currentTarget.value

    setRequests(updatedRequests)
  }

  function handleMessageChange (e: ChangeEvent<HTMLInputElement>) {
    const updatedRequests = Requests

    updatedRequests[
      Requests.indexOf(selectedRequest as Request)
    ].message = e.currentTarget.value

    setRequests(updatedRequests)
  }

  function handleChangeSelect (e: ChangeEvent<HTMLSelectElement>) {
    const updatedRequests = Requests

    updatedRequests[
      Requests.indexOf(selectedRequest as Request)
    ].type = e.currentTarget.value as 'send' | 'listen'

    setRequests(updatedRequests)
  }

  function handleSubmit (e: FormEvent) {
    e.preventDefault()
  }

  return (
    <Container onSubmit={handleSubmit}>
      {
        selectedRequest
          ? (
            <>
              <div style={{ position: 'relative', height: 36 }}>
                <Select
                  value={selectedRequest.type}
                  onChange={handleChangeSelect}
                >
                  <Option value="send">SEND</Option>
                  <Option value="listen">LISTEN</Option>
                </Select>
                <Url
                  placeholder="URL"
                  onChange={handleUrlChange}
                  value={selectedRequest.url}
                />
                <Message
                  placeholder="Message"
                  onChange={handleMessageChange}
                  value={selectedRequest.message}
                />
                <SubmitButton>
                  <SubmitIcon />
                </SubmitButton>
              </div>
              {
                selectedRequest.type === 'send' ? (
                  <CodeEditor
                    value={
                      selectedRequest.body
                    }
                    setContent={value => {
                      const updatedRequests = Requests

                      const RequestToUpdate = updatedRequests
                        .find(request => request.selected)

                      updatedRequests[
                        updatedRequests.indexOf(RequestToUpdate || {} as Request)
                      ].body = value

                      setRequests(updatedRequests)
                    }}
                  />
                ) : (

                  <NoSelectedRequestOrTypeListen typeListen>
                    <Icon />
                    <Text>No Body</Text>
                  </NoSelectedRequestOrTypeListen>
                )
              }

            </>
          )
          : (
            <NoSelectedRequestOrTypeListen>
              <Icon />
              <Text>No Request Selected</Text>
            </NoSelectedRequestOrTypeListen>
          )
      }
    </Container>
  )
}

export default RequestInfo
