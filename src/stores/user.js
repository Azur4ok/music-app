import { defineStore } from 'pinia'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { auth, db } from '@/includes/firebase'

export default defineStore('user', {
  state: () => ({
    isLoggedIn: false
  }),
  actions: {
    async register(values) {
      const { user } = await createUserWithEmailAndPassword(auth, values.email, values.password)

      await setDoc(doc(db, 'users', user.uid), {
        name: values.name,
        email: values.email,
        age: values.age,
        country: values.country
      })

      await updateProfile(user, {
        displayName: user.name
      })

      this.isLoggedIn = true
    },
    async login({ email, password }) {
      await signInWithEmailAndPassword(auth, email, password)

      this.isLoggedIn = true
    },
    async logOut() {
      await signOut(auth)

      this.isLoggedIn = false
    }
  }
})
