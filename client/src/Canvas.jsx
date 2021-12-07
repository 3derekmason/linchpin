import React, { useState, useEffect, useRef } from "react";
import { Container, Card, Paper } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import Slide from "./Slide.jsx";
import SlideLibrary from "./SlideLibrary.js";
import { StayCurrentLandscapeOutlined } from "@material-ui/icons";
const Canvas = () => {
  const [currentSlide, setCurrentSlide] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!currentSlide) {
      setCurrentSlide(SlideLibrary[currentIndex]);
    }
    console.log(currentSlide);
  }, [currentSlide]);

  return (
    <Container>
      <Paper elevation={8} id="canvas">
        <NavigateBeforeIcon id="before" />
        <Slide current={currentSlide} index={currentIndex} />
        <NavigateNextIcon
          id="next"
          onClick={(e) => {
            e.preventDefault();
            setCurrentIndex(currentIndex + 1);
            setCurrentSlide(SlideLibrary[currentIndex]);
          }}
        />
      </Paper>
    </Container>
  );
};

export default Canvas;
