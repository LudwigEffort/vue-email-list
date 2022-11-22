/*
Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

new Vue({
    el: '#root',
    data: {
        email: 0,
        arrEmails: [],
    },
    methods: {
        getEmail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(( axiosResponse) => {
                console.log(axiosResponse);
                this.email = axiosResponse.data.response;
            })
        },
        getTenEmails(){
            for (let i = 0; i <= 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((axiosResponse) => {
                    //console.log(axiosResponse);
                    this.arrEmails.push(axiosResponse.data.response);
                })
            }
        }
    }
});