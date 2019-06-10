import React from "react";
import ReactDOM from "react-dom";
import { Frame } from "framer";

import "./styles.css";
//use center="y" when you want to center something to it's parent
//X will mean horizantal in direction when using it as a non-variable, i.e look at drag
//quoted text = string
//double curley brackets = object
//single curly bracket = boolean value (can only be true or false)

function App() {
  return (
    <div className="App">
      <Frame width={290} center="x" background="transparent" top={50}>
        <Frame //body
          background="url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fskinny-portrait.png)"
          width={290}
          height={290}
          borderRadius={150}
        />
        <Frame //cheeck
          background="url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fcheek.png)"
          width={79}
          height={67}
          left={155}
          top={135}
          //animate={props.cheekAnimate}
        />
      </Frame>
      <Frame width={290} center="x" background="transparent" top={50} />
      <Frame //slider
        width={280}
        height={15}
        borderRadius={30}
        center
        backgroundColor="white"
      >
        <Frame
          size={60}
          borderRadius={30}
          center="y"
          backgroundColor="white"
          shadow="0 1px 5px 0 rgba(0, 0, 0, 0.25)"
          drag={"x"}
          dragConstraints={{ left: 0, right: 220 }}
          dragElastic={false}
          dragMomentum={false}
          onDrag={function(event, info) {
            // change the scale of the cheek
            // object dot notion
            console.log(info.point);
          }}
        />
      </Frame>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
