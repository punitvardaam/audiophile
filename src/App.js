import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from "./components/pages/HomePage";
import HeadPhone from "./components/pages/HeadPhone";

function App() {
    return (
        <>
            <Router>
                <Header/>
                <Routes>
                    <Route exact path="/" element={<HomePage/>}/>
                    <Route path="/headphones" element={<HeadPhone/>}/>
                </Routes>
                <Footer/>
            </Router>
        </>
    );
}

export default App;
