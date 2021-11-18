import React, { createContext, useContext, useEffect, useCallback } from 'react'

import {
  excelConvertToObject,
  getFileObjByColumns
} from 'utils/fileUtilFunctions'

export interface FileContextType {
  file: File | null
  setFile: (file: File | null) => void
  fileData: FileObject | null
}
interface FileObject {
  [key: string]: (string | number)[]
}

const FileContext = createContext<FileContextType>({
  file: null,
  setFile: () => undefined,
  fileData: null
})

const FileContextProvider: React.FC = ({ children }) => {
  const [file, setFile] = React.useState<File | null>(null)
  const [fileData, setFileData] = React.useState<FileObject | null>(null)

  const getFileObject = useCallback(async (file: File) => {
    try {
      const fileObject = await excelConvertToObject(file)
      if (fileObject) {
        const columnObject = getFileObjByColumns(fileObject)
        setFileData(columnObject)
      }
    } catch (e) {
      console.error(e)
    }
  }, [])

  useEffect(() => {
    if (file) {
      getFileObject(file)
    }
  }, [file, getFileObject])

  const value = {
    file,
    setFile,
    fileData
  }

  return <FileContext.Provider value={value}>{children}</FileContext.Provider>
}

export const useFileContext = () => useContext(FileContext)

export default FileContextProvider
