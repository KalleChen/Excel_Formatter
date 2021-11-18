import XLSX from 'xlsx'

export const excelConvertToObject = (
  file: File
): Promise<{ [key: string]: string | number }[] | null> => {
  const reader = new FileReader()
  const promise = new Promise<{ [key: string]: string | number }[] | null>(
    (resolve) => {
      try {
        reader.onload = (e) => {
          if (!e) resolve(null)
          const data = e?.target?.result
          const workbook: XLSX.WorkBook = XLSX.read(data, { type: 'binary' })
          const first_sheet_name = workbook.SheetNames[0]
          const worksheet = workbook.Sheets[first_sheet_name]
          const result = XLSX.utils.sheet_to_json<
            Record<string, string | number>
          >(worksheet, {
            raw: true
          })
          resolve(result)
        }
        reader.readAsBinaryString(file)
      } catch (e) {
        resolve(null)
      }
    }
  )
  return promise
}

export const getFileObjByColumns = (
  obj: {
    [key: string]: string | number
  }[]
): { [key: string]: (string | number)[] } => {
  const columns = Object.keys(obj[0])
  const result: { [key: string]: (string | number)[] } = {}
  columns.forEach((column) => {
    result[column] = obj.map((item) => item[column])
  })
  return result
}
