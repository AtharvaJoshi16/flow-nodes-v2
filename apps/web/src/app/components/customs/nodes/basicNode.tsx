import { updateSingleNode } from "@/app/redux/slices/nodes.slice";
import { RootState } from "@/app/redux/store";
import { Box, TextField } from "@mui/material";
import { FocusEvent, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Handle, NodeProps, Position, useUpdateNodeInternals } from "reactflow";

export const BasicNode = (props: NodeProps) => {
  const updateNodeInternals = useUpdateNodeInternals();
  const [nodeName, setNodeName] = useState("New Node");
  const dispatch = useDispatch();
  const handlePosition = useSelector(
    (state: RootState) => state.options.handlePosition
  );
  const nodes = useSelector((state: RootState) => state.node.nodes);
  const { top, bottom, left, right } = useSelector(
    (state: RootState) => state.options.handlePosition
  );

  const updateNodePosition = useCallback(() => {
    updateNodeInternals(props.id);
  }, [props.id, handlePosition]);

  useEffect(() => {
    updateNodePosition();
  }, [updateNodePosition]);

  const handleNodeName = (
    e: FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>
  ) => {
    const idx = nodes.findIndex((node: any) => node.id === props.id);
    let nodeToUpdate = nodes?.[idx];
    // console.log(nodes?.[idx]);
    // nodeToUpdate.data = {
    //   ...props.data,
    //   label: nodeName,
    // };
    // console.log(nodeToUpdate);
    dispatch(updateSingleNode(nodeToUpdate));
  };

  return (
    <Box
      sx={{
        ":hover": {
          cursor: "move",
        },
      }}
      className="border-2 rounded-md border-slate-500 p-5"
    >
      {top && (
        <Handle
          type="target"
          id="target-top"
          className="h-[10px] w-[20px] bg-fuchsia-900 rounded-sm"
          isConnectable={props.isConnectable}
          position={Position.Top}
        />
      )}
      {bottom && (
        <Handle
          type="source"
          id="source-bottom"
          className="h-[10px] w-[20px] bg-fuchsia-900 rounded-sm"
          isConnectable={props.isConnectable}
          position={Position.Bottom}
        />
      )}
      {right && (
        <Handle
          type="source"
          id="source-right"
          className="w-[10px] h-[20px] bg-fuchsia-900 rounded-sm"
          isConnectable={props.isConnectable}
          position={Position.Right}
        />
      )}
      {left && (
        <Handle
          type="target"
          id="target-left"
          className="w-[10px] h-[20px] bg-fuchsia-900 rounded-sm"
          isConnectable={props.isConnectable}
          position={Position.Left}
        />
      )}
      <TextField
        value={nodeName}
        onChange={(e) => setNodeName(e.target.value)}
        size="small"
        className="w-fit text-xl font-medium"
        onBlur={(e) => handleNodeName(e)}
        type="text"
        placeholder="Enter node name"
      />
    </Box>
  );
};
