"use client"
import React from "react"
import { useTheme } from "@/components/themeProvider";
import clientSideFunction from "@/utils/client-utils";

export default function ClientRoutePage() {
  const theme = useTheme()
  const result = clientSideFunction()

  return (
    <h1
      style={{
        color: theme.colors.secondary,
      }}
    >
      Client page with theme {result}
    </h1>
  );
}