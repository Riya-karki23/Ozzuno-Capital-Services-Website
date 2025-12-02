// src/Layout.jsx
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Navbar />
      {/* yaha pt-24 navbar ki height ka offset hai */}
      <main className="pt-24 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
