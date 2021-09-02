import Header from './components/header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

// pages
import Home from './pages/home/Home';

export default function App() {
    return (
        <div className="App">
            <Router>
                <Switch>

                    <Header />

                    <Route exact path="/">
                        <Home />
                    </Route>
                    
                </Switch>
            </Router>
        </div>
    );
}