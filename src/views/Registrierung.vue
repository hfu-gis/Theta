<template>
    <div class="body-1">
        <body>
            <header> <h1><strong> Registrierung </strong></h1></header>

            <p> Bitte fülle folgende Informationen aus, um dich zu registrieren:</p>

            <p>Vorname</p>
            <input type="Text" name="Vorname" value="">

            <p>Nachname</p>
            <input type="Text" name="Nachname" value="">

            <p>Hochschule Furtwangen E-Mail Adresse*</p>
            <input type="Text" name="E-Mail" value="">

            <p>Passwort*</p>
            <input type="Text" name="Passswort" value="">

            <p>Bestätigung des Passwortes*</p>
            <input type="Text" name="Passwort Check" value="">

            <p>Studiengang*</p>
            <select name="Stundiengang" >
                <option value="MKB">MKB - Medien Konzeption</option>
                <option value="OMB">OMB - Online Medien</option>
                <option value="MI">MI - Medien Informatik</option>
            </select>

            <p><input type="checkbox" name="Nutzungsbedingungen" value="Nutzungsbedingungen"> Ich stimme hiermit den <a href="Nutzungsbedingungen.html"> Nutzungsbedingungen</a> zu.</p>
            <button type="button" onclick="alert('Du bist nur noch wenige Schritte entfernt! In wenigen Minuten bekommst du eine E-Mail mit einem Bestätigungslink von uns zugesendet!')">Registrieren</button>
        </body>
    </div>
</template>

<script>
    export default {
        name: "Registrierung"
    }
</script>

<style scoped>

</style>