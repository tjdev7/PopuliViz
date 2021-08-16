import React from 'react'

import main from './components/main'
import growthData from './components/growthData'
import growingCities from './components/growingCities'
import smallestCities from './components/smallestCities'

import { BrowserRouter, Route, Link } from 'react-router-dom'

import './css/main.css'

class Start extends React.Component {
    render() {
        return (
            <article class="main-container component">
                <h1>Popular Visular</h1>

                <br />

                <BrowserRouter>
                    <nav>
                        <Link to="/main">
                            <button>
                                <span class="icon_style">🏠</span> Home
                            </button>
                        </Link>
                    </nav>

                    <nav>
                        <Link to="/growthData">
                            <button>
                                <span class="icon_style"> 📈</span> Population
                                growth in %
                            </button>
                        </Link>
                    </nav>

                    <nav>
                        <Link to="/growingCities">
                            <button>
                                <span class="icon_style">🏙️</span> Fastest
                                growing cities
                            </button>
                        </Link>
                    </nav>

                    <nav>
                        <Link to="/smallestCities">
                            <button>
                                <span class="icon_style">🏚️</span> Smallest
                                towns
                            </button>
                        </Link>
                    </nav>

                    <Route path="/main" component={main} />

                    <Route path="/growthData" component={growthData} />

                    <Route path="/growingCities" component={growingCities} />

                    <Route path="/smallestCities" component={smallestCities} />
                </BrowserRouter>
            </article>
        )
    }
}

export default Start
