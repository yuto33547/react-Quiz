import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// createRootを使用してアプリケーションを初期化
const root = createRoot(document.getElementById("root"));

// Appコンポーネントをレンダリング
root.render(<App />);
