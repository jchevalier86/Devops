// auth.js
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// auth.js
import app from './firebase-config.js';

//console.log('Firebase app initialized:', app);

const email = "joh@hotmail.fr";
const password = "abcdeff";
const auth = getAuth(app);
function inscription (email, password) {
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    // ..
  });
}

inscription(email, password);