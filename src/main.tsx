import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./app/App"
import { PortfolioProvider } from "./context/PortfolioContext"
import "./index.css"

const container = document.getElementById("root")

if (!container) {
  throw new Error("Root container (#root) not found in index.html")
}

const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <PortfolioProvider>
      <App />
    </PortfolioProvider>
  </React.StrictMode>
)