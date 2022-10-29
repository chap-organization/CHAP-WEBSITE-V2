import NaviBar from "./NaviBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return(
        <div>
            <NaviBar />
            { children }
            <Footer />
        </div>
    );
}

export default Layout;