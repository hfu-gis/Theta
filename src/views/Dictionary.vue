<template>
                <div class="navBox desktop">
                    <v-nav id="menu" class="menuTop">
                        <v-row justify="space-around">
                            <v-breadcrumbs class="footer-menue" :items="links" divider="|"> </v-breadcrumbs>
                        </v-row>
                    </v-nav>
                </div>
</template>

<script>
    export default {
        name: "Wort-Suche",
        data: () => ({
            links: [
                {
                    text: 'A',
                    href: '#/A/',
                },
                {
                    text: 'B',
                    href: '#/B/',
                },
                {
                    text: 'C',
                    href: '#/C/',
                },
                {
                    text: 'D',
                    href: '#/D/',
                },
                {
                    text: 'E',
                    href: '#/E/',
                },
                {
                    text: 'F',
                    href: '#/F/',
                },
                {
                    text: 'G',
                    href: '#/G/',
                },
                {
                    text: 'H',
                    href: '#/H/',
                },
                {
                    text: 'I',
                    href: '#/I/',
                },
                {
                    text: 'J',
                    href: '#/J/',
                },
                {
                    text: 'K',
                    href: '#/K/',
                },
                {
                    text: 'L',
                    href: '#/L/',
                },
                {
                    text: 'M',
                    href: '#/M/',
                },
                {
                    text: 'N',
                    href: '#/N/',
                },
                {
                    text: 'O',
                    href: '#/O/',
                },
                {
                    text: 'P',
                    href: '#/P/',
                },
                {
                    text: 'Q',
                    href: '#/Q/',
                },
                {
                    text: 'R',
                    href: '#/R/',
                },
                {
                    text: 'S',
                    href: '#/S/',
                },
                {
                    text: 'T',
                    href: '#/T/',
                },
                {
                    text: 'U',
                    href: '#/U/',
                },
                {
                    text: 'V',
                    href: '#/V/',
                },
                {
                    text: 'W',
                    href: '#/W/',
                },
                {
                    text: 'X',
                    href: '#/X/',
                },
                {
                    text: 'Y',
                    href: '#/Y/',
                },
                {
                    text: 'Z',
                    href: '#/Z/',
                },
            ],
        })
    }
</script>

<style scoped>

</style>