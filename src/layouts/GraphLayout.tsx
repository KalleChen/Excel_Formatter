import React from 'react'
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls
} from 'react-flow-renderer'

const GraphLayout: React.FC = () => {
  return (
    <ReactFlowProvider>
      <ReactFlow>
        <Controls />
      </ReactFlow>
    </ReactFlowProvider>
  )
}

export default GraphLayout
