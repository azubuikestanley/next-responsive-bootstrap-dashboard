import Link from "next/link";
import { 
  useContext,
  useEffect,
  useState
} from "react";
import { ToggleContext } from "../../pages/_app";

const SideBar = () => {
  const [screenWidth, setScreenWidth] = useState("");
  const toggleContext = useContext(ToggleContext);
  const menuClick = toggleContext.toggleState;
  
  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
      if (screenWidth >= 751 && menuClick) {
        toggleContext.toggleDispatch("toggle");
        return;
      }
    });
  }, [screenWidth, toggleContext, menuClick]);

  return (
    <div className="sidebar-overlay">
      <div
        className={
          menuClick ? "wrapper-overlay show-nav" : "wrapper-overlay"
        }
        onClick={() => toggleContext.toggleDispatch("toggle")}
      ></div>

       {/* Sidebar  */}
      <nav
        className={ menuClick ? "sidebar show-nav" : "sidebar" }
      >
        <div className="sidebar-header">
          <h3>
            <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M11.5616 1.2187C13.0929 0.393654 14.9421 0.393654 16.4735 1.2187L25.3513 6.00176C27.0054 6.89295 28.0351 8.60871 28.0351 10.4738V19.526C28.0351 21.3911 27.0054 23.1069 25.3513 23.9981L16.4735 28.7811C14.9421 29.6062 13.0929 29.6062 11.5616 28.7811L2.68382 23.9981C1.02969 23.1069 0 21.3911 0 19.526L0 10.4738C0 8.60871 1.02969 6.89295 2.68382 6.00176L11.5616 1.2187Z" fill="#2E2C34"/>
              <ellipse cx="14.0176" cy="14.702" rx="5.33918" ry="5.28833" fill="#fbfafc"/>
            </svg>
            <span>Substance</span>
          </h3>
        </div>
        <ul className="list-unstyled components">
          <li className="dropdown mb-4">
            <a
              href="#profileSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle top-item"
              
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12.888 4.85985L11.5719 4.14015L11.4388 4.39166C10.1478 6.91351 10.0688 9.63686 11.1927 12.5055L11.2926 12.769C12.1904 15.2161 12.0986 17.3148 11.045 19.1223L12.3409 19.8777L12.4664 19.6545C13.6816 17.4116 13.7132 14.827 12.5893 11.9583L12.4895 11.6942C11.5945 9.23626 11.7303 6.97677 12.888 4.85985ZM7.94499 8.60985L6.62893 7.89015L6.52916 8.08126C5.86095 9.42435 5.82713 10.8784 6.41916 12.3895L6.49562 12.5955C6.87644 13.6827 6.82615 14.5907 6.37053 15.3723L7.66643 16.1277L7.76172 15.9557C8.39882 14.7431 8.40788 13.3536 7.8158 11.8424L7.73954 11.6355C7.36094 10.5389 7.43215 9.54764 7.94499 8.60985ZM16.3789 7.89015L17.695 8.60985C17.1822 9.54764 17.1109 10.5389 17.4895 11.6355L17.5658 11.8424C18.1579 13.3536 18.1488 14.7431 17.5117 15.9557L17.4164 16.1277L16.1205 15.3723C16.5762 14.5907 16.6264 13.6827 16.2456 12.5955L16.1692 12.3895C15.5771 10.8784 15.611 9.42435 16.2792 8.08126L16.3789 7.89015Z" fill="#FFA043"/>
              </svg>
              <span>Lajou cafe</span>
            </a>
            <ul className="collapse list-unstyled menu" id="profileSubmenu">
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
            </ul>
          </li>
          <li className="active">
            <a href="#" className="dashboard">
              <svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_101_610)">
                  <path d="M4 13H12V3H4V13ZM4 21H12V15H4V21ZM14 21H22V11H14V21ZM14 3V9H22V3H14Z" fill="#5542F6"/>
                </g>
                <defs>
                  <filter id="filter0_d_101_610" x="-3" y="0" width="32" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_101_610"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_101_610" result="shape"/>
                  </filter>
                </defs>
              </svg>
              <span>Dashboard</span>
            </a>
          </li>

          {/* Will show on mobile view */}
          <div className="small-screen navbar-display">
            <li className="d-lg-none d-md-block d-xl-none d-sm-block">
              <Link href="/">
                <a>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9167 22.0139C13.009 22.0139 13.9028 21.1202 13.9028 20.0278H9.93056C9.93056 21.1202 10.8144 22.0139 11.9167 22.0139ZM17.875 16.0556V11.0903C17.875 8.04164 16.2464 5.48949 13.4063 4.81421V4.13894C13.4063 3.3147 12.7409 2.64935 11.9167 2.64935C11.0924 2.64935 10.4271 3.3147 10.4271 4.13894V4.81421C7.57702 5.48949 5.95834 8.03171 5.95834 11.0903V16.0556L3.97223 18.0417V19.0348H19.8611V18.0417L17.875 16.0556Z" fill="#84818A"/>
                  </svg>
                  <span>Notification</span>
                  <span className="notify">5</span>
                </a>
              </Link>
            </li>
            <li className="d-lg-none d-md-block d-xl-none d-sm-block">
              <Link href="/">
                <a>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 0H4V2H20V0ZM4 24H20V22H4V24ZM20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM12 6.75C13.24 6.75 14.25 7.76 14.25 9C14.25 10.24 13.24 11.25 12 11.25C10.76 11.25 9.75 10.24 9.75 9C9.75 7.76 10.76 6.75 12 6.75ZM17 17H7V15.5C7 13.83 10.33 13 12 13C13.67 13 17 13.83 17 15.5V17Z" fill="#84818A"/>
                  </svg>
                  <span>Add</span>
                  <span className="add">+</span>
                </a>
              </Link>
            </li>
          </div>
          {/* mobile */}

          <li className="dropdown">
            <a
              href="#businessSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4V6H20V4ZM21 14V12L20 7H4L3 12V14H4V20H14V14H18V20H20V14H21ZM12 18H6V14H12V18Z" fill="#84818A"/>
              </svg>
              <span> Business</span>
            </a>
            <ul className="collapse list-unstyled menu" id="businessSubmenu">
              <li>
                <Link href="/">
                  <a>Porfolio</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Country</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              href="#SalesSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13.41 18.09V20H10.74V18.07C9.03 17.71 7.58 16.61 7.47 14.67H9.43C9.53 15.72 10.25 16.54 12.08 16.54C14.04 16.54 14.48 15.56 14.48 14.95C14.48 14.12 14.04 13.34 11.81 12.81C9.33 12.21 7.63 11.19 7.63 9.14C7.63 7.42 9.02 6.3 10.74 5.93V4H13.41V5.95C15.27 6.4 16.2 7.81 16.26 9.34H14.3C14.25 8.23 13.66 7.47 12.08 7.47C10.58 7.47 9.68 8.15 9.68 9.11C9.68 9.95 10.33 10.5 12.35 11.02C14.37 11.54 16.53 12.41 16.53 14.93C16.52 16.76 15.15 17.76 13.41 18.09Z" fill="#84818A"/>
              </svg>
              <span> Sales</span>
            </a>
            <ul className="collapse list-unstyled menu" id="SalesSubmenu">
              <li>
                <Link href="/">
                  <a>Monthly Sales</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Annual Sales</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Total Sales</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              href="#TransactionSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z" fill="#84818A"/>
              </svg>
              <span>Transaction</span>
            </a>
            <ul className="collapse list-unstyled menu" id="TransactionSubmenu">
              <li>
                <Link href="/">
                  <a>Monthly Transaction</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Annual Transaction</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Total Transaction</a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/">
              <a>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M15 3H5C3.9 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 4.99 21H19C20.1 21 21 20.1 21 19V9L15 3ZM8 17C7.45 17 7 16.55 7 16C7 15.45 7.45 15 8 15C8.55 15 9 15.45 9 16C9 16.55 8.55 17 8 17ZM8 13C7.45 13 7 12.55 7 12C7 11.45 7.45 11 8 11C8.55 11 9 11.45 9 12C9 12.55 8.55 13 8 13ZM8 9C7.45 9 7 8.55 7 8C7 7.45 7.45 7 8 7C8.55 7 9 7.45 9 8C9 8.55 8.55 9 8 9ZM14 10V4.5L19.5 10H14Z" fill="#84818A"/>
                </svg>
                <span>Expenses</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" fill="#84818A"/>
                </svg>
                <span>Report</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM14 6H10V4H14V6Z" fill="#84818A"/>
                </svg>
                <span>Projects</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 0H4V2H20V0ZM4 24H20V22H4V24ZM20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM12 6.75C13.24 6.75 14.25 7.76 14.25 9C14.25 10.24 13.24 11.25 12 11.25C10.76 11.25 9.75 10.24 9.75 9C9.75 7.76 10.76 6.75 12 6.75ZM17 17H7V15.5C7 13.83 10.33 13 12 13C13.67 13 17 13.83 17 15.5V17Z" fill="#84818A"/>
                </svg>
                <span>Contacts</span>
              </a>
            </Link>
          </li>
          <li className="mt-4 d-lg-none d-md-block d-xl-none d-sm-block">
            <Link href="/">
              <a>
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 20C0.734784 20 0.48043 19.8946 0.292893 19.7071C0.105357 19.5196 0 19.2652 0 19V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H15C15.2652 0 15.5196 0.105357 15.7071 0.292893C15.8946 0.48043 16 0.734784 16 1V19C16 19.2652 15.8946 19.5196 15.7071 19.7071C15.5196 19.8946 15.2652 20 15 20H1ZM11 14L16 10L11 6V9H5V11H11V14Z" fill="#84818A"/>
                </svg>
                <span>Logout</span>
              </a>
            </Link>
          </li>
          <li className="help mt-5">
            <Link href="/">
              <a>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 19H11V17H13V19ZM15.07 11.25L14.17 12.17C13.45 12.9 13 13.5 13 15H11V14.5C11 13.4 11.45 12.4 12.17 11.67L13.41 10.41C13.78 10.05 14 9.55 14 9C14 7.9 13.1 7 12 7C10.9 7 10 7.9 10 9H8C8 6.79 9.79 5 12 5C14.21 5 16 6.79 16 9C16 9.88 15.64 10.68 15.07 11.25Z" fill="#84818A"/>
                </svg>
                <span>Help</span>
              </a>
            </Link>
          </li>
        </ul>
        
      </nav>
    </div>
  );
}

export default SideBar;