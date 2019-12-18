<template>
  <v-app id="inspire">
    <v-navigation-drawer
            v-model="drawer"
            app
            clipped-left
            color="grey lighten-4"
    >
      <v-list dense>
        <v-list-item link :to="{name:'Home'}">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{name:'Login'}">
          <v-list-item-action>
            <v-icon>mdi-login</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{name:'Yourwordotd'}">
          <v-list-item-action>
            <v-icon>mdi-file-word</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Your Word of the Day</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{name:'Registrierung'}">
          <v-list-item-action>
            <v-icon>mdi-account-plus</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Registrieren</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{name:'Kontakt'}">
          <v-list-item-action>
            <v-icon>mdi-account-question</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Kontakt</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"  />
      <v-spacer />
      <v-toolbar-title>D(M)ICTIONARY</v-toolbar-title>
      <v-spacer />
      <v-btn v-if="!isLoggedIn" icon :to="{name:'Login'}">
        <v-icon>mdi-login</v-icon>
      </v-btn>
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