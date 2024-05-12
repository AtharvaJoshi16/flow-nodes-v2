"use client";
import { nodeTypes } from "@/app/constants/nodeTypes";
import { addEdge, updateEdges } from "@/app/redux/slices/edges.slice";
import { addNode, updateNodes } from "@/app/redux/slices/nodes.slice";
import { RootState } from "@/app/redux/store";
import { Box } from "@mui/material";
import { useCallback, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactFlow, {
  Background,
  Connection,
  Controls,
  Edge,
  EdgeChange,
  MiniMap,
  NodeChange,
  OnConnectEnd,
  OnConnectStart,
  applyEdgeChanges,
  applyNodeChanges,
  addEdge as rfAddEdge,
  useReactFlow,
} from "reactflow";
import "reactflow/dist/style.css";
import { v4 } from "uuid";

export const ReactFlowInitializer = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const dispatch = useDispatch();
  const nodes = useSelector((state: RootState) => state.node.nodes);
  const edges = useSelector((state: RootState) => state.edge.edges);
  const edgeStyle = useSelector((state: RootState) => state.options.edgeStyle);
  const connectingNodeId = useRef(null);
  const connectingHandleId = useRef(null);
  const { screenToFlowPosition } = useReactFlow();

  const onConnectStart: OnConnectStart = useCallback(
    (_, { nodeId, handleId }) => {
      connectingNodeId.current = nodeId as any;
      connectingHandleId.current = handleId as any;
    },
    []
  );

  const onConnectEnd: OnConnectEnd = useCallback(
    (event) => {
      if (!connectingNodeId.current) return;

      const targetIsPane = (event?.target as any)?.classList?.contains(
        "react-flow__pane"
      );

      if (targetIsPane) {
        const id = v4();
        const newNode = {
          id,
          position: screenToFlowPosition({
            x: (event as any).clientX,
            y: (event as any).clientY,
          }),
          data: { label: `New Node` },
          type: "basic",
        };
        dispatch(addNode(newNode));
        dispatch(
          addEdge({
            id,
            source: connectingNodeId.current,
            target: id,
            type: edgeStyle.style as string,
            sourceHandle: connectingHandleId.current,
          })
        );
      }
    },
    [screenToFlowPosition, edgeStyle]
  );

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      dispatch(updateNodes(applyNodeChanges(changes, [...nodes]))),
    [nodes]
  );
  const rfNodeTypes = useMemo(() => nodeTypes, []);

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      dispatch(updateEdges(applyEdgeChanges(changes, [...edges]))),
    [edges]
  );

  const onConnect = useCallback(
    (params: Edge | Connection) => {
      dispatch(updateEdges(rfAddEdge(params, [...edges])));
    },
    [edges]
  );

  return (
    <Box
      sx={{
        height: "85vh",
      }}
    >
      <ReactFlow
        nodes={nodes}
        nodeTypes={rfNodeTypes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
      >
        <Background />
        <Controls className="m-[30px]" />
        <MiniMap className="m-[30px]" />
        {children}
      </ReactFlow>
    </Box>
  );
};
