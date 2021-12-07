import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Card,
  CardHeader,
  Paper,
  CardContent,
} from "@material-ui/core";

const Slide = (props) => {
  const { current } = props;
  const { index } = props;

  useEffect(() => {
    console.log(props);
  }, [current]);
  return (
    <Card id="slide">
      <CardHeader
        className="mui--text-header"
        style={{ background: "#FFC107" }}
      >
        Are You Indispensable?
      </CardHeader>
      <CardContent>{props.current?.text}</CardContent>
    </Card>
  );
};

export default Slide;
