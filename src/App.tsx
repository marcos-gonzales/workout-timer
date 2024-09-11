import { Routes, Route } from "react-router-dom";
import Timer from "./components/Timer";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/timer" element={<Timer />} />
			<Route path="/login" element={<Login />} />
		</Routes>
	);
}

export default App;
