import React, { useState, useEffect, useRef } from "react";
import Appbar from "muicss/lib/react/appbar";
import { Container, Card } from "@material-ui/core";

const App = () => {
  return (
    <Container>
      <Appbar className="mui--text-headline">
        Lightning Prezzy by Derek Mason
      </Appbar>
      <Card>
        <div className="mui--text-display3">Are you indispensable?</div>
      </Card>
    </Container>
  );
};

export default App;
