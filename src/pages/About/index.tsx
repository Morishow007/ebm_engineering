import { Link } from 'react-router-dom'

// this is a showcase for dynamically routing
const MOCK_DATA = ['1', '2', '3']

export const About = () => {
  return (
    <>
      <h2>ABOUT PAGE</h2>
      {MOCK_DATA.map((item) => (
        <Link key={item} to={'/about/' + item}>
          Engenheiro {item}
        </Link>
      ))}
    </>
  )
}
