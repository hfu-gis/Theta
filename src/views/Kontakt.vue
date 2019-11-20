<template>
    <div class="body-1">
        <body>
        <h1>Kontakt</h1>
        <h2>Ansprechpartner: Team Theta</h2>
        <h3>Kontaktiere uns per Mail:</h3>
        <a href="mailto: Beispielmail@hs-furtwangen.de"> E-Mail </a>
        <h3>oder fülle unser Kontaktformular aus:</h3>
        <form id="kontaktformular" name="kontaktformular" action="">
            <label for="absender">Deine E-Mail-Adresse:</label>
            <input type="text" id="absender" name="absender" />
            <div>
            </div>
            <label for="nachricht">Deine Nachricht:</label>
            <textarea id="nachricht" name="nachricht" cols="20" rows="5"></textarea>
            <div>
            </div>
            <input type="submit" value="Abschicken" />
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