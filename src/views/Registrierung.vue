<template>
    <div class="body-1">
        <v-app id="inspire">
            <v-content>
                <v-container
                        fixed
                        fill-height
                >
                    <v-layout
                            align-center="center"
                            justify-center="center"
                    >
                        <v-flex xs12
                                sm8
                                md4>
                            <v-card class="elevation-12">
                                <v-toolbar
                                        color="#04B45F"
                                        light
                                        flat
                                >
                                    <v-toolbar-title> Registrieren </v-toolbar-title>
                                    <v-spacer/>

                                </v-toolbar>
                                <v-card-text>
                                    <v-form>
                                        <v-text-field label="HFU Mail" v-model="userData.HFUMail" required maxlength="50"
                                                      :disabled="this.userData.isAlreadyRegistered"
                                                      :rules="HFUMailRules"/>
                                        <v-text-field label="Passwort" v-model="userData.password" required  maxlength="25"
                                                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                                      :type="showPassword ? 'text' : 'password'"
                                                      @click:append="showPassword = !showPassword"
                                                      :rules="nameRules"/>
                                        <v-text-field label="Vorname" v-model="userData.Vorname" required  maxlength="25"
                                                      :rules="nameRules"/>
                                        <v-text-field label="Nachname" v-model="userData.Nachname" required  maxlength="25"
                                                      :rules="nameRules"/>

                                        <v-select
                                                v-model="select"
                                                :items="Studiengaenge"
                                                :rules="[v => !!v || 'Pflichtfeld']"
                                                label="Studiengang" required
                                        > </v-select>


                                        <v-checkbox
                                                v-model="checkbox"
                                                :rules="[v => !!v || 'Bitte stimme den Nutzungsbedingungen zu um Fortfahren zu können!']"
                                                required
                                        >
                                        <template v-slot:label>
                                        <div>
                                            Ich stimme hiermit den
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{ on }">
                                            <a
                                                    target="_blank"
                                                    href="#/Nutzungsbedingungen"
                                                    @click.stop
                                                    v-on="on"
                                            >
                                                Nutzungsbedingungen
                                            </a>
                                            <a
                                                    target="_blank"
                                                    href="#/Datenschutzbestimmungen"
                                                    @click.stop
                                                    v-on="on"
                                            >
                                                Datenschutzbestimmungen &
                                            </a>
                                                </template>
                                            </v-tooltip>
                                            zu.
                                        </div>
                                        </template>
                                    </v-checkbox>
                                        <v-spacer> </v-spacer>
                                    </v-form>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer/>
                                    <v-btn align-center color="#04B45F" to="/Registrierung_successfull"
                                           @click="validate" >Registrieren
                                    </v-btn>
                                    <v-spacer> </v-spacer>
                                    <v-spacer> </v-spacer>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-content>
        </v-app>

    </div>
</template>

<script>
    import {db} from '../db'
    export default {
        props: {},
        data: () => ({
            checkbox: false,
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
                value => !!value || 'Pflichtfeld',
            ],
            HFUMailRules: [
                value => !!value || 'Pflichtfeld',
                v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Bitte gültige E-Mail Adresse angeben1',
                value => (value && value.length <= 50),
            ]
        }),
        methods: {
            validate() {
                if (this.$refs.form.validate()) {
                    console.debug('Validation success');
                    this.register()
                }
            },
            register()  {
                this.userData.isAlreadyRegistered = true;
                let docRef = db.collection('User').doc( this.userData.HFUMail);
                docRef.set(this.userData)
                    .catch(error => console.debug('Error', error))
                    .then(() => this.success = true)
                // docRef.update(userData)
            }
        }
    }
</script>

<style scoped>

</style>