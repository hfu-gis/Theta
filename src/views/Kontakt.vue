<template>
    <div class="body-1">
        <h1>Kontakt</h1>
        <div>
        <h2>Ansprechpartner: Team Theta</h2>

        <h3>Kontaktiere uns per Mail:</h3>
        </div>
        <a href="mailto: dm.dictionary-support.de">
                <v-btn text outlined shaped
                       oneclick="e-mail">E-Mail
                </v-btn>
        </a>

        <h3>oder fülle unser Kontaktformular aus:</h3>
        <form id="Kontaktformular" name="Kontaktformular" action="">
            <label for="absender">Deine E-Mail-Adresse:</label>
            <input type="Text" name="WordBox" id="wordbox">

            <input type="text" id="Absender" name="Absender"/>
            <label for="nachricht">Deine Nachricht:</label>
            <input type="Text" name="WordBox" id="wordbox">
            <v-btn text outlined shaped
                   oneclick="absenden">absenden
            </v-btn>
        </form>
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
        text-allign: center;
        margin: 30px auto 0;
        display: block;
        width: 300px;
        height: 40px;
        font-size: 30px;
        text-align: center;
        background: #fff;
        border-radius: 6px;
        color: #000000;
        transition: 1s linear;
    }

</style>