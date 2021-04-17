import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TopMenu from "./components/TopMenu";
import Products from "./pages/Products";
import { CartProvider } from "./contexts/Cart";
const Index = () => <h2>Home</h2>;
function App() {
	return (
		<CartProvider>
			<Router>
				<div className="App">
					<TopMenu />

					{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

					<Route path="/" exact component={Index} />
					<Route path="/products" exact component={Products} />
				</div>
			</Router>
		</CartProvider>
	);
}

export default App;
