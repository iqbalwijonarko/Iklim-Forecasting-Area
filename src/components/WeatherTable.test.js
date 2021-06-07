import { render, screen } from '@testing-library/react';
import WeatherTable from './WeatherTable';

test('find header in page', () => {
    var city = "Jakarta"
    var data = [{
        day: "2021-06-07",
        difTmp: "2.66",
        tmp: "30",
    }]
    render(<WeatherTable city={city} data={data} />);

    const linkElement = screen.getByText(/Jakarta/i);
    expect(linkElement).toBeInTheDocument();
});