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
        flexDirection: 'row',
        width: '100vw',
        height: '100vh'
      }}
    >
      <Box sx={{ p: 5 }}>
        <OperatorMenu />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Box sx={{ height: '70%', width: 1 }}>
          {fileData ? <GraphLayout /> : <UploadFile />}{' '}
        </Box>
        <Box sx={{ height: '30%', width: 1 }}>
          <ColumnsMap />
        </Box>
      </Box>
    </Box>
  )
}

export default ExcelFormatter
