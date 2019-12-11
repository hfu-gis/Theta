<template>
    <div class="body-1">
        <h2><a href="Login.vue">Login</a></h2>
        <h2><a href="Registration.vue">Registrierung</a></h2>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <h3><a href="Kontakt.vue">Kontakt</a></h3>
        <h3><a href="Nutzungsbedingungen.vue">Nutzungsbedingungen</a></h3>
        <h3><a href="Datenschutzbestimmungen.vue">Datenschutzbestimmungen</a></h3>

        <div class="topnav">
            <a class="active" href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <input type="text" placeholder="Search..">
        </div>




                <v-row
                        align="center"
                        justify="center"
                >
                    <v-col cols="12">
                        <v-hover v-slot:default="{ hover }">
                            <v-card
                                    :elevation="hover ? 12 : 2"
                                    class="mx-auto"
                                    height="350"
                                    max-width="350"
                            >
                                <v-card-text class="my-4 text-center title">Hover over me!</v-card-text>
                            </v-card>
                        </v-hover>
                    </v-col>
                </v-row>

    </div>
</template>

<script>
    export default {
        name: "Home"
    }


</script>

<style scoped>

</style>