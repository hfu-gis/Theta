<template>
    <div class="body-1">
    <v-app id="inspire">
        <v-content>
            <v-container
                    class="fill-height"
                    fluid
            >
                <v-row
                        align="center"
                        justify="center"
                >
                    <v-col
                            cols="12"
                            sm="8"
                            md="4"
                    >
                        <v-card class="elevation-12">
                            <v-toolbar
                                    color="#04B45F"
                                    light
                                    flat
                            >
                                <v-toolbar-title>Login </v-toolbar-title>
                                <v-spacer/>



                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                            label="HFU Mail"
                                            name="login"
                                            prepend-icon="mdi-account"
                                            type="text"
                                    />

                                    <v-text-field
                                            id="password"
                                            label="Passwort"
                                            name="Passwort"
                                            prepend-icon="mdi-textbox-password"
                                            type="Passwort"
                                    />
                                    <a href="Passwort_Vergessen.html">Passwort vergessen?</a>

                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer/>
                                <v-btn color="#04B45F" to="/home">
                                    Login
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>

    </div>


</template>

<script>
    export default {
        props: {
            source: String,
        }
    }
</script>