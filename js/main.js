var app= new Vue({
  el: '#app',
  data:{
    cerca:'',
    notfound:'no',
    //bandiere per lingua
    bandiere: ['it', 'en', 'es', 'ja', 'de', 'fr', 'pt', 'da'],
    //creo la lista film dove andrò ad inserire tutti i risultati(dati) dei film
    films: [

    ],
    serieTv: [

    ],
    generi:[

    ]
  },

  methods: {
    genereFilm() {
           //controllo che venga scritto qualcosa
      if(this.cerca != '') {
        axios//richiamo film
          .get ('https://api.themoviedb.org/3/search/movie',{//chiamata
            params: {//parametri chiamata
              api_key: '1ac156bff9bfdcfc371d1eb86745089f',
              query: this.cerca,
              language: 'it-IT',
            }
          })
          .then((film) => {
                 //pusho o assegno nella lista film tutti i risultati(dati) dell'api
                 this.films = film.data.results;
               });
        axios//richiamo serie
          .get ('https://api.themoviedb.org/3/search/tv',{//chiamata
            params: {//parametri chiamata
              api_key: '1ac156bff9bfdcfc371d1eb86745089f',
              query: this.cerca,
              language: 'it-IT',
            }
          })
          .then((serie) => {
                 //pusho o assegno nella lista serie tutti i risultati(dati) dell'api
                 this.serieTv = serie.data.results;
                 console.log(this.serieTv);
               });
               this.cerca = '';
      }
      //controllo se la ricerca non da alcun risultato
        if(this.films.length === 0 && this.serieTv.length === 0){
          this.notfound='no';
          console.log(this.notfound);
        }else{
          this.notfound='si';
          console.log(this.notfound);
        }
    },
    //funzione per arrotondare voto da (0 a 10) a (0 a 5)
    stelleVoto(vote) {
      return Math.floor(vote / 2);
    },
    //funzione per assegnare le bandiere disponibili
    bandiereScelta(lang){
           return this.bandiere.includes(lang);
    }

  }
});
