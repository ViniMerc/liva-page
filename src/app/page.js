import Header from "../templates/Header/Header";
import Slides from "../templates/Slides/Slides";
import About from "../templates/About/About";
import ContactForm from "../templates/ContactForm/ContactForm";
import PropertiesGrid from "../templates/PropertiesGrid/PropertiesGrid";
import Footer from "../templates/Footer/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Slides />
        <About />
        <ContactForm />
        <PropertiesGrid />
      </main>

      <Footer />
    </div>
  );
}
