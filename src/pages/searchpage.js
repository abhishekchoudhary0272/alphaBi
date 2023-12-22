import Head from 'next/head'
// pages/searchpage.js
import SearchBar from '../components/searchbar';
import styles from '../styles/searchPage.module.css';

const searchpage = () => {  
  return (
    <div className={styles.container}>
      <Head>
        <title>Giphy Search</title>
      </Head>
      <h1>Giphy Search</h1>
      <SearchBar />
    </div>
  );
};

export default searchpage;
