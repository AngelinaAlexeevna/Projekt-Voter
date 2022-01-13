const app = Vue.createApp({
    //Optionen
    data: function () {
        return {
            submissions: submissions, //aus seed.js
        };
    },
});

//Liefert die Instanz zur Root-Component zurück
let vm = app.mount("#app");