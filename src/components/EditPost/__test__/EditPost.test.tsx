import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import user  from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Editpost from '../Editpost';

import { Route, Routes, BrowserRouter } from 'react-router-dom';




it('renders if the edit button is working', () => {

  toRenderEditPost();

  const editButton = screen.getByTitle('editButton');
  expect(editButton).toBeInTheDocument();
  

  
});

it('form contains the fields', () => {
  toRenderEditPost();
  const inputPriority = screen.getByRole('combobox', {name: /choose priority/i})

  user.selectOptions(inputPriority, within(inputPriority).getAllByRole('option', {name: 'High'}));

  user.selectOptions(inputPriority, within(inputPriority).getAllByRole('option', {name: 'Medium'}));

  user.selectOptions(inputPriority, within(inputPriority).getAllByRole('option', {name: 'Low'}));

  expect(inputPriority).toBeInTheDocument(); 

  const inputTitle = screen.getByPlaceholderText(/title/i);
  expect(inputTitle).toBeInTheDocument(); 

  const inputMessage = screen.getByPlaceholderText(/message/i);
  expect(inputMessage).toBeInTheDocument(); 


});

it('if the form fields are prefilled on edit mode', () => {
  toRenderEditPost();
  

});

it('if the form shows validation errors', () => {


});

it('if the form submits the correct data', () => {

});



const toRenderEditPost = () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Editpost />}></Route>
      </Routes>
    </BrowserRouter>
  );
};


