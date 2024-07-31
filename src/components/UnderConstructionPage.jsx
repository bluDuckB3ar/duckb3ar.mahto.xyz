import Navbar from "./navbar";

export default function UnderConstructionPage() {
  return (
    <div className="bg-duck-night">
      <Navbar />
      <div className="h-screen flex flex-col items-center justify-center bg-duck-night text-white">
        <h1 className="text-6xl font-bold">Under Construction</h1>
        <p className="text-2xl">
          This page is currently being worked on. Please check back later.
        </p>
      </div>
    </div>
  );
}
