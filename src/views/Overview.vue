<template>
    <v-row dense>
      <v-col
        v-for="card in cards"
        :key="card.title"
        :cols="card.cols"
      >
        <v-card elevation="4" class="md-6">
          <v-img
            :src="card.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="120"
          >
            <v-card-title v-text="card.title"/>
          </v-img>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-bookmark</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
</template>

<script>
  export default {
    name: 'Overview',
    data: () => {
      return {
        cards: []
      }
    },
    mounted() {
      for(let i=0; i<5; i++) {
        this.cards.push({
          title: 'Dream Villas #' + i,
          src: 'https://picsum.photos/140?random',
          cols: 4
        })
      }
    }
  }
</script>

<style scoped>

</style>