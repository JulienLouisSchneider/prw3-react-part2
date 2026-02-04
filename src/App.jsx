import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Course from './pages/Course'

const App = () => {
    return (
        <BrowserRouter>
            <h1>MyApp</h1>
            <nav>
                <ul style={{ listStyleType: 'none' }}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/courses">Courses</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/courses" element={<Course />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
