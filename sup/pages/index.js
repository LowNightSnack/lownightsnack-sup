import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/head";
import Footer from "../components/footer";

const siteTitle = "'Sup";

export default function Home() {
  return (
    <>
      <Header siteTitle={siteTitle} />
      <main className={styles.main}>
        <h1>Under Construction</h1>
      </main>
      <Footer />
    </>
  );
}
