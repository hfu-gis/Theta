<template>
    <div class="body-1">
        <h1>Kontakt</h1>
        <div>
            <v-form>
                <v-container>
                    <v-row>
        <h2>Ansprechpartner: Team Theta</h2>
                    </v-row>
                </v-container>
            </v-form>
        <p>Kontaktiere uns per Mail:</p>
        </div>
        <a href="mailto: dm.dictionary-support.de">
            <v-btn
                    align-center
                       color="#04B45F"
                       oneclick="e-mail">E-Mail
                </v-btn>
        </a>

        <p> oder fülle unser Kontaktformular aus:</p>

                <v-form>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" >
                                <v-text-field
                                        label="Deine E-Mail Adresse"
                                        outlined
                                ></v-text-field>
                            </v-col>
                        </v-row>
                <v-row>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-textarea
                                outlined
                                name="input-7-4"
                                label="Deine Nachricht"
                        ></v-textarea>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
            <v-btn align-center
                   color="#04B45F"
                   oneclick="absenden">absenden
                
            </v-btn>
    </div>

</template>

<script>
    export default {
        name: "Kontakt"
    }
</script>

<style scoped>

    #wordbox {
        /*opacity: 0;*/
        text-align: center;
        margin: 30px auto 0;
        display: block;
        width: 300px;
        height: 100px;
        font-size: 30px;
        background: #fff;
        border-radius: 6px;
        color: #04B45F;
        transition: 1s linear;
    }

</style>