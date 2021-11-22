import React from 'react'
import { Box } from '@mui/material'

import OperatorMenu from 'layouts/OperatorMenu'
import GraphLayout from 'layouts/GraphLayout'
import ColumnsMap from 'layouts/ColumnsMap'
import UploadFile from 'layouts/UploadFile'

import { useFileContext } from 'contexts/FileContext'

const ExcelFormatter: React.FC = () => {
  const { fileData } = useFileContext()
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh'
      }}
    >
      <Box sx={{ height: '70%', display: 'flex', flexDirection: 'row' }}>
        <Box sx={{ height: 1 }}>
          <OperatorMenu />
        </Box>
        <Box sx={{ height: 1, flexGrow: 1 }}>
          {fileData ? <GraphLayout /> : <UploadFile />}
        </Box>
      </Box>
      <Box sx={{ flexGrow: 1, width: 1 }}>
        <ColumnsMap />
      </Box>
    </Box>
  )
}

export default ExcelFormatter
