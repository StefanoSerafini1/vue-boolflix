var app= new Vue({
  el: '#app',
  data:{
    cerca:'',
    //bandiere per lingua
    bandiere: ['it', 'en'],
    //creo la lista film dove andrò ad inserire tutti i risultati(dati) dei film
    films: [

    ],
    serieTv: [

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
                 //console.log(this.films);
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
    },
    //funzione per arrotondare voto da (0 a 10) a (0 a 5)
    stelleVoto(vote) {
      return Math.floor(vote / 2);
    },
    bandiereScelta(lang){
           return this.bandiere.includes(lang);
    }

  }
});
