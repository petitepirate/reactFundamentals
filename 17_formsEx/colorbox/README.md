# Springboard 39.8 React Forms Exercises - Color Box

## Testing Requirements
Make sure both of these apps have tests. Here are the guidelines for testing:

## Every component needs a smoke + snapshot test.
Critical Business Logic needs tests too. Use your judgement for this, but make sure you cover core functionality.  
Examples include: the ability to enter data, submit a form, and have the desired outcome appear in the DOM.

## Part 1 - Color Box Maker
Create a new React application, which contains the following components:

* App - this component should render the BoxList component.  
* BoxList - Place your state that contains all of the boxes here. This component should render all of the Box components along with the NewBoxForm component  
* Box - this component should display a div with a background color, width and height based on the props passed to it.  
* NewBoxForm - this component should render a form that when submitted, creates a new Box. You should be able to specify the Box’s width, height, and background color. When the form is submitted, clear the input values.  

When each Box component is displayed, add a button with the text of of “X” next to each Box. When this button is clicked, remove that specific box. This will require you to pass a function down as props - the button should not be a separate component, it should be included in the Box component.  

## Part 2 - Todo App - List, Add, Remove Todos
See To Do List App.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

