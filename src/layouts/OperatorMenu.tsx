import React from 'react'
import { Box } from '@mui/material'

import DraggableItem from 'components/DraggableItem'

const OPERATOR_ITEMS = [
  {
    name: 'Split'
  },
  {
    name: 'Merge'
  },
  {
    name: 'Replace'
  }
]

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    padding: 2
  }
} as const

const DragItem: React.FC = () => {
  return (
    <Box sx={styles.root}>
      {OPERATOR_ITEMS.map((item) => (
        <Box key={item.name} m={1}>
          <DraggableItem
            name={item?.name || ''}
            onDragStart={() => {
              console.log('hi')
            }}
          />
        </Box>
      ))}
    </Box>
  )
}

export default DragItem
