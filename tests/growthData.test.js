import { render, screen } from '@testing-library/react'
import growthData from '../src/components/growthData.jsx'

test('Renders the growthData component with no issues', () => {
    render(<growthData />)
    // ReactDOM.render(<growthData />);
    // ReactDOM.unmountComponentAtNode(<growthData />);
})
