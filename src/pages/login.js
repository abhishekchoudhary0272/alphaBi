import { useState } from 'react';
import firebase from '../firebase';
import { useRouter } from 'next/router';
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/signup.module.css';
// import { useHistory } from 'react-router-dom';

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log(email, password, error);

    if (!email || !password) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    // await app.auth().signInWithEmailAndPassword(email, password);
    // Redirect or do something after successful login
    firebase.auth().signInWithEmailAndPassword(email, password).then((res) => {
      console.log(res);
      router.push('/searchpage')
    }).catch((error) => {
      console.error(error);
    })
  };

  return (
    <div className={styles.container}> {/* Apply a class for centering */}
      <Head><title>Login</title></Head>
      <div className={styles.box}> {/* Apply a class for the box */}
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input} // Apply a class for styling
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input} // Apply a class for styling
          />
          <button type="submit" className={styles.button}>SignUp</button>
          {error && <p>{error}</p>}
        </form>
        <p>Don&apos;t have an account? <Link href="/signup">SignUp</Link></p>
      </div>
    </div>
  );
};

export default Login;
