import { render, screen } from '@testing-library/react';
import HomePage from '../HomePage';

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

test.skip('schedules a timer after 7400ms', () => {
  render(<HomePage />);

  jest.advanceTimersByTime(7400);

  expect(setTimeout).toBeCalled();
  expect(setTimeout).toHaveBeenCalledTimes(2);
});

test.skip('homepage renders text after timeout', () => {
  render(<HomePage />);

  const nameText = screen.queryByText('Marin Luic', { exact: false });
  expect(nameText).toBeInTheDocument();

  const fullStackText = screen.getByText('fullstack web developer', {
    exact: false,
  });
  expect(fullStackText).toHaveTextContent("I'm a fullstack web developer");

  const uiUXDesignText = screen.getByText('UI/UX design', { exact: false });
  expect(uiUXDesignText).toHaveTextContent('with a passion for UI/UX design');
});
