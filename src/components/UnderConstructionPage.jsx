import Navbar from "./navbar";

export default function UnderConstructionPage() {
  return (
    <div>
      <Navbar />
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold">Under Construction</h1>
        <p className="text-2xl">
          This page is currently being worked on. Please check back later.
        </p>
      </div>
    </div>
  );
}

