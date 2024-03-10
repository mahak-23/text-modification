import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//style
import "./App.css";

//components
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0d0833";
      // showAlert("Dark mode turned on", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // showAlert("Light mode turned on", "success");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar title="Title" mode={mode} toggleMode={toggleMode} />
                <Alert alert={alert} />
                <TextForm
                  heading="Enter the text to modify"
                  mode={mode}
                  showAlert={showAlert}
                />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Navbar title="Title" mode={mode} toggleMode={toggleMode} />
                <About mode={mode} />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
