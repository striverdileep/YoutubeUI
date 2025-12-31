import logo from "./logo.svg";
import "./App.css";
import YouTubeHeader from "./components/YouTubeHeader";
import Videos from "./components/Videos";
import { Toolbar } from "@mui/material";
import { useEffect, useState } from "react";
function App() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="App">
      <YouTubeHeader w={width} />
      <Videos w={width} />
    </div>
  );
}

export default App;
