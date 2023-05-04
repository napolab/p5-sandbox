import { createRoot } from "react-dom/client";

import { getElementById } from "@utils/dom/getElementById";

import App from "./app";

getElementById("app").match(
  (element) => createRoot(element).render(<App />),
  (err) => alert(err)
);
