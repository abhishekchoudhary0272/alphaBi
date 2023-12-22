import { useState } from 'react';
import firebase from '../firebase';
import { useRouter } from 'next/router';
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/signup.module.css';

const Signup = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const [errorMsg, setErrorMsg] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    console.log(email, password, error);

    if (!email || !password) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    // Redirect or do something after successful login
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async (res) => {
        const user = res.user;
        await firebase.auth().updateProfile(user, {
          displayName: email.substring(0, 5),
        })
        console.log(res);
        router.push('/searchpage')
      }).catch((error) => {
        console.error(error);
      })
  };

  return (
    <div className={styles.container}> {/* Apply a class for centering */}
      <Head><title>Sign-Up</title></Head>
      <div className={styles.box}> {/* Apply a class for the box */}
        <h1>SignUp</h1>
        <form onSubmit={handleSignUp}>
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
          <button type="submit" className={styles.button}>Signup</button>
          {error && <p>{error}</p>}
        </form>
        <p>Already have an account? <Link href="/login">Login</Link></p> {/* Link to login page */}
      </div>
    </div>
  );
};

export default Signup;
