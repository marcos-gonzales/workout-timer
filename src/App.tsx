import { Routes, Route } from "react-router-dom";
import Timer from "./components/Timer";
import Home from "./components/Home";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/timer" element={<Timer />} />
		</Routes>
	);
}

export default App;
