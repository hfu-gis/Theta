<template>
    <div class="body-1">
        <body>
            <h1><strong> Passwort zurücksetzen </strong></h1>

            <p> Gibt deine <strong>HFU E-Mail-Adresse</strong> , mit der du dich registriert hast, an. Wir senden dir dann eine E-Mail mit einem Link, mit dem du dein Passwort zurücksetzen kannst.</p>

            <p><strong>E-Mail-Adresse</strong></p>
            <input type="Text" name="E-Mail" value="">
            <button type="submit" id="form_send" name="form[send]" class="btn btn-green">Senden</button>
        </body>
</template>

<script>
    export default {
        name: "Passwort_zurücksetzen"
    }
</script>

<style scoped>

</style>