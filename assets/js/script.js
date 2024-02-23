// IIFE
(function() {

    // CLase padre [Multimedia]
    class Multimedia {
        constructor(url) {
            //atributo de multimedia
            let _url = url;
            //getter para el atributo privado
            this.getUrl = () => _url;
        }

        //metodo para cambiar la url del video
        setInicio() {
            return "Este método es para realizar un cambio en la URL del video";
        }
    }

    // CLase hija [Reproductor]
    class Reproductor {
        constructor(id, multimedia) {
            //atributos de reproductor
            this.id = id;
            this.multimedia = multimedia;
        }

        //metodo para reproducir el video
        playMultimedia() {
            const iframe = document.getElementById(this.id);
            iframe.setAttribute("src", this.multimedia.getUrl());
        }

        //metodo para cambiar el tiempo de inicio del video
        setInicio(time = 0) {
            const iframe = document.getElementById(this.id);
            iframe.setAttribute("src", `${this.multimedia.getUrl()}?start=${time}`);
        }
    }


    //objetos de la clase [Multimedia]
    const MultimediaMusica = new Multimedia("https://www.youtube.com/embed/5PSNL1qE6VY");
    const MultimediaPeliculas = new Multimedia("https://www.youtube.com/embed/5PSNL1qE6VY");
    const MultimediaSeries = new Multimedia("https://www.youtube.com/embed/5PSNL1qE6VY");

    //objetos clase [Reproductor]
    const ReproductorMusica = new Reproductor("musica", MultimediaMusica);
    const ReproductorPeliculas = new Reproductor("peliculas", MultimediaPeliculas);
    const ReproductorSeries = new Reproductor("series", MultimediaSeries);



    // Función para iniciar los videos al cargar la página
    function playOnLoad() {
        ReproductorMusica.playMultimedia();
        ReproductorPeliculas.playMultimedia();
        ReproductorSeries.playMultimedia();
    }


    // Ejecución de la función al cargar la página
    playOnLoad();
})();

  