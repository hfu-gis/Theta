<template>
    <div id="app">
        <v-app id="inspire">
            <v-footer
                    color="green"
                    padless
            >
                <v-row
                        justify="center"
                        no-gutters
                >
                    <v-btn
                            v-for="link in links"
                            :key="link"
                            color="white"
                            text
                            rounded
                            class="my-2"
                    >
                        {{ link }}
                    </v-btn>
                    <v-col
                            class="green py-4 text-center white--text"
                            cols="12"
                    >
                        {{ new Date().getFullYear() }} — <strong>D(M)ICTIONARY</strong>
                    </v-col>
                </v-row>
            </v-footer>
        </v-app>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }

</script>

<style scoped>

</style>