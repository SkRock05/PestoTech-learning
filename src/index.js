import ReactDOM from "react-dom";
import React from "react";
// import { Header } from "./App";
// import { Update } from "./Update";
// import { Unmount } from "./Unmount";
// import { Hooks } from "./Component/Hooks";
import { UseEffect, UseEffectExample } from "./Component/UseEffect/UseEffect";
import { Car } from "./Component/UseEffect/UseEffect1";
import { UseRef } from "./Component/UseRef/UseRef";
import { UseRef1 } from "./Component/UseRef/UseRef1";
import { UseRef2 } from "./Component/UseRef/UseRef2";
import { UseReducer } from "./Component/UseReducer/UseReducer";
import { CustomHook } from "./Component/CustomHooks/CustomHook1";

const rootEl = document.getElementById("root");
const app = (
  <div>
    {/* <Header color="blue" /> */}
    {/* <Update color="yellow" /> */}
    {/* <Unmount /> */}
    {/* <Hooks /> */}
    {/* <UseEffectExample /> */}
    {/* <Car /> */}
    {/* <UseRef /> */}
    {/* <UseRef1 /> */}
    {/* <UseRef2 /> */}
    {/* <UseReducer /> */}
    <CustomHook />
  </div>
);
ReactDOM.render(app, rootEl);
