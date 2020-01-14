<template>
  <v-app id="inspire">
    <v-navigation-drawer
            v-model="drawer"
            app
            clipped
            temporary
            color="#04B45F"
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

        <v-list-item link :to="{name:'Wort_hinzufuegen'}">
          <v-list-item-action>
            <v-icon>mdi-shape-square-plus</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title> Wort hinzufügen</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link :to="{name:'Dictionary'}">
          <v-list-item-action>
            <v-icon>mdi-book-search-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dictionary</v-list-item-title>
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

        <v-list-item link :to="{name:'About'}">
          <v-list-item-action>
            <v-icon>mdi-information-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Was steckt dahinter ?</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
            app clipped-left
            color="#04B45F"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"  />
      <v-spacer />
      <v-toolbar-title>

        <img src="../public/Images/dmlogocut.png" width="100" height="72" /> </v-toolbar-title>
      <v-spacer />

      <v-btn color="#04B45F" link :to="{name:'Login'}">

        <v-icon>mdi-login</v-icon>
      </v-btn>

    </v-app-bar>

    <v-content light>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>

      <Footer />

  </v-app>

</template>

<script>
  import Footer from './components/Footer';
  export default {
    components:{
      Footer
    },
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    created () {
      this.$vuetify.theme.light = true
    },
  }
</script>

