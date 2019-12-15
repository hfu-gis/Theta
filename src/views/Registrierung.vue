<template>
    <div class="body-1">
            <h1><strong> Registrierung </strong></h1> </br>

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
                label="Ich stimme hiermit den *Nutzungsbedingungen zu"
                required
        ></v-checkbox>

        <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="
validate">Registrieren
        </v-btn><br/>

        </v-form>
            <a href="Nutzungsbedingungen.vue"> *Nutzungsbedingungen</a>
        </v-form>
    </div>
</template>

<script>
    export default {
        name: "Registrierung",
        methods: {
        },
        data: () => ({
            valid: true
        })
    }
</script>

<style scoped>

</style>