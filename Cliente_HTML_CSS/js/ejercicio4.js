var contadorgaleria = 0;
        var imagenes = ["1.jpg", "2.jpg","3.jpg","4.jpg","farneze.jpg"];

        function atras() {
            var imagen = document.getElementById("imagen");
            contadorgaleria--;
            if (contadorgaleria < 0) {
                contadorgaleria = imagenes.length - 1;
            }
            imagen.src = "./img/" + imagenes[contadorgaleria];
        }

        function delante() {
            var imagen = document.getElementById("imagen");
            contadorgaleria++;
            if (contadorgaleria >= imagenes.length) {
                contadorgaleria = 0;
            }
            imagen.src = "./img/" + imagenes[contadorgaleria];
        }