import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Course from './pages/Course'
import PhoneBook from "./pages/PhoneBook.jsx";
import Country from "./pages/Country.jsx";


const App = () => {

    return (
        <BrowserRouter>
            <h1>MyApp</h1>
            <nav>
                <ul style={{ listStyleType: 'none' }}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/courses">Courses</Link></li>
                    <li><Link to="/phonebooks">phonebooks</Link></li>
                    <li><Link to="/countries">countries</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/courses" element={<Course />} />
                <Route path="/phonebooks" element={<PhoneBook />} />
                <Route path="/countries" element={<Country />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
