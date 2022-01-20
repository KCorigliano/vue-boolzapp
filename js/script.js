new Vue({
  el: "#app",
  data: {
    contacts: [
      {
        name: "Michele",
        avatar: "_1",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Hai portato a spasso il cane?",
            status: "sent",
            submenu: false,
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Ricordati di dargli da mangiare",
            status: "sent",
            submenu: false,
          },
          {
            date: "10/01/2020 16:15:22",
            text: "Tutto fatto!",
            status: "received",
            submenu: false,
          },
        ],
      },
      {
        name: "Fabio",
        avatar: "_2",
        visible: true,
        messages: [
          {
            date: "20/03/2020 16:30:00",
            text: "Ciao come stai?",
            status: "sent",
            submenu: false,
          },
          {
            date: "20/03/2020 16:30:55",
            text: "Bene grazie! Stasera ci vediamo?",
            status: "received",
            submenu: false,
          },
          {
            date: "20/03/2020 16:35:00",
            text: "Mi piacerebbe ma devo andare a fare la spesa.",
            status: "sent",
            submenu: false,
          },
        ],
      },
      {
        name: "Samuele",
        avatar: "_3",
        visible: true,
        messages: [
          {
            date: "28/03/2020 10:10:40",
            text: "La Marianna va in campagna",
            status: "received",
            submenu: false,
          },
          {
            date: "28/03/2020 10:20:10",
            text: "Sicuro di non aver sbagliato chat?",
            status: "sent",
            submenu: false,
          },
          {
            date: "28/03/2020 16:15:22",
            text: "Ah scusa!",
            status: "received",
            submenu: false,
          },
        ],
      },
      {
        name: "Luisa",
        avatar: "_4",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent",
            submenu: false,
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Si, ma preferirei andare al cinema",
            status: "received",
            submenu: false,
          },
        ],
      },
    ],
    currentIndex: 0,
    newMessage: "",
    hisNewNessage: "",
    filterInput: "",
  }, methods: {
    sendNewMessage: function (currentIndex) {
      if (this.newMessage.length > 0) {
        const myNewNessage = {
          date: this.currentDate(),
          text: this.newMessage,
          status: "sent",
          submenu: false,
        };
        this.contacts[currentIndex].messages.push(myNewNessage),
        this.newMessage = "";
        setTimeout(() => {
          this.hisAnswere(currentIndex)}, 1000);
      }
    },
    hisAnswere: function (currentIndex) {
      this.hisNewNessage = {
        date: this.currentDate(),
        text: "Solo ora mi rispondi? Sono passati due anni, te la sei presa comoda!",
        status: "received",
        submenu: false,
      };
      this.contacts[currentIndex].messages.push(this.hisNewNessage);
      this.newMessage = "";
    },
    lastMessageDate: function (currentIndex) {
      let lastDate;
      for (let i = 0; i < this.contacts[currentIndex].messages.length; i++) {
        if (this.contacts[currentIndex].messages[i].status === "received") {
          lastDate = this.contacts[currentIndex].messages[i].date;
        }
      }
      return lastDate;
    },
    deleteMessage: function(index, currentIndex){
        this.contacts[currentIndex].messages.splice(index, 1);
    },
    currentDate: function(){
      return dayjs().format('DD/MM/YYYY HH:mm:ss');
    }
  },
});