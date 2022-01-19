import SideBar from "./SideBar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {

  return (
    <div className="wrapper">
      <SideBar />
      <div className="content">
        <Navbar />
        <div className="main-content">{ children }</div>
      </div>
    </div>
  );
};

export default Layout;
