import { MMKV } from "react-native-mmkv"

export const mmkvEncryptedStorage = new MMKV({
  id: '@mmkvEncryptedStorage',
  encryptionKey: 'hunter2'
})

export const mmkvDecryptedStorage = new MMKV({
  id: '@mmkvDecryptedStorage',
  encryptionKey: 'hunter2'
})