new Vue({
    el: '#app',
    data:{
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ], 
        currentIndex: 0, 
        newMessage: '',  
        hisNewNessage: '',   
        filterInput: '',  
    },
    methods:{
        sendNewMessage: function(currentIndex){
            if (this.newMessage.length > 0){
                const myNewNessage = {
                    date: '19/01/2022 13:30:27',
                    text: this.newMessage,
                    status: 'sent'
                }
                this.contacts[currentIndex].messages.push(myNewNessage),
                this.newMessage= '';
                setTimeout(this.hisAnswere(currentIndex), 1000);
            }
        },
        hisAnswere: function(currentIndex){
            this.hisNewNessage = {
                date: '19/01/2022 13:30:28',
                text: 'Solo ora mi rispondi? Te la sei presa comoda!',
                status: 'received'
            }
            this.contacts[currentIndex].messages.push(this.hisNewNessage);
            this.newMessage='';
        },
        hiddenMenuClick: function(currentIndex){
            this.contacts[currentIndex].visible=!this.contacts[currentIndex].visible;
        },
        lastMessage: function(currentIndex){
            let lastData;
            for (let i=0; i<this.contacts[currentIndex].messages.length; i++){
                if (this.contacts[currentIndex].messages[i].status === 'received'){
                    lastData = this.contacts[currentIndex].messages[i].date;
                }
            };
            return lastData;
        },
        filterList: function(){
           
            const filtered = this.contacts.filter(el => el.name === filterInput);
            console.log(filtered);               
        },
    },
})