$( document ).ready(function() {

    //al clic sulla classe next si attiva la funzione prossimaslide
    $(".next").click(prossimaslide);

    //al clic sulla classe prev si attiva la funzione precedenteslide
    $(".prev").click(precedenteslide);


    // funzione prossimaslide
    function prossimaslide(){

        //salvo in una variabile la posizione active dell'immagine e della nav orizz
        var posizioneimg = $(".slider-wrapper .images  img.active");
        var posizionenav = $(".nav i.active");

        //tolgo la classe active perchè altrimenti rimane sul precedente posizionamento
        posizioneimg.removeClass("active");
        posizionenav.removeClass("active");


        // se siamo all'ultima img dello slider/posizione della nav, ritorna ad essere attiva la prima
        if(posizioneimg.hasClass("last")){
            $(".slider-wrapper .images  img.first").addClass("active");
            $(".nav i.first").addClass("active");
        } else{
            //altrimenti (cioè nel caso normale) passa semplicemente l'active alla prossima
            posizioneimg.next("img").addClass("active");
            posizionenav.next("i").addClass("active");
        }

    }

    function precedenteslide(){
            
        var posizioneimg = $(".slider-wrapper .images  img.active");
        var posizionenav = $(".nav i.active");

        posizioneimg.removeClass("active");
        posizionenav.removeClass("active");
        
        if(posizioneimg.hasClass("first")){
            $(".slider-wrapper .images  img.last").addClass("active");
            $(".nav i.last").addClass("active");
        } else{
            posizioneimg.prev("img").addClass("active");
            posizionenav.prev("i").addClass("active");
        }

    }


});