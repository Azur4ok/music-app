<template>
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <router-link
        class="text-white font-bold uppercase text-2xl mr-4"
        exact-active-class="no-active"
        to="/"
        >Music</router-link
      >

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li v-if="!userStore.isLoggedIn">
            <a class="px-2 text-white" href="#" @click.prevent="toggleAuthModal"
              >Login / Register</a
            >
          </li>
          <template v-else>
            <li>
              <router-link class="px-2 text-white" to="/manage">Manage</router-link>
            </li>
            <li>
              <a class="px-2 text-white" href="#" @click.prevent="signOut">Sign out</a>
            </li>
          </template>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapStores } from 'pinia'
import useModalStore from '@/stores/modal'
import useUserStore from '@/stores/user'

export default {
  name: 'AppHeader',
  computed: {
    ...mapStores(useModalStore, useUserStore)
  },
  methods: {
    toggleAuthModal() {
      this.modalStore.isOpen = !this.modalStore.isOpen
      console.log(this.modalStore.isOpen)
    },
    signOut() {
      this.userStore.logOut()

      this.$router.push({ name: 'home' })
    }
  }
}
</script>
