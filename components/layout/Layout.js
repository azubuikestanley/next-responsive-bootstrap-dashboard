import SideBar from "./SideBar";
import NavBar from "./NavBar";

const Layout = ({ children }) => {

  return (
    <div className="wrapper">
      <SideBar />
      <div className="content">
        <NavBar />
        <div className="main-content">{ children }</div>
      </div>
    </div>
  );
};

export default Layout;
