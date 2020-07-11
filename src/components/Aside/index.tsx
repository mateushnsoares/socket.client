import React, { useState } from 'react'

import { Container } from './styles'
import WorkspaceController from '../WorkspaceController'
import RequestList from '../RequestList'
import NewRequestFolderPopup from '../NewRequestFolderPopup'

const Aside: React.FC = () => {
  const [newRequestFolderPopupDisplay, setNewRequestFolderPopupDisplay] = useState<
  'none' | 'flex'
  >('none')
  const [request, setRequest] = useState<boolean>(true)
  const [folderId, setFolderId] = useState <string | null>(null)
  return (
    <Container>
      <WorkspaceController />
      <RequestList
        setNewRequestFolderPopupDisplay={setNewRequestFolderPopupDisplay}
        setRequest={setRequest}
        setFolderId={setFolderId}
      />
      <NewRequestFolderPopup
        display={newRequestFolderPopupDisplay}
        setDisplay={setNewRequestFolderPopupDisplay}
        request={request}
        folderId={folderId}
      />
    </Container>
  )
}

export default Aside
