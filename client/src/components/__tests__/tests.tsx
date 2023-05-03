

import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom"
import { act, fireEvent, getAllByTestId, getByTestId, render, screen, waitFor } from "@testing-library/react"

// User Profile
import { UserProfile } from "../profile/user-profile"

// Form
import { Form } from "../form"
import userEvent from "@testing-library/user-event"

// Mock routers
const MockUserProfile = (): JSX.Element => {
  return (
    <BrowserRouter>
      <UserProfile />
    </BrowserRouter>
  )
}

const MockFormRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Form />
    </BrowserRouter>
  )
}

// Profile component
describe('userProfile component', () => {

  it('should render a generic header', async () => {
    render(<MockUserProfile />);
    const boardupsHeader = screen.getByLabelText('Page Title');

    fireEvent.load(boardupsHeader)
    expect(boardupsHeader.textContent).toEqual('Looking for a match? Join a boardup');
  })

  it('should render "ATTENDING" in the header', async () => {
    render(<MockUserProfile />);
    const attendingButton = screen.getByText('Attending');
    const boardupsHeader = screen.getByLabelText('Page Title');

    fireEvent.click(attendingButton)
    expect(boardupsHeader.textContent).toEqual('ATTENDING');
  })

  it('should render "HOSTING" in the header', async () => {
    render(<MockUserProfile />);
    const attendingButton = screen.getByText('Hosting');
    const boardupsHeader = screen.getByLabelText('Page Title');

    fireEvent.click(attendingButton)
    expect(boardupsHeader.textContent).toEqual('HOSTING');
  })

  it('should render "BOARDUPS" in the header', async () => {
    render(<MockUserProfile />);
    const attendingButton = screen.getByText('Hosting');
    const boardupsHeader = screen.getByLabelText('Page Title');

    fireEvent.click(attendingButton)
    expect(boardupsHeader.textContent).toEqual('HOSTING');
  })
})



// Form component - rendering and enablement
describe('Check rendering and button enablement', () => {

  it('should render the component with the bttn', async () => {
    render(<MockFormRouter />);
    const submitButton = screen.getByText('Send');
    expect(submitButton).toBeInTheDocument();
  })

  it('the bttn should be enabled', async () => {
    render(<MockFormRouter />);
    const submitButton = screen.getByText('Send');
    expect(submitButton).toBeEnabled();
  })

})



// Form component - check requirement
describe('Check requirements', () => {

  // check game
  it('game should be required', async () => {
    render(<MockFormRouter />);

    const game = screen.getByLabelText('select a game')
    const submitButton = screen.getByText('Send');
    fireEvent.click(submitButton)

    expect(game).toBeRequired()
  })

  // check level
  it('level should be required', async () => {
    render(<MockFormRouter />);

    const level = screen.getByLabelText('select a level')
    const submitButton = screen.getByText('Send');
    fireEvent.click(submitButton)

    expect(level).toBeRequired()
  })

   // check players
  it('players should be required', async () => {
    render(<MockFormRouter />);

    const players = screen.getByLabelText('inset the number of players you will play with')
    const submitButton = screen.getByText('Send');
    fireEvent.click(submitButton)

    expect(players).toBeRequired()
  })

  // check location
  it('location should be required', async () => {
    render(<MockFormRouter />);

    const location = screen.getByLabelText('inset a location')
    const submitButton = screen.getByText('Send');
    fireEvent.click(submitButton)

    expect(location).toBeRequired()
  })

  // check date & time
  it('date & time should be required', async () => {
    render(<MockFormRouter />);

    const dateAndTime = screen.getByLabelText('inset a date and time')
    const submitButton = screen.getByText('Send');
    fireEvent.click(submitButton)

    expect(dateAndTime).toBeRequired()
  })

  // check details
  it('details should be required', async () => {
    render(<MockFormRouter />);

    const details = screen.getByLabelText('inset details about this boardup')
    const submitButton = screen.getByText('Send');
    fireEvent.click(submitButton)

    expect(details).toBeRequired()
  })
})



// Form component - check typing
describe('Check typing of the fields', () => {

  // check selection in level
  it('should be able to select a level', async () => {
    render(<MockFormRouter />);

    // https://stackoverflow.com/questions/12989741/the-property-value-does-not-exist-on-value-of-type-htmlelement
    act(() => {
      fireEvent.change(screen.getByRole('combobox', {name: /level/i}), {target: {value: 'Rookies'}})
    })
    let options = screen.getAllByTestId('select-option') as HTMLOptionElement[]
    expect(options[1].selected).toBeTruthy();
  })

  // check typing in location
  it('should be able to type in textbox for location', async () => {
    render(<MockFormRouter />);

    const location = screen.getByLabelText<HTMLInputElement>('inset a location')
    fireEvent.change(location, {target: {value: 'testing typing'}})

    expect(location.value).toBe('testing typing')
  })

  // check selection in players
  it('should be able to select number of players', async () => {
    render(<MockFormRouter />);

    const players = screen.getByLabelText<HTMLInputElement>('inset the number of players you will play with')
    fireEvent.change(players, {target: {value: 1}})

    expect(players.value).toBe('1')
  })

  // check selection in date and time
  it('should be able to select date and time', async () => {
    render(<MockFormRouter />);

    const dt = screen.getByLabelText<HTMLInputElement>('inset a date and time')
    fireEvent.change(dt, {target: {value: '2018-06-07T00:00'}})

    expect(dt.value).toBe('2018-06-07T00:00')
  })

  // check typing in details
  it('should be able to type in textbox for details', async () => {
    render(<MockFormRouter />);

    const details = screen.getByLabelText<HTMLInputElement>('inset details about this boardup')
    fireEvent.change(details, {target: {value: 'testing typing'}})

    expect(details.value).toBe('testing typing')
  })
})



// Form component - check typing
describe('Check if fields are empty after submition', () => {

  // check typing in location
  it('should reset the field after submition', async () => {
    render(<MockFormRouter />);

    const location = screen.getByLabelText<HTMLInputElement>('inset a location')
    const submitButton = screen.getByText('Send');

    fireEvent.change(location, {target: {value: 'testing typing'}})
    fireEvent.click(submitButton)

    expect(location.value).toBe('')
  })
})