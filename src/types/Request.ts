export default interface Request {
  name: string
  id: string
  folderId: string | null
  type: 'send' | 'listen'
}
