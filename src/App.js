import React from "react";
import AppRouter from "./router/appRouter";
import { BrowserRouter } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
