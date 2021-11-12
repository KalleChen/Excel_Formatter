import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'

import ExcelFormatter from 'pages/ExcelFormatter'
import FileContextProvider from 'contexts/FileContext'

const App: React.FC = function () {
  return (
    <React.Fragment>
      <CssBaseline />
      <FileContextProvider>
        <ExcelFormatter />
      </FileContextProvider>
    </React.Fragment>
  )
}

export default App
