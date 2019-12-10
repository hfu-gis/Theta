<template>
    <div class="body-1">
            <h1><strong> Registration </strong></h1>

            <p> Bitte fülle folgende Informationen aus, um dich zu registrieren:</p>
        <v-form
                ref="form"
                v-model="valid">
        <v-text-field
                v-model="username"
                :rules="usernameRules"
                label="User Name"
                required
        ></v-text-field>

        <v-text-field
                v-model="email"
                :rules="emailRules"
                label="HFU E-mail"
                required
        ></v-text-field>

        <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="Name"
                required
        ></v-text-field>

        <v-text-field
            v-model="nachname"
            :counter="10"
            :rueles="NachnameRules"
            label="Nachname"
            required
            ></v-text-field>


        <v-select
                v-model="select"
                :items="items"
                :rules="[v => !!v || 'Item is required']"
                label="Studiengang"
                required
        ></v-select>

        <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                label="Ich stimme hiermit den Nutzungsbedingungen zu"
                required
        ></v-checkbox>

        <v-btn
                y:disabled="!valid"
                color="success"
                class="mr-4"
                @click="validation"
        >
            Registrieren
        </v-btn>


            <button type="button" onclick="alert('Du bist nur noch wenige Schritte entfernt! In wenigen Minuten bekommst du eine E-Mail mit einem Bestätigungslink von uns zugesendet!')">Registrieren</button>
        </v-form>
    </div>
</template>

<script>
    export default {
        name: "Registrierung",
        methods: {
            validation() {
                if (this.$refs.form.validate()) {
                    alert("sucsess")
                }
            }

        },
        data: () => ({
            valid: true
        })
    }
</script>

<style scoped>

</style>