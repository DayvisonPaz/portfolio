import fetch from 'cross-fetch';
global.fetch = require("node-fetch");
setTimeout(buscar,1000)
function  buscar(){
const  data = fetch('https://api.themoviedb.org/3/discover/movie?api_key=e7b99a4588c70c8538cfff5bca735206&language=pt-BR&with_genres=16')
const dados = data.json()
console.log(dados)
}
/*
key = e7b99a4588c70c8538cfff5bca735206
<div></div>

https://image.tmdb.org/t/p/w500/ imagens

MOVIE                              
Action        =  28
Adventure     =  12
Animation     = 16
Comedy        =  35
Crime         =  80
Documentary   =  99
Drama          = 18
Family         = 10751
Fantasy        = 14
History       =  36
Horror         = 27
Music           =10402
Mystery        = 9648
Romance        =10749
ScienceFiction= 878
TVMovie       = 10770
Thriller     =   53
War          =   10752
Western      =   37

TVSHOW=0
ActionAdventure =10759
Animation          = 16
Comedy             = 35
Crime               =80
Documentary         =99
Drama               =18
Family              =10751
Kids               = 10762
Mystery            = 9648
News                =10763
Reality            = 10764
SciFiFantasy    =10765
Soap                =10766
Talk               = 10767
WarPolitics     = 10768
Western           =  37



{"genres"[  {"id": 28,"name": "Ação"},{"id": 12,"name": "Aventura"},{"id": 16,"name": "Animação"},{"id": 35,"name": "Comédia"},{"id": 80,"name": "Crime"},{"id": 99,"name": "Documentário"},{"id": 18,"name": "Drama"},{"id": 10751,"name": "Família"},{"id": 14,"name": "Fantasia"},{"id": 36,"name": "História"},{"id": 27,"name": "Terror"},{"id": 10402,"name": "Música"},{"id": 9648,"name": "Mistério"},{"id": 10749,"name": "Romance"},{"id": 878,"name": "Ficção científica"},{"id": 10770,"name": "Cinema TV"},{"id": 53,"name": "Thriller"},{"id": 10752,"name": "Guerra"},{"id": 37,"name": "Faroeste"}]}*/