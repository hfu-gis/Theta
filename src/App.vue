<template>
  <div id="app">
    <main>
      <header>
        <h1>Grasshoppers Finest THC products
          <img src="./assets/cannabis.png" width="160"/>
        </h1>
      </header>
      <article>
        <section>
          <p>Welcome to our cannabis online shop.</p>
          Please select your country:<br/>
          <select>
            <option value="de">Germany</option>
            <option value="nl">Netherlands</option>
            <option value="ch">Switzerland</option>
          </select>
        </section>
      </article>
    </main>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
