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
    /* CSS für diese Seite hier einfügen */

    h1 {
        text-align: center;
        margin: 20% 0 5% 0;
    }

    #wordbox {
        /*opacity: 0;*/
        text-allign: center;
        margin: 30px auto 0;
        display: block;
        width: 300px;
        height: 40px;
        font-size: 30px;
        text-align: center;
        background: #fff;
        border-radius: 6px;
        color: #000000;
        transition: 1s linear;
    }

</style>
