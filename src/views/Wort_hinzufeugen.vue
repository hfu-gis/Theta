<template>
    <div class="body-1">
       <br><h1>Wörter zu D(M)ICTIONARY hinzufügen</h1>
        <br><h2>Hier hast du die Möglichkeit, eines oder mehrere Wörter in D(M)ICTIONARY zu speichern und für andere Nutzer sichtbar machen.</h2>
        <br>
        <v-text-field
                solo-inverted
                flat
                hide-details
                label="Wort hinzufügen"
                prepend-inner-icon="mdi-plus"
        ></v-text-field>
        <br>
        <v-btn text outlined shaped
               justify="center"
               oneclick="add">Hinzufügen
        </v-btn>



    </div>
</template>

<script>
    export default {
        name: "Wort hinzufügen"


    }
</script>

<style scoped>

</style>