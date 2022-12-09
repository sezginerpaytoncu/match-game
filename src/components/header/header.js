// import logo from '../../../public/logo.png'

export function Header() {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={"/logo.png"} alt="" width="30" height="24" className="d-inline-block align-text-top me-3"/>
            Match Game
          </a>
        </div>
      </nav>
    </>
  )
}