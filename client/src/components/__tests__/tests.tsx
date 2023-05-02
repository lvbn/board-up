

import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom"
import { act, fireEvent, getByTestId, render, screen, waitFor } from "@testing-library/react"

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

// beforeAll(() => jest.spyOn(window, 'fetch'))
// assuming jest's resetMocks is configured to "true" so
// we don't need to worry about cleanup
// this also assumes that you've loaded a fetch polyfill like `whatwg-fetch`

// Form component
describe('form component', () => {

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
  it('date & time should be required', async () => {
    render(<MockFormRouter />);

    const details = screen.getByLabelText('inset details about this boardup')
    const submitButton = screen.getByText('Send');
    fireEvent.click(submitButton)

    expect(details).toBeRequired()
  })

  // it('should select a game from the options', async () => {

  //   const mockGames = [
  //     {
  //       _id: 'abc',
  //       name: 'abc',
  //       mediaUrl: 'http://example.com'
  //     }
  //   ]

  //   const mockedFetch = jest.spyOn(window, 'fetch').mockImplementation((url) => Promise.resolve(mockGames))
  //   render(<MockFormRouter />);



  //   await waitFor(() => {
  //     expect(screen.getByTestId(0)).toBeInTheDocument()
  //   })

  //   const selectGame = await screen.findByLabelText('select a game');
  //   // userEvent.selectOptions(await screen.findByTestId('0'))

  //   // fireEvent.change(selectGame, { target: { value: 2 } })
  // })
})