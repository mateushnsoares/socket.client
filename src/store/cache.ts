import fs from 'fs'
import path from 'path'
import { config } from './config'

class Cache {
  cacheFile!: string
  constructor () {
    this.cacheFile = path.resolve(config.path, '..', 'data.json')
    const exist = fs.existsSync(this.cacheFile)
    if (!exist) {
      fs.writeFileSync(this.cacheFile, '{\n\t"requests": [],\n\t"folders": []\n}')
    }
  }

  get<T = { [ key: string]: string }> (key: string) {
    if (!fs.existsSync(this.cacheFile)) {
      return undefined
    }
    const value = JSON.parse(
      fs.readFileSync(this.cacheFile, { encoding: 'utf-8' })
    )[key]
    return value as unknown as T
  }

  set (key: string, value: unknown) {
    const obj = JSON.parse(
      fs.readFileSync(this.cacheFile, { encoding: 'utf-8' })
    )

    obj[key] = value

    fs.writeFileSync(this.cacheFile, JSON.stringify(obj, undefined, 2))
  }
}

export default new Cache()
