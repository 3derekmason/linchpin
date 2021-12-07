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

  useEffect(() => {}, [current]);
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
