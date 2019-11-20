<template>
    <div class="body-1">
        <body>
        <h1>Kontakt</h1>
        <h2>Ansprechpartner: Team Theta</h2>
        <h3>Kontaktiere uns per Mail:</h3>
        <a href="mailto: Beispielmail@hs-furtwangen.de"> E-Mail </a>
        <h3>oder fülle unser Kontaktformular aus:</h3>
        <form id="Kontaktformular" name="Kontaktformular" action="">
            <label for="Absender">Deine E-Mail-Adresse:</label>
            <input type="text" id="Absender" name="Absender" />
            <label for="Nachricht">Deine Nachricht:</label>
            <textarea id="Nachricht" name="Nachricht" cols="20" rows="5"></textarea>
            <input type="submit" value="Abschicken" />
        </form>
        </body>
    </div>
</template>

<script>
    export default {
        name: "Kontakt"
    }
</script>

<style scoped>

</style>