import { render, screen } from '@testing-library/react'
import ReactDOM from 'react-dom'

import growthData from './components/growthData'

test('Renders the growthData component with no issues', () => {
    render(<growthData />)
    // ReactDOM.render(<growthData />);
    // ReactDOM.unmountComponentAtNode(<growthData />);
})
