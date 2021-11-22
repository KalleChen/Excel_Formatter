import React from 'react'

import ExcelFormatter from 'pages/ExcelFormatter'
import FileContextProvider from 'contexts/FileContext'

const App: React.FC = function () {
  return (
    <React.Fragment>
      <FileContextProvider>
        <ExcelFormatter />
      </FileContextProvider>
    </React.Fragment>
  )
}

export default App
