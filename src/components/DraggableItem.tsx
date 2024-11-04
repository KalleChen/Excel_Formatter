import React from 'react'
import { Box } from '@mui/material'

interface Prop {
  name: string
  onDragStart: (e: React.DragEvent<HTMLDivElement>) => void
}

const styles = {
  root: {
    width: '100%',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid',
    borderColor: 'primary.main',
    color: 'primary.main',
    borderRadius: '5px',
    cursor: 'grab',
    userSelect: 'none',
    padding: 1
  }
} as const

const DragItem: React.FC<Prop> = (props) => {
  const { name, onDragStart } = props
  return (
    <Box sx={styles.root} onDragStart={onDragStart} draggable={true}>
      {name}
    </Box>
  )
}

export default DragItem
