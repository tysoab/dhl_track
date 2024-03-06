import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DhlProvider from "./util/dhlProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DhlProvider>
    <App />
  </DhlProvider>
);
