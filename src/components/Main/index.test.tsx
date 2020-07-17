import { render, screen } from '@testing-library/react'

import Main from './'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /nextjs boilerplate/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('Should render colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ background: '#3a3a3f' })
  })
})
