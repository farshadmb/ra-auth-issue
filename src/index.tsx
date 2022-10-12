import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { App } from "@/App"
import { App as App2 } from "@/App2"
import "./index.css"

const container = document.getElementById("root")
const root = createRoot(container)

root.render(
  <StrictMode>
    {/* This approch requires to define `useAuthenticated()` hook to ensure each page need to be check. might be error prunes
      For custom routes that don't require authentication you can bypassing `useAuthenticated()` hook. 
      */}
    {/* <App name="Panel Admin Template" /> */}
    {/* Uncomment this to force whole admin component requires authentication process */}
    <App2 name="Panel Admin Template" />
  </StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
