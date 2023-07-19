import logo from './logo.svg';
import './App.css';
import Athkar from './components/Athkar';

// Import the functions you need from the SDKs you need
import firebase from "firebase/app"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkv8I1VvfxbIZME06CQg-hjwSubLvkMs4",
  authDomain: "highschool-368518.firebaseapp.com",
  projectId: "highschool-368518",
  storageBucket: "highschool-368518.appspot.com",
  messagingSenderId: "662507126810",
  appId: "1:662507126810:web:e83191f1f0e5c62499d1a3",
  measurementId: "G-0P3CMWPP56"
};

// Initialize Firebase
const fbApp = firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
        <Athkar />
      {/* <header className="App-header">
      
      </header> */}
    </div>
  );
}

export default App;
