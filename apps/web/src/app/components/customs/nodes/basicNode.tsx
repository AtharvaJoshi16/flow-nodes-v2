import { RootState } from "@/app/redux/store";
import { Box } from "@mui/material";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { Handle, NodeProps, Position, useUpdateNodeInternals } from "reactflow";

export const BasicNode = (props: NodeProps) => {
  const updateNodeInternals = useUpdateNodeInternals();
  const handlePosition = useSelector(
    (state: RootState) => (state.options as any).handlePosition
  );
  const { top, bottom, left, right } = useSelector(
    (state: RootState) => (state.options as any).handlePosition
  );

  const updateNodePosition = useCallback(() => {
    updateNodeInternals(props.id);
  }, [props.id, handlePosition]);

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
      <input
        defaultValue="New Node"
        className="text-center w-fit text-xl font-medium"
        type="text"
        placeholder="Enter node name"
      />
    </Box>
  );
};
