var app= new Vue({
  el: '#app',
  data:{
    cercaFilm:'',
    cercaSerie:'',
    //creo la lista film dove andrò ad inserire tutti i risultati(dati) dei film
    films: [

    ],
    serie: [

    ]
  },

  methods: {
    genereFilm() {
           //controllo che venga scritto qualcosa
      if(this.cercaFilm != '') {
        axios
          .get ('https://api.themoviedb.org/3/search/movie',{
            params: {
              api_key: '1ac156bff9bfdcfc371d1eb86745089f',
              query: this.cercaFilm,
            }
          })
          .then((films) => {
                 //pusho o assegno nella lista film tutti i risultati(dati) dell'api
                 this.films = films.data.results;
                 console.log(this.films);
               });
               this.cercaFilm = '';
      }
    }
  }
});
