import { render, screen } from '@testing-library/react'
import ReactDOM from 'react-dom'

import GrowthData from './components/GrowthData'

test('Renders the GrowthData component with no issues', () => {
    render(<GrowthData />)
    // ReactDOM.render(<GrowthData />);
    // ReactDOM.unmountComponentAtNode(<GrowthData />);
})
