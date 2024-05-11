import { Box } from "@mui/material";
import { useCallback, useEffect } from "react";
import { Handle, NodeProps, Position, useUpdateNodeInternals } from "reactflow";

export const BasicNode = (props: NodeProps) => {
  const updateNodeInternals = useUpdateNodeInternals();

  const updateNodePosition = useCallback(() => {
    updateNodeInternals(props.id);
  }, [props.id]);

  useEffect(() => {
    updateNodePosition();
  }, [updateNodePosition]);

  return (
    <Box
      sx={{
        ":hover": {
          cursor: "move",
        },
      }}
      className="border-2 rounded-md border-slate-500 p-5"
    >
      <Handle
        type="source"
        id="source"
        className="w-[10px] h-[20px] bg-fuchsia-900 rounded-sm"
        isConnectable={props.isConnectable}
        position={Position.Right}
      />
      <Handle
        type="target"
        id="target"
        className="w-[10px] h-[20px] bg-fuchsia-900 rounded-sm"
        isConnectable={props.isConnectable}
        position={Position.Left}
      />
      <input
        defaultValue="New Node"
        className="text-center w-fit text-xl font-medium"
        type="text"
        placeholder="Enter node name"
      />
    </Box>
  );
};
