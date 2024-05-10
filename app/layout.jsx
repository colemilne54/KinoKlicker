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
		<body className={`${montserrat.className}`}>
			<Navbar />
			<div className='mx-12 mb-12 mt-4 sm:mx-32 sm:mb-32 sm:mt-16'>{children}</div>
		</body>
	  </html>
	)
  }
