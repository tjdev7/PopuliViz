import { render, screen } from '@testing-library/react'
import ReactDOM from 'react-dom'

import SmallestCities from './components/SmallestCities'

test('Renders the SmallestCities component with no issues', () => {
    render(<SmallestCities />)
    // ReactDOM.render(<SmallestCities />);
    // ReactDOM.unmountComponentAtNode(div);
})
