import NaviBar from "./NaviBar";
import Footer from "./Footer";
import styles from '../../styles/component/Layout/Layout.module.css';

const Layout = ({ children }) => {
    return(
        <div>
            <NaviBar />
            <div className={`${styles.roundRec}`}></div>
            { children }
            <Footer />
        </div>
    );
}

export default Layout;