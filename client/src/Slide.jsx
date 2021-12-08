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
  const [section, setSection] = useState();
  const sections = [
    "Are you Indispensable?",
    "Part 1: Give your work your all and be insdispensable.",
    "Part 2: Fear, resistance, and the Lizard Brain",
  ];

  useEffect(() => {
    if (current?.section === "") {
      setSection("");
    }
    setSection(sections[current?.section]);
  }, [current]);
  return (
    <Card id="slide">
      <div className="mui--text-header">{section}</div>
      <CardContent>{props.current?.text}</CardContent>
    </Card>
  );
};

export default Slide;
