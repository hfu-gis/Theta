<style scoped>
    .footer-col-one {
        display:flex;
        justify-content: center;
    }

    .footer-menue >>> a {
        color: #fff !important;
    }

    .footer-menue >>> a:hover {
        color: #000 !important;
    }
</style>
<template>
    <div id="app">
        <v-app id="inspire">
            <v-footer
                    color="#04B45F"
                    padless
                    absolute
                    fluid
                    fixed
            >
                <v-row display="flex" align-content="center" justify="center" no-gutters>
                    <v-col justify="center" class="green footer-col-one py-4 text-center white--text" cols="12">
                         <v-breadcrumbs class="footer-menue" :items="links" divider=" "> </v-breadcrumbs>
                        <v-btn icon large href="https://www.instagram.com/?hl=de" target="_blank" v-on="on">
                            <v-icon>mdi-instagram</v-icon>
                        </v-btn>
                    </v-col>
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
        name: "Footer",
        data: () => ({
            links: [
                {
                    text: 'Home',
                    href: '#/Home/',
                },
                {
                    text: 'Nutzungsbedingungen',
                    href: '#/Nutzungsbedingungen/',
                },
                {
                    text: 'Datenschutzbestimmungen',
                    href: '#/Datenschutzbestimmungen/',
                },
                {
                    text: 'Kontaktiere uns',
                    href: '#/Kontakt/',
                },
                {
                    text: 'Was steckt dahinter ?',
                    href: '#/About/',
                },
            ],
        })
    }


</script>