import { useState } from "react";
import "./App.css";
import { Article } from "./components/Article";
import { ImageRender } from "./components/ImadeRender";
import { MainInfo } from "./components/MainInfo";

const Section = ({ children }) => {
  return <section className="articles-box">{children}</section>;
};

function App() {
  return (
    <Section>
      <Article>
        <ImageRender img="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Peace_symbol_%28bold%29.svg/478px-Peace_symbol_%28bold%29.svg.png"></ImageRender>
        <MainInfo
          title="Card title"
          text="Some quick example text to build on the card title and make up thebulk of the cards content."
        ></MainInfo>
      </Article>
      <Article>
        <MainInfo
          title="Hello World!"
          text="hgjjvkhjfjvkbkvskvbskvbksbvksbvkbsvkjbsvbsjbvsjbvjhbsdjvbdsjlvbdsjl"
        ></MainInfo>
      </Article>
    </Section>
  );
}

export default App;
