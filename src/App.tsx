import { VerficationLetterHead } from "./Pages/VerficationLetterHead";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/verify/:id" element={<VerficationLetterHead />} />
          {/* <Route path="/error" element={<ErrorCard />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
