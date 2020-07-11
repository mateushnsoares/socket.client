import Store from 'electron-store'
import { JSONSchemaType } from 'json-schema-typed'

export const schema = {
  useMacOSWindowActionButtons: {
    type: JSONSchemaType.Boolean,
    default: false
  }
}

export const config = new Store({
  schema,
  watch: true
})
