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

            <h4> Deine E-Mail-Adresse</h4>
            <div>
            <input type="Text" name="WordBox" id="wordbox">
    </div>
            <h4> Deine Nachricht</h4>
            <input type="Text" name="WordBox" id="wordbox">

            <v-btn text outlined shaped
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
    h1 {
        text-align: center;
    }
    h2 {
        text-align: center;
    }
    h3 {
        text-align: center;
    }
    h4 {
        text-align: center;
    }

    #wordbox {
        /*opacity: 0;*/
        text-align: center;
        margin: 30px auto 0;
        display: block;
        width: 300px;
        height: 40px;
        font-size: 30px;
        background: #fff;
        border-radius: 6px;
        color: #000000;
        transition: 1s linear;
    }

</style>