/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1,
 utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data
*/

Vue.config.devtools = true;

const vueApp = new Vue({
    el : "#message" ,
    data: {
        username: "nome.Utente",
        userPlaceholder: "Inserisci nome utente",
        titoloH1: "Titolo della pagina all'hover"

    },

   

    
})