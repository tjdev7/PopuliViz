import React from 'react'

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import MainPage from './components/MainPage'
import GrowthData from './components/GrowthData'
import GrowingCities from './components/GrowingCities'
import SmallestCities from './components/SmallestCities'

import './css/main.css'

class App extends React.Component {
    render() {
        return (
            <article className="main-container MenuBar">
                <h1>PopuliViz</h1>

                <br />

                <BrowserRouter>
                    <nav>
                        <Link to="/MainPage">
                            <button>
                                <span className="icon_style">🏠</span>{' '}
                                <h2>About page</h2>
                            </button>
                        </Link>
                    </nav>

                    <nav>
                        <Link to="/GrowthData">
                            <button>
                                <span className="icon_style"> 📈</span>{' '}
                                <h2>
                                    Population growth <br />
                                    in percentage(%)
                                </h2>
                            </button>
                        </Link>
                    </nav>

                    <nav>
                        <Link to="/GrowingCities">
                            <button>
                                <span className="icon_style">🏙️</span>{' '}
                                <h2>Fastest growing cities</h2>
                            </button>
                        </Link>
                    </nav>

                    <nav>
                        <Link to="/SmallestCities">
                            <button>
                                <span className="icon_style">🏚️</span>{' '}
                                <h2>Smallest towns</h2>
                            </button>
                        </Link>
                    </nav>

                    <Routes>
                        <Route path="/MainPage" element={<MainPage />} />

                        <Route path="/GrowthData" element={<GrowthData />} />

                        <Route path="/GrowingCities" element={<GrowingCities />} />

                        <Route path="/SmallestCities" element={<SmallestCities />} />
                    </Routes>
                </BrowserRouter>
            </article>
        )
    }
}

export default App
