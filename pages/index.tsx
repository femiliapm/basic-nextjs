import type { NextPage } from 'next';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => (
  <div>
    <Header />
    <h1 className={styles['title-homepage']}>Home Page</h1>
    <Footer />
  </div>
);

export default Home;
