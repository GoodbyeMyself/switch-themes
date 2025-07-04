import { CardContainer } from "./components/card-container.jsx";
import { Card } from "./components/card.jsx";
import { useRef } from "react";
import { useThemeContext } from "./theme.jsx";
import { crop, toCanvas } from "./utils.js";

function App() {
  const containerRef = useRef();
  const parentRef = useRef();
  const canvasRef = useRef();
  const themeContext = useThemeContext();

  const handleSwitch = (event) => {
    toCanvas(containerRef.current).then((canvas) => {
      canvasRef.current = canvas;
      parentRef.current.appendChild(canvas);
      setTimeout(() => {
        crop(canvas, event, { reverse: themeContext.mode === "dark" }).then(() => {
          parentRef.current.removeChild(canvas);
        });
        themeContext.toggleTheme();
      }, 1);
    });
  };

  return (
    <div ref={parentRef} className={"relative w-screen h-screen flex flex-row justify-evenly items-center"}>
      <CardContainer ref={containerRef}>
        <Card handleSwitch={handleSwitch} />
      </CardContainer>
    </div>
  );
}

export default App;
