import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AppLayout } from "./components/applayout/applayout";
import { Home } from "./pages/home";
import { NewTierList } from "./pages/new-tier-list";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="new-tier-list" element={<NewTierList />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}
