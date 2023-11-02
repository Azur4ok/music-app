import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDogEJiBJE4AoisEfo38byYUhaYhf4KPyo',
  authDomain: 'music-app-3783c.firebaseapp.com',
  projectId: 'music-app-3783c',
  storageBucket: 'music-app-3783c.appspot.com',
  messagingSenderId: '969887905268',
  appId: '1:969887905268:web:c69a8e32e6a293998575a1'
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

const db = getFirestore(app)

export { db, auth }
