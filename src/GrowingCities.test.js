import { render, screen } from '@testing-library/react'
import ReactDOM from 'react-dom'

import GrowingCities from './components/GrowingCities'

test('Renders the GrowingCities component with no issues', () => {
    render(<GrowingCities />)
    // ReactDOM.render(<GrowingCities />);
    // ReactDOM.unmountComponentAtNode(div);
})
