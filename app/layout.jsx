import './globals.css'
import Navbar from './components/Navbar'
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--font-montserrat",
})

export default function RootLayout({ children }) {
	return (
	  <html lang="en">
		<head />
		<Navbar/>
		<body className={`${montserrat.className} m-32`}>{children}</body>
	  </html>
	)
  }
