import { render, screen } from '@testing-library/react'
import growingCities from '../src/components/growingCities.jsx'

test('Renders the growingCities component with no issues', () => {
    render(<growingCities />)
    // ReactDOM.render(<growingCities />);
    // ReactDOM.unmountComponentAtNode(div);
})
