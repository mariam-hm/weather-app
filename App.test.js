import React from 'react';
import { render } from '@testing-library/react-native';
import App from './App';
import SearchView from './views/SearchView';
import CityForm from './components/CityForm';

it('Renders city form properly', () => {
    const { getAllByPlaceholderText } = render(<CityForm handleSearch={null} />);
    expect(getAllByPlaceholderText('Enter city name...').length.toBe(1));
})

