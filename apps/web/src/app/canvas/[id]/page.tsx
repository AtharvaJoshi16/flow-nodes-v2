"use client";
import { ReactFlowInitializer } from "@/app/components/react-flow/ReactFlowInitializer";
import { Toolbar } from "@/app/components/toolbar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ReactFlowProvider } from "reactflow";
import { checkForIdMatch } from "../../../../utils/checkForIdMatch";

export default function Canvas({ params }: { params: { id: string } }) {
  const router = useRouter();
  useEffect(() => {
    const validId = checkForIdMatch(params.id);
    if (!validId) {
      router.push("/not-found");
    }
  }, []);
  return (
    <ReactFlowProvider>
      <ReactFlowInitializer>
        <Toolbar />
      </ReactFlowInitializer>
    </ReactFlowProvider>
  );
}
