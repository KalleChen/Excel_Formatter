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
          const result = XLSX.utils.sheet_to_json(worksheet, {
            raw: true
          }) as any[]
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
