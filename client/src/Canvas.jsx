import React, { useState, useEffect, useRef } from "react";
import { Container, Card, Paper } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import Slide from "./Slide.jsx";
import SlideLibrary from "./SlideLibrary.js";
const Canvas = () => {
  const [currentSlide, setCurrentSlide] = useState();

  useEffect(() => {
    if (!currentSlide) {
      setCurrentSlide({ data: SlideLibrary[0] });
    }
    console.log(currentSlide);
  }, [currentSlide]);

  return (
    <Container>
      <Paper elevation={8} id="canvas">
        <NavigateBeforeIcon />
        <Slide />
        <NavigateNextIcon />
      </Paper>
    </Container>
  );
};

export default Canvas;
