<template>
    <div class="body-1">
        <h1> Your Word of the Day </h1>
        <FORM name="WordForm">
            <input type="Text" name="WordBox" id="wordbox">
            <v-btn text outlined shaped
                   justify="center"
                   oneclick="generate">generieren
            </v-btn>
        </FORM>
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

