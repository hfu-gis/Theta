<!--<template>
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



<style scoped>

</style>
-->
<template>
    <div class="registrierung">
        <h1><strong> Registrierung </strong></h1> </br>
    <v-form ref="form" v-model="valid">
        <v-row v-if="success" align="center" justify="center">
            <v-card elevation="10">
                    <v-card-title v-text>Registration<</v-card-title>
                </v-img>
            </v-card>
        </v-row>
        <v-row v-else align="top" justify="center">
            <v-col cols="12" md="6">
                <v-text-field label="HFUMail" v-model="userData.HFUMail" required maxlength="50"
                              :disabled="this.userData.isAlreadyRegistered"
                              :rules="HFUMailRules"/>
                <v-text-field label="Password" v-model="userData.password" required  maxlength="25"
                              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                              :type="showPassword ? 'text' : 'password'"
                              @click:append="showPassword = !showPassword"
                              :rules="nameRules"
                />
                <v-text-field label="Vorname" v-model="userData.Vorname" required  maxlength="25"
                              :rules="nameRules"/>
                <v-text-field label="Nachname" v-model="userData.Nachname" required  maxlength="25"
                              :rules="nameRules"/>

                <v-select
                        v-model="select"
                        :items="Studiengaenge"
                        :rules="[v => !!v || 'Pflichtfeld']"
                        label="Studiengang" required
                ></v-select>

            <v-checkbox
                    v-model="checkbox"
                    :rules="[v => !!v || 'Bitte stimme den Nutzungsbedingungen zu um Fortfahren zu können!']"
                    label="Ich stimme hiermit den *Nutzungsbedingungen zu."
                    required
            ></v-checkbox>

<v-spacer></v-spacer>
            <v-btn text outlined shaped
                   @click="validate">Registrieren
            </v-btn>
<v-spacer></v-spacer>
                <v-spacer></v-spacer>

                <a href="Nutzungsbedingungen"> *Nutzungsbedingungen</a>
            </v-col>
        </v-row>
    </v-form>
    </div>
</template>

<script>
    import db from '../db'
    export default {
        props: {},
        data: () => ({
            success: false,
            valid: true,
            showPassword: false,
            Studiengaenge: ['Medien Konezeption', 'Online Medien', 'Medieninformatk'],
            userData: {
                HFUMail: '',
                password: '',
                name: '',
                familyName: '',
                isAlreadyRegistered: false
            },
            nameRules: [
                value => (!!value && value.trim().length > 0) || 'Pflichtfeld',
                value => (value && value.length <= 25) || 'Field must be less than 25 characters',
            ],
            selectionRules: [
                value => !!value || 'Field is required'
            ],
            HFUMailRules: [
                value => !!value || 'Field is required',
                v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Bitte gültige E-Mail Adresse angeben1',
                value => (value && value.length <= 50)    ,
                ]
        }),
        methods: {
            validate() {
                if (this.$refs.form.validate()) {
                    console.debug('Validation success')
                    this.register()
                }
            },
            register()  {
                this.userData.isAlreadyRegistered = true
                let docRef = db.collection('User').doc( this.userData.HFUMail)
                docRef.set(this.userData)
                    .catch(error => console.debug('Error', error))
                    .then(() => this.success = true)
                // docRef.update(userData)
            }
        }
    }
</script>