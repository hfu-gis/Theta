<template>
  <v-app-bar app clipped-right dark
             src="http://picsum.photos/1920/100?blur">
    <v-toolbar-title>Gras-Shoppers</v-toolbar-title>
    <v-spacer />
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-cart</v-icon>
    </v-btn>

    <v-btn v-if="!isLoggedIn" icon :to="{name:'Login'}">
      <v-icon>mdi-login</v-icon>
    </v-btn>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"  />
  </v-app-bar>
</template>

<script>
  export default {
    name: 'NavBar',
    props: {
      isLoggedIn: false
    }
  }
</script>

<style scoped>

</style>