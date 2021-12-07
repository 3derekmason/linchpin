import React, { useState, useEffect, useRef } from "react";
import { Container, Card, Paper } from "@material-ui/core";

const Canvas = () => {
  return (
    <Paper elevation={8} id="canvas">
      <Card>
        <div className="mui--text-title">Welcome</div>
      </Card>
    </Paper>
  );
};

export default Canvas;
