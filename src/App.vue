<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app dark
      right
    >
      <v-list dense>
        <v-list-item link :to="{name:'Overview'}">
          <v-list-item-action>
            <v-icon>mdi-spa</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Overview</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{name:'Order'}">
          <v-list-item-action>
            <v-icon>mdi-cart</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Order</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Country</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <nav-bar :is-logged-in="isLoggedIn"/>

    <v-content light>
      <v-container fluid class="fill-height">
        <router-view @login="isLoggedIn=$event"/>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Layout from './components/Layout';
import NavBar from './views/NavBar'

export default {
  name: 'App',

  components: {
    NavBar,
    Layout
  },
  props: {
    source: String
  },
  data() {
    return {
      isLoggedIn: false,
      drawer: false,
    }
  },
  methods: {
  },
  created() {
    this.$router.push({name: 'Overview'})
  }
}
</script>
