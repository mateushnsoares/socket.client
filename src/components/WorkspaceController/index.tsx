import React from 'react'

import { Workspace, Settings } from './styles'
import { config } from '../../store/config'

const WorkspaceController: React.FC = () => {
  return (
    <Workspace>
      Socket.Client
      <Settings onClick={() => {
        config.openInEditor()
      }} />
    </Workspace>
  )
}

export default WorkspaceController
