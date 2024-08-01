import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// import { ClerkProvider } from "@clerk/clerk-react";

// Initialize Config
// import * as dotenv from "dotenv";
// dotenv.config();

// const PUBLISHABLE_KEY = process.env.VITE_CLERK_PUBLISHABLE_KEY;
// console.log(PUBLISHABLE_KEY)
// if (!PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key");
// }

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <ClerkProvider publishableKey={PUBLISHABLE_KEY}> */}
      <App />
    {/* </ClerkProvider> */}
  </React.StrictMode>
);
