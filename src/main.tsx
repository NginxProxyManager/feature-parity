import React from "react";

import { MantineProvider, createTheme } from "@mantine/core";
import ReactDOM from "react-dom/client";

import App from "./App";

import "@mantine/core/styles.css";

const theme = createTheme({
  /** Put your mantine theme override here */
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <App />
    </MantineProvider>
  </React.StrictMode>,
);
