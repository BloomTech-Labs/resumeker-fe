import React from 'react';
import *  as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {BrowserRouter as Router} from "react-router-dom";
import Education from './Education';

it('check if form displays', () => {
    const wrapper = rtl.render(<Router><Education /></Router>);
    const element = wrapper.getByTestId("label")

    expect(element).toHaveTextContent(/education/i)
    // const form = getByTestId('form');
    // const output = getByTestId('output');
    // const label = getByTestId('label');
    // const nameInput = getByTestId('nameInput');
    // const submit = getByTestId('submit');
  
    // expect(form).toBeInTheDocument();
    // expect(output).toBeEmpty('');
    // expect(label).toHaveTextContent('Enter Name');
    // expect(nameInput).toHaveValue('');
    // expect(submit).toBeInTheDocument();
  });