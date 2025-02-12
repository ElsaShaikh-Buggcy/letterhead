import "./App.css";
import { VerficationLetterHead } from "./Pages/VerficationLetterHead";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<VerficationLetterHead />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
