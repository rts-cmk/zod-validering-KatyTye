import { createBrowserRouter, RouterProvider } from "react-router"
import Primary from "./pages/primary"
import Thanks from "./pages/Thanks"
import { useState } from "react"
import "./styles/main.sass"

function App() {
	const [savedData, setSavedData] = useState([])

	const browserRouter = createBrowserRouter([
		{
			path: "/",
			element: <Primary func={setSavedData} />
		},
		{
			path: "/thanks",
			element: <Thanks data={savedData} />
		}
	], {
		basename: "/zod-validering-KatyTye/"
	})

	return (<RouterProvider router={browserRouter} />)
}

export default App
