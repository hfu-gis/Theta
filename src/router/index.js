import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Home from "../views/Home";
import Kontakt from "../views/Kontakt";
import Impressum from "../views/Impressum";
import Nutzungsbedingungen from "../views/Nutzungsbedingungen";
import Passwort_zuruecksetzen from "../views/Passwort_zuruecksetzen";
import Registrierung from "../views/Registrierung";
import Registrierung_succesful from "../views/Registrierung_succesful";
import Datenschutzbestimmungen from "../views/Datenschutzbestimmungen";
import Passwort_Vergessen from "../views/Passwort_Vergessen";
import Yourwordotd from "../views/Yourwordotd";


Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/Home',
            component: Home
        },
        {
            path: '/Login',
            component: Login
        },
        {
         path:'/Kontakt' ,
            component: Kontakt
        },
        {
            path:'/Impressum',
            component: Impressum
        },
        {
            path:'/Nutzungsbedingungen',
            component: Nutzungsbedingungen
        },
        {
            path: '/Passwort_zuruecksetzen',
            component: Passwort_zuruecksetzen
        },
        {
            path: '/Registrierung',
            component: Registrierung
        },
        {
            path:'/Registrierung_successful',
            component: Registrierung_succesful
        },
        {
            path:'/Datenschutzbestimmungen',
            component: Datenschutzbestimmungen
        },
        {
            path: '/Passwort_Vergessen',
            component: Passwort_Vergessen
        },

        {
            path:"/Yourwordotd",
            component: Yourwordotd
        },
    ]
})
