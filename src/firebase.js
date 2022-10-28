// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCPMBi9uuymXvNdkTFnBpKps3uQA5wbrVY',
  authDomain: 'login-app-ff7d8.firebaseapp.com',
  projectId: 'login-app-ff7d8',
  storageBucket: 'login-app-ff7d8.appspot.com',
  messagingSenderId: '685486185596',
  appId: '1:685486185596:web:cfa2cbb38dbfd6e71e3df9'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
