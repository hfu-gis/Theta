<template>
    <div id="app">
        <v-app id="inspire">
            <v-card
                    class="d-flex pa-2"
                    outlined="red"
                    tile
            >
                <div>
                    <h1><strong>Du hast dich erfolgreich registriert!</strong></h1>
                    <p> Um nun nach Fachwörtern zu suchen, klicke hier
                    <v-btn type="button"  color="#04B45F"  to="/Yourwordotd"> Wörter suchen </v-btn>
                    </p>
                </div>
            </v-card>
        </v-app>
    </div>
</template>

<script>
    export default {
        name: "Registrierung_succesful"
    }
</script>

<style scoped>

</style>