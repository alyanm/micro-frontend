import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import Header from "home/Header";
import Footer from "home/Footer";

const App = () => (
  <div className="container">
    <Header />
    <div>Name: micro-frontend</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <Footer />
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
