import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import ContactForm from "../components/ContactForm/ContactForm";
import PropertiesGrid from "../components/PropertiesGrid/PropertiesGrid";
import Footer from "../components/Footer/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Hero />
        <About />
        <ContactForm />
        <PropertiesGrid />
      </main>

      <Footer />
    </div>
  );
}
