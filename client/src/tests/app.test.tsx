import { BrowserRouter } from "react-router-dom"
import { Form } from "../components/form"
import { fireEvent, render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import { UserDash } from "../components/userDashboard"
import { DashboardState } from "../components/userDashboard"

const MockFormRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Form />
    </BrowserRouter>
  )
}

const MockUserDashRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <UserDash />
    </BrowserRouter>
  )
}

describe('example', () => {
  it('testing', () => {
    expect(true).toBe(true)
  })
})

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

  it('should have all fields populated', async () => {
    render(<MockFormRouter />);
    // create test to verify that all fields have length
  })

  it('the bttn should be disabled if one of the fields is not populated', async () => {
    render(<MockFormRouter />);
    // create test to verify that all fields have length
  })
})

describe('userDashboard component', () => {
  it('should render a generic header', async () => {
    render(<MockUserDashRouter />);
    const boardupsHeader = screen.getByLabelText('Page Title');

    fireEvent.load(boardupsHeader)
    expect(boardupsHeader.textContent).toEqual('Looking for a match? Join a boardup');
  })

  it('should render the ATTENDING top header', async () => {
    render(<MockUserDashRouter />);
    const attendingButton = screen.getByText('Attending');
    const boardupsHeader = screen.getByLabelText('Page Title');

    fireEvent.click(attendingButton)
    expect(boardupsHeader.textContent).toEqual('ATTENDING');
  })

  it('should render the HOSTING top header', async () => {
    render(<MockUserDashRouter />);
    const attendingButton = screen.getByText('Hosting');
    const boardupsHeader = screen.getByLabelText('Page Title');

    fireEvent.click(attendingButton)
    expect(boardupsHeader.textContent).toEqual('HOSTING');
  })

  it('should render the BOARDUPS top header', async () => {
    render(<MockUserDashRouter />);
    const attendingButton = screen.getByText('Hosting');
    const boardupsHeader = screen.getByLabelText('Page Title');

    fireEvent.click(attendingButton)
    expect(boardupsHeader.textContent).toEqual('HOSTING');
  })
})
