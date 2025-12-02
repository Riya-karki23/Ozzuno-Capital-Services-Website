// src/Layout.jsx
import Navbar from "./Components/Navbar";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const { pathname } = useLocation();

  // saare policy pages pe navbar hide
  const isPolicyPage = pathname.startsWith("/policy/");

  return (
    <div className="min-h-screen text-slate-500">
      {/* sirf non-policy pages pe navbar dikhाओ */}
      {!isPolicyPage && <Navbar />}

      {/* agar navbar hai to pt-24, warna full screen content */}
      <main className={isPolicyPage ? "" : "pt-24"}>
        <Outlet />
      </main>
    </div>
  );
}
