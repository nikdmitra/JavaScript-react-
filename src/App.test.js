import { render, screen } from '@testing-library/react';
import SamuraiAPP from './App';
import App from './App';
import ReactDOM from 'react-dom';
import React from 'react';
test('renders learn react link', () => {
 const div =document.createElement('div');
 ReactDOM.render(<SamuraiAPP/>, div)
 ReactDOM.unmountComponentAtNode(div)
});
