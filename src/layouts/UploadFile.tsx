import React, { useCallback, useRef } from 'react'
import { Box, Button } from '@mui/material'

import { useFileContext } from 'contexts/FileContext'

const UploadFile: React.FC = () => {
  const { setFile } = useFileContext()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChangeFile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (file) {
        setFile(file)
      }
    },
    [setFile]
  )
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Button
        color="primary"
        variant="contained"
        onClick={() => inputRef?.current?.click()}
      >
        Upload
      </Button>
      <input
        type="file"
        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        ref={inputRef}
        style={{ display: 'none' }}
        onChange={handleChangeFile}
      />
    </Box>
  )
}

export default UploadFile
