import Vue from 'vue'
import vuescroll from "vuescroll/dist/vuescroll-native"
import VueRouter from 'vue-router'
import About from "../views/About";
import Datenschutzbestimmungen from "../views/Datenschutzbestimmungen";
import Dictionary from "../views/Dictionary";
import FAQ from "../views/FAQ";
import Home from "../views/Home";
import Impressum from "../views/Impressum";
import Kontakt from "../views/Kontakt";
import Login from '../views/Login'
import Nutzungsbedingungen from "../views/Nutzungsbedingungen";
import Passwort_zuruecksetzen from "../views/Passwort_zuruecksetzen";
import Passwort_vergessen from "../views/Passwort_vergessen";
import Registrierung from "../views/Registrierung";
import Registrierung_erfolgreich from "../views/Registrierung_erfolgreich";
import Wort_hinzufuegen from "../views/Wort_hinzufuegen";
import Yourwordotd from "../views/Yourwordotd";
import "vuescroll/dist/vuescroll.css";
Vue.use(VueRouter);
Vue.use(vuescroll);

export default new VueRouter({
    scrollPanel: {
        initialScrollY: false,
        initialScrollX: false,
        scrollingX: true,
        scrollingY: true,
        speed: 300,
        easing: undefined,
        verticalNativeBarPos: 'right'
    },
    routes: [
        {
            path:'/About',
            name: "About",
            component: About
        },
        {
            path:'/Datenschutzbestimmungen',
            name: 'Datenschutzbestimmungen',
            component: Datenschutzbestimmungen
        },
        {
            path: '/Dictionary',
            name: 'Dictionary',
            component: Dictionary
        },
        {
            path:'/FAQ',
            name: 'FAQ',
            component: FAQ
        },
        {
            path: '/Home',
            name: 'Home',
            component: Home
        },
        {
            path:'/Impressum',
            name: 'Impressum',
            component: Impressum
        },
        {
            path:'/Kontakt' ,
            name: 'Kontakt',
            component: Kontakt
        },
        {
            path: '/Login',
            name: 'Login',
            component: Login
        },
        {
            path:'/Nutzungsbedingungen',
            name: 'Nutzungsbedingungen',
            component: Nutzungsbedingungen
        },
        {
            path: '/Passwort_vergessen',
            name: 'Passwort_vergessen',
            component: Passwort_vergessen
        },
        {
            path: '/Passwort_zuruecksetzen',
            name: 'Passwort_zuruecksetzen',
            component: Passwort_zuruecksetzen
        },
        {
            path: '/Registrierung',
            name: 'Registrierung',
            component: Registrierung
        },
        {
            path:'/Registrierung_erfolgreich',
            name: 'Registrierung_erfolgreich',
            component: Registrierung_erfolgreich
        },
        {
            path: '/Wort_hinzufuegen',
            name: "Wort_hinzufuegen",
            component: Wort_hinzufuegen
        },
        {
            path:"/Yourwordotd",
            name: 'Yourwordotd',
            component: Yourwordotd
        },
    ]
})
