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
            <label for="Absender">Deine E-Mail-Adresse:</label>

            <input type="text" id="Absender" name="Absender" />
            <label for="Nachricht">Deine Nachricht:</label>
            <textarea id="Nachricht" name="Nachricht" cols="20" rows="5"></textarea>
            <input type="submit" value="Abschicken" />
        </form>
    </div>
</template>

<script>
    export default {
        name: "Kontakt"
    }
</script>

<style scoped>

</style>