import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import "./assets/fonts/dinpro/DINPro-Regular.ttf";
import "./assets/fonts/dinpro/DINPro-Medium.ttf";
import "./assets/fonts/dinpro/DINPro-Light.ttf";
import "./assets/fonts/dinpro/DINPro-Bold.ttf";
import "./assets/fonts/dinpro/DINPro-Black.ttf";
import "./assets/fonts/gotham-rounded/Bold.otf";
import "./assets/fonts/gotham-rounded/Medium.otf";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
