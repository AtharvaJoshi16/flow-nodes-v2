"use client";
import { AuthButton } from "@flownodes/ui/authButton";
import { Google } from "@flownodes/ui/google";
import { Facebook, GitHub, X } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export const SignIn = () => {
  return (
    <Box
      className="w-fit sm:w-[550px] bg-white rounded-2xl p-5 flex flex-col items-center"
      sx={{
        boxShadow: "10px 10px #CB8AFF",
      }}
    >
      <Box className="m-[20px] flex gap-6 items-center justify-center">
        <Image
          src="/data-flow.png"
          alt="flow-nodes-primary"
          width={40}
          height={40}
        />
        <Typography
          className="text-lg sm:text-[30px]"
          fontWeight="600"
          variant="h4"
        >
          Flow Nodes
        </Typography>
      </Box>
      <Typography
        className="m-[30px] text-center text-lg sm:text-[30px]"
        fontWeight="200"
      >
        Sign in to start editing!
      </Typography>

      <Box className="relative mx-2 my-[20px] border rounded-2xl p-3 border-slate-200 flex flex-col items-center">
        <Box className="absolute top-[-12px] bg-white px-4">Sign in via</Box>
        <Box className="flex flex-col items-center gap-[30px] mx-[30px] my-[40px]">
          <AuthButton startIcon={<Google size={24} />}>
            Sign up with Google
          </AuthButton>
          <AuthButton
            startIcon={
              <GitHub
                sx={{
                  color: "#000",
                }}
              />
            }
          >
            Sign up with Github
          </AuthButton>
          <AuthButton startIcon={<X />}>Sign up with X</AuthButton>
          <AuthButton startIcon={<Facebook color="primary" />}>
            Sign up with Facebook
          </AuthButton>
        </Box>
      </Box>
    </Box>
  );
};
