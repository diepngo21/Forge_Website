import { Navbar } from "./components";
import { MainPage, Safety, New, Contact } from "./pages";
// Services Page
import {
  Printer,
  PostPrinter,
  Laser,
  AnkerMake,
  Ultimaker,
  Microscope,
  Waste_Disposal,
  Instron,
} from "./pages";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />{" "}
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/new" element={<New />} />
          <Route path="/services/3dprinter" element={<Printer />} />
          <Route path="/services/post_printer" element={<PostPrinter />} />
          <Route path="/services/laser_cutter" element={<Laser />} />
          <Route path="/services/ankermake" element={<AnkerMake />} />
          <Route path="/services/waste_disposal" element={<Waste_Disposal />} />
          <Route path="/services/ultimaker" element={<Ultimaker />} />
          <Route
            path="/services/keyence_digital_microscope"
            element={<Microscope />}
          />
          <Route path="/services/instron" element={<Instron />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
