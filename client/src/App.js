import Header from './components/header';
import './App.css';

// pages
import Home from './pages/home/Home';

export default function App() {
    return (
        <div className="App">
            <Header />
            <Home />
        </div>
    );
}