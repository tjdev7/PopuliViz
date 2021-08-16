import { render, screen } from '@testing-library/react'
import smallestCities from '../src/components/smallestCities.jsx'

test('Renders the smallestCities component with no issues', () => {
    render(<smallestCities />)
    // ReactDOM.render(<smallestCities />);
    // ReactDOM.unmountComponentAtNode(div);
})
