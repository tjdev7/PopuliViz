import { render, screen } from '@testing-library/react'
import ReactDOM from 'react-dom'

import smallestCities from './components/smallestCities'

test('Renders the smallestCities component with no issues', () => {
    render(<smallestCities />)
    // ReactDOM.render(<smallestCities />);
    // ReactDOM.unmountComponentAtNode(div);
})
