import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders Hello World as a text', () => {
    //Arrange:
    render(<Greeting />);

    //Act
    //nothing...

    //Assert
    const helloWorldElement = screen.getByText('Hello World');
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('render "good to see you" if the button was NOT clicked', () => {
    //Arrange:
    render(<Greeting />);

    //Assert:
    const outputElement = screen.getByText('good to see you!', { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test('render "Changed!" when button was clicked', () => {
    //Arrange:
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByText('Change Text!');
    userEvent.click(buttonElement);

    //Assert:
    const outputElement = screen.getByText('Changed!');
    expect(outputElement).toBeInTheDocument();
  });
});
