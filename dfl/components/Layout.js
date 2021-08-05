import Nav from "./Nav";
import Header from "./Header";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <>CHICKEN </>
      <Nav />
      <Header />
      {children}
    </>
  );
};

export default Layout;
