import "./App.css";
import Welcome from "./pages/Welcome";
import PlanLayout from "./pages/layouts/PlanLayout";
import { BrowserRouter } from "react-router-dom";
// <planLayout>

function App() {
	return (
		<BrowserRouter>
			<PlanLayout>
				<Welcome />
			</PlanLayout>
		</BrowserRouter>
	);
}

export default App;
