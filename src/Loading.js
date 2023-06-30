import { CircularProgress } from "@mui/material";
import React from "react";

export default function Loading() {
  return (
    <div className="loading">
      <CircularProgress color="inherit" />
    </div>
  );
}
