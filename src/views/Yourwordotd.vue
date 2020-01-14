<template>
    <div class="body-1">
        <h1> Your Word of the Day </h1>
        <v-card
                class="mx-auto"
                max-width="344"
        >
            <v-card-text>
                <div>Your Word of the Day</div>
                <p class="display-1 text--primary">
                    be•nev•o•lent
                </p>
                <div class="text--primary">
                    Bedeutung/ Erklärung <br>
                </div>
            </v-card-text>
            <v-card-actions>
                <v-btn align-center
                       color="#04B45F"
                       oneclick="generieren">Generieren
                </v-btn>
            </v-card-actions>
        </v-card>

    </div>

</template>

<script>
    export default {
        name: "Yourwordotd"
    }
</script>
<style scoped>
    h1 {
        text-align: center;
        margin: 20% 0 5% 0;
    }

    #wordbox {
        text-align: center;
        margin: 30px auto 0;
        display: block;
        width: 300px;
        height: 40px;
        font-size: 30px;
        background: #fff;
        border-radius: 6px;
        color: #000000;
        transition: 1s linear;
    }
    body {
        font-family: Verdana, Geneva, sans-serif;
        font-size: 1.2em;
        margin: 0 auto;
        max-width: 960px;
        padding: 40px 10px;
        line-height: 1.65em;
        background: #B20940;
        color: #fff;
        font-weight: 300;
    }
    #button {
        background: #0b7fba;
        border: 0;
        color: #fff;
        font-size: 20px;
        padding: 1em 2em;
        cursor: pointer;
        margin: 0 auto 60px;
        display: block;
        text-align: center;
        border-radius: 6px;
        font-weight: bold;
    }

</style>

