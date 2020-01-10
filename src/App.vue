<template>
  <v-app id="inspire">
    <v-navigation-drawer
            v-model="drawer"
            app
            clipped
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
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"  />
      <v-spacer />
      <v-toolbar-title>D(M)ICTIONARY</v-toolbar-title>
      <v-spacer />

      <v-btn icon :to="{name:'#/Login'}">
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
      this.$vuetify.theme.dark = true
    },
  }
</script>

