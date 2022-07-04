import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '~/components/Header/Header';
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:imdbID" element={<MovieDetail />} />
                    {/* Switch to Home page */}
                    {/* <Route path="*" element={<Navigate to="/" />} /> */}
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
