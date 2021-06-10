function autocompletado () {
    document.getElementById("demo").innerHTML = '';

    var preguntas = [
        "1 - http://3qpzilhobdujzsoyjxggbedxvgvg6tczdev2s4siqkoky764v6yg6vad.onion/index.html",
        "2 - http://zsyvom262oiaoc6es7bgg66xieyil6nqkh7jn5ntraghpqgudbcl3vad.onion/index.php/hire-a-hacker/",
        "3 - http://2pp6jlgxvk2fl6us.onion/online-hacker/index.html",
        "4 - http://4552oqvuva6qgax2.onion/",
        "5 - http://4wimqozqztklaick.onion/",
        "6 - http://g65l2satv2pi7scv.onion/",
        "7 - http://vmkkajgonvrm4incst5qbs6qowektklshmbkgwu3xrtqpbhaztf7d2yd.onion/index.html",
        "8 - http://hacker5quf443wtg4n7hi6m3l4xpcyasknjvhhrb6pcbgakhu7bblhad.onion/",
        "9 -http://cy6wj77vryhcyh6go576hxycjz4wxlo4s5vevdinkw3armwzty5jozyd.onion/login",
        "20 - http://dnhackzhyyt7skir.onion/",
        "31 - http://xd3dakusvjyeunoedtv3nt4lmhb3vkmjhgg7wgdvynp4nndddqy5ufyd.onion/",
        "42 - http://vscvkdcnjpwkdumrrnxsfhmx5shkztqzehnkvelpfrzj7sqkra7bcjid.onion/",
        "53 - http://hsquad7ikj4ejivl7e52rdfcvtgpqueqzu27wq273noeoi27y6kglxad.onion/",
        "Z - http://mxu7ronlnsgmqlt5sjsdedvmh6kdagdhsx3oqvu3vwhrz5eagq562oqd.onion/store",
        "virus - http://euqrjceb3fa3o2rxjuqqkx76qjreqjlvtidfpgfyv6cd4z22hybnccyd.onion/"
    ];

     var pal = document.getElementById("buscar-pal").value;
     var tam = pal.length;
     for(indice in preguntas){
        var nombre = preguntas[indice];
        var str = nombre.substring(0,tam);
        if(pal.length <= nombre.length && pal.length != 0 && nombre.length != 0){
            if(pal.toLowerCase() == str.toLowerCase()){
                var node = document.createElement("LI");
                var textnode = document.createTextNode(preguntas[indice]);
                node.appendChild(textnode);
                document.getElementById("demo").appendChild(node);
            } else {
   // alert('Recuerde que las donaciones a A. zero Corp. ayuda a la busqueda de informacion, disculpe la molestia para dejar de ver el cuadro de en la opcion de aceptar y luego en la casilla , evitar que la pagina cree dialogos .')
  }
        }
    }
}