<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app dark
      right
    >
      <v-list dense>
        <v-list-item link :to="{name:'Home'}">
          <v-list-item-action>
            <v-icon>mdi-spa</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{name:'Wordotd'}">
          <v-list-item-action>
            <v-icon>mdi-cart</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Word of the Day</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{name:'Registrierung'}">
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Registrierung</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app right dark
       src="http://picsum.photos/1920/100?blur">
      <v-toolbar-title>D(M)ICTIONARY</v-toolbar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon :to="{name:'Order'}">
        <v-icon>mdi-cart</v-icon>
      </v-btn>

      <v-btn v-if="!isLoggedIn" icon :to="{name:'Login'}">
        <v-icon>mdi-login</v-icon>
      </v-btn>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"  />
    </v-app-bar>

    <v-content light>
      <v-container fluid class="fill-height">
        <router-view  @login="isLoggedIn=$event"/>
      </v-container>
    </v-content>

    <v-footer
            color="green"
            padless
    >
      <v-row
              justify="center"
              no-gutters
      >
        <v-btn
                v-for="link in links"
                :key="link"
                color="white"
                text
                rounded
                class="my-2"
        >
          {{ link }}
        </v-btn>
        <v-col
                class="grey py-4 text-center white--text"
                cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>D(M)ICTIONARY</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import Layout from './components/Layout';

export default {
  name: 'App',

  components: {
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
