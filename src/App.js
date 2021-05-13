import "./App.css";
import Welcome from "./pages/Welcome";
import PlanLayout from "./pages/layouts/PlanLayout";
import { BrowserRouter, Route } from "react-router-dom";
import PhoneConfirmation from "./pages/PhoneConfirmation";

// <planLayout>

function App() {
	return (
		<BrowserRouter>
			<PlanLayout>
				<Route exact path="/" component={Welcome} />
				<Route exact path="/invite" component={PhoneConfirmation} />
			</PlanLayout>
		</BrowserRouter>
	);
}

export default App;
