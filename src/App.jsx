import { SideNav } from "./components";
import { MainPage, New, Safety } from "./pages";
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
  useLocation,
} from "react-router-dom";

function App() {
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  return (
    <>
      {!isHomePage && <SideNav />}
      <Routes>
        <Route path="/" element={<MainPage />} />{" "}
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/new" element={<New />} />
        <Route path="/safety" element={<Safety />} />
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
      </Routes>
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
