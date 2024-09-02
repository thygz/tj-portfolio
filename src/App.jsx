import Headers from './components/Headers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
    return (
        <div className="bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
            <BrowserRouter>
                <Headers />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};
export default App;
