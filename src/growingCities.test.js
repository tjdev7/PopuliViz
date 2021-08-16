import { render, screen } from '@testing-library/react'
import ReactDOM from 'react-dom'

import growingCities from './components/growingCities'

test('Renders the growingCities component with no issues', () => {
    render(<growingCities />)
    // ReactDOM.render(<growingCities />);
    // ReactDOM.unmountComponentAtNode(div);
})
