export default function AboutLayout({ children }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold">About Me</h1>
      {children}
    </div>
  )
}