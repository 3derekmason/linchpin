import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Card,
  CardHeader,
  Paper,
  CardContent,
} from "@material-ui/core";

const Slide = () => {
  return (
    <Card id="slide">
      <CardHeader
        className="mui--text-header"
        style={{ background: "#FFC107" }}
      >
        Are You Indispensable?
      </CardHeader>
      <CardContent>Slide content will go here...</CardContent>
    </Card>
  );
};

export default Slide;
