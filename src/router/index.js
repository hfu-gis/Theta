import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Home from "../views/Home";
import FAQ from "../views/FAQ";
import Kontakt from "../views/Kontakt";
import Impressum from "../views/Impressum";
import Nutzungsbedingungen from "../views/Nutzungsbedingungen";
import Passwort_zuruecksetzen from "../views/Passwort_zuruecksetzen";
import Registrierung from "../views/Registrierung";
import Registrierung_succesful from "../views/Registrierung_succesful";
import Datenschutzbestimmungen from "../views/Datenschutzbestimmungen";
import Passwort_Vergessen from "../views/Passwort_Vergessen";
import Yourwordotd from "../views/Yourwordotd";
import About from "../views/About";
import Wort_hinzufuegen from "../views/Wort_hinzufeugen";
import Passwort_Vergessen from "../views/Passwort_Vergessen";
import Passwort_zuruecksetzen from "../views/Passwort_zuruecksetzen";
Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/Home',
            name: 'Home',
            component: Home
        },
        {
            path: '/FAQ',
            name: 'FAQ',
            component: FAQ
        },
        {
            path: '/Login',
            name: 'Login',
            component: Login
        },
        {
         path:'/Kontakt' ,
            name: 'Kontakt',
            component: Kontakt
        },
        {
            path:'/Impressum',
            name: 'Impressum',
            component: Impressum
        },
        {
            path:'/Nutzungsbedingungen',
            name: 'Nutzungsbedingungen',
            component: Nutzungsbedingungen
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
            path:'/Registrierung_successful',
            name: 'Registrierung_successfull',
            component: Registrierung_succesful
        },
        {
            path:'/Datenschutzbestimmungen',
            name: 'Datenschutzbestimmungen',
            component: Datenschutzbestimmungen
        },
        {
            path: '/Passwort_Vergessen',
            name: 'Passwort_Vergessen',
            component: Passwort_Vergessen
        },
        {
            path:"/Yourwordotd",
            name: 'Yourwordotd',
            component: Yourwordotd
        },
        {
            path:'/About',
            name: "About",
            component: About
        },
        {
            path: '/Wort_hinzufuegen',
            name: "Wort_hinzufuegen",
            component: Wort_hinzufuegen
        },
        {
            path: '/Passwort_Vergessen',
            name: "Passwort_Vergessen",
            component: Passwort_Vergessen
        },
        {
            path: '/Passwort_zuruecksetzen',
            name: "Passwort_zuruecksetzen",
            component: Passwort_zuruecksetzen
        },
    ]
})
