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

    <v-app-bar
      app
      clipped-right
      src="http://picsum.photos/1920/1080?blur"
      dark
    >
      <v-toolbar-title>Gras-Shoppers</v-toolbar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"  />
    </v-app-bar>

    <v-content light>
      <v-container
        class="fill-height"
        fluid
      >
        <router-view/>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Layout from './components/Layout';

export default {
    name: 'App',

    components: {
        Layout,
    },
  props: {
    source: String,
  },
    data: () => ({
      drawer: false,
    }),
    created() {
      // this.$vuetify.theme.dark = true
      this.$router.push({name: 'Overview'})
    }
};
</script>
