import './globals.css'

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>

			</head>

			<body>
				<nav>
					<h1>logo</h1>
					<ul>
						<li><a href="/about">About</a></li>
						<li><a href="#">Sign up</a></li>
					</ul>
				</nav>
				{children}
			</body>
		</html>
	)
}
