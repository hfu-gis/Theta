<template>
    <div class="body-1">
        <h1>Kontakt</h1>
        
        <v-card
                class="mx-auto"
                max-width="500"
        >
            <v-card-text>
                <div>Ansprechpartner: Team Theta</div>
                <p class="display-1 text--primary">
                    Kontaktiere uns per E-Mail:
                </p>
                <div class="text--primary">
                    Klicke einfach auf den Button und schreib uns eine Nachricht :)<br>
                </div>
            </v-card-text>
            <v-card-actions>

                <a href="mailto: dm.dictionary-support.de">
                    <v-btn
                            align-center
                            color="#04B45F"
                            oneclick="e-mail">E-Mail
                    </v-btn>
                </a>
            </v-card-actions>
        </v-card>
    </div>

</template>

<script>
    export default {
        name: "Kontakt"
    }
</script>

<style scoped>

    h1 {
        text-align: center;
    }

</style>