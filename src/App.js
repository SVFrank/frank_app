import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Edit from "./page/Edit";
import Delete from "./page/Delete";
import View from "./page/View";
import Home from "./page/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/delete/:id" element={<Delete />} />
        <Route path="/view/:id" element={<View />} />
      </Routes>
    </Router>
  );
}

export default App;
