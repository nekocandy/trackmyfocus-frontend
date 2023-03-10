import { Suspense } from "react";
import { useRoutes } from "react-router";

import routes from "~react-pages";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Navbar />
      <div className="h-full max-w-7xl mx-auto px-6 py-6">
        <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
      </div>
    </div>
  );
}
