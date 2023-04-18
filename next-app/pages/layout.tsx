import Navbar from "./components/Navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className='bg-slate-800 min-h-screen'>
        <Navbar />
        {children}
      </div>
  )
}