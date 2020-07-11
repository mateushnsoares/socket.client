import { createContext, Dispatch, SetStateAction } from 'react'

interface Context {
  setRequest: Dispatch<SetStateAction<boolean>>
  setNewRequestFolderPopupDisplay: Dispatch<SetStateAction<'none' | 'flex'>>
}

const RequestListContext = createContext<
  Context
>(
  {} as Context
)

export default RequestListContext
