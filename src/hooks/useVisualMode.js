import React, { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (anotherMode, replace = false) => {
    setMode(anotherMode);
    if (!replace) {
      setHistory((prev) => [...prev, anotherMode]);
    }
  };

  const back = () => {
    if (history.length > 1) {
      const his = [...history];
      his.pop();
      setMode(his[his.length - 1]);
      setHistory(his);
    }
  };

  return { mode, transition, back };
}
