import Link from "next/link";
import Logo from "../Logo";
import { useContext } from "react";
import { ToggleContext } from "../../pages/_app";

const NavBar =  () => {
  const toggleContext = useContext(ToggleContext);
  
  return (
    <div className="top-navbar">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="d-xl-none d-lg-none d-sm-inline-block d-md-inline-block">
            <Link  href="/">
              <a className="navbar-brand">
                <Logo />
              </a>
            </Link>
          </div>
          <button
            className="d-inline-block d-lg-none ml-auto"
            type="button"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="#84818A"/>
            </svg>
          </button>
          <button
            className="d-inline-block d-lg-none ml-auto more-button"
            onClick={() => toggleContext.toggleDispatch("toggle")}
            type="button"
            data-toggle="collapse"
            data-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H16V2H0V0ZM4 5H16V7H4V5ZM9 10H16V12H9V10Z" fill="#5542F6"/>
            </svg>
          </button>
          <div
            className="collapse navbar-collapse d-lg-block d-xl-block d-sm-none d-md-none d-none"
            id="navbarContent"
          >
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item add">
                <Link  href="/">
                  <a
                    className="nav-link d-flex justify-content-around align-content-center align-items-center"
                    > <span>+</span>
                    <span> Add</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="#84818A"/>
                    </svg>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link circle">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.9167 22.0139C13.009 22.0139 13.9028 21.1202 13.9028 20.0278H9.93056C9.93056 21.1202 10.8144 22.0139 11.9167 22.0139ZM17.875 16.0556V11.0903C17.875 8.04164 16.2464 5.48949 13.4063 4.81421V4.13894C13.4063 3.3147 12.7409 2.64935 11.9167 2.64935C11.0924 2.64935 10.4271 3.3147 10.4271 4.13894V4.81421C7.57702 5.48949 5.95834 8.03171 5.95834 11.0903V16.0556L3.97223 18.0417V19.0348H19.8611V18.0417L17.875 16.0556Z" fill="#84818A"/>
                    </svg>
                    <span className="circle-icons"></span>
                  </a>
                </Link>
              </li>
              <li className="dropdown">
                <a href="#" className="dropbtn dropdown-toggle arrow" id="profileDropdown" data-toggle="dropdown">
                  <span className="profile-icons">MB</span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="profileDropdown">
                  <li>
                    <Link href="/">
                      <a>Profile</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Settings</a>
                    </Link>
                  </li>
                  <div className="dropdown-divider"></div>
                  <li>
                    <Link href="/">
                      <a>Logout</a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;