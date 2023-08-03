import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";

import AppContext from "./component/dashboard/common/context/AppContext";

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/start-now" element={<Dashboard />} />
        </Routes>
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
