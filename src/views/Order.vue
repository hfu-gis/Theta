<template>
  <div class="body-1">
    <!-- HTML-Code aus dem Body-Tag hier einfügen -->
    <div class="dropdown">
      <button onclick="myFunction()" class="dropbtn"><img id="menuImg" src="img/dreiBalken.png"></button>
      <div id="myDropdown" class="dropdown-content">
        <a class="logtxt" href="#home">Home</a>
        <a class="logtxt" href="#about">About</a>
        <a class="logtxt" href="#contact">Contact</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
// gebt jeder Page einen eigenen Namen
name: 'Order',

// benötigte Komponenten
components: {},

// entspricht den HTML-Attributen
props: {},

// Variablen-Speicher
data() {
  return {
    products: [],
    name: {
      type: String
    },
    price: {
      type: Number
    }
  }
},

// reagieren auf prop-Veränderung
watch: {},

// interne Methoden
  methods: {
    addToCatolog(id) {
      let docRef = db.collection('products').doc(id)
      docRef.set({
        name: this.name,
        price: this.price
      })
    }
  },


// Initialisierung
created() {
  db.collection('products')
    .then((productsFromDB) => {
      this.products = productsFromDB
    })
    .catch((err) => {
      console.log('Error getting documents', err)
    })
}
}
</script>

<style scoped>
/* CSS für diese Seite hier einfügen */
</style>
