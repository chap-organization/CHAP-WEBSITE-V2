import styles from "../../styles/component/Layout/Footer.module.css";
import github from "../../public/assets/icons/Vector (1).png";
import facebook from "../../public/assets/icons/Vector (2).png";
import linkedin from "../../public/assets/icons/Vector (3).png";
import insta from "../../public/assets/icons/Vector.png";
import logo from "../../public/assets/CHAP.png";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="row d-flex">
                <div className="col-md-4 col-6" id={styles.col1}>
                    <div className={styles.contactBox}>
                        <p>Contact</p>
                        <p>Email: general@chap.com</p>
                        <p>Phone: 514-743-7101</p>
                        <p>Hours: 8:00 AM - 5:00 PM</p>
                        <p>Monday - Friday</p>
                        <p>Address: McGill University</p>
                        <p>845 Rue Sherbrooke 0,</p>
                        <p>Montreal, QC H3A 064</p>
                    </div>
                </div>
                <div className="col-md-4" id={styles.col2}>
                    <div className={styles.centerContainer}>
                        <div className={`centerItem`}>
                            <div className={styles.logo}>
                                <Image src={logo} alt={"chap logo"} width={250} height={50} />
                            </div>
                        </div>
                        <div className={styles.icons}>
                            <div>
                                <Image src={facebook} alt={"facebook icon"} />
                            </div>
                            <div>
                                <Image src={github} alt={"facebook icon"} />
                            </div>
                            <div>
                                <Image src={insta} alt={"facebook icon"} />
                            </div>
                            <div>
                                <Image src={linkedin} alt={"facebook icon"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-6" id={styles.col3}>
                    <div className={styles.links}>
                        <p>About Us</p>
                        <p>Our Team</p>
                        <p>Projects & Awards</p>
                        <p>Sponsors</p>
                        <p>Media Gallery</p>
                        <p>FAQ</p>
                        <p>Join Us</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}