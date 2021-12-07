import React, { useState, useEffect, useRef } from "react";
import Appbar from "muicss/lib/react/appbar";
import { Container, Card } from "@material-ui/core";

import Canvas from "./Canvas.jsx";

const App = () => {
  return (
    <Container>
      <Canvas />
    </Container>
  );
};

export default App;
