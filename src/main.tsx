import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Rain from "./pages/rain.tsx";
import {StreamProvider} from "./context/StreamContext.tsx";

createRoot(document.getElementById('root')!).render(
    <StreamProvider>
        <Router>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/rain" element={<Rain/>}/>
            </Routes>
        </Router>
    </StreamProvider>
)
