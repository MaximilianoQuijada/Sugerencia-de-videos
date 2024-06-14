let iifeGlobal = (()=>{
    let inyectarTodo = (url,id) => {
        id.setAttribute('src', url);
        id.style.display = 'block';
    };

    return {
        mostrarTodo: (url,id) => inyectarTodo(url,id),
    };
})();

class Multimedia {
    constructor(url){
        let _url = url;

        this.getUrl = () => _url;
    };

    get url(){
        return this.getUrl();
    };

    setInicio(){
        return `Este método es para realizar un cambio en la URL del video`
    };
};

class Reproductor extends Multimedia {
    constructor(url,id){
        super(url);
        let _id = id;

        this.getId = ()=> _id;
    };
    playMultimedia(){
        iifeGlobal.mostrarTodo(this.url,this.getId());
    };
    setInicio(tiempo){
        this.getId().setAttribute('src',`${this.url}?start=${tiempo}`) 
    };
};

let playMusica = new Reproductor("https://www.youtube.com/embed/YODCM26JXOY",musica);
playMusica.playMultimedia();
playMusica.setInicio(200);
let playPelicula = new Reproductor("https://www.youtube.com/embed/5PSNL1qE6VY",peliculas);
playPelicula.playMultimedia();
let playSerie = new Reproductor("https://www.youtube.com/embed/HhesaQXLuRY",series);
playSerie.playMultimedia();