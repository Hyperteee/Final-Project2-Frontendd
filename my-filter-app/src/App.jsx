import { BrowserRouter, Routes, Route } from "react-router-dom";
import PackagePage from "./pages/PackagePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PackagePage />} />
      </Routes>
    </BrowserRouter>
  );
}
