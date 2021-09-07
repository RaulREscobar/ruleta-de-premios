//Variables usadas
var objRuleta;
var winningSegment;
var distnaciaX = 1500;
var distnaciaY = 50;
var ctx;

//Función para despliegue de mensaje de ganador
function Mensaje() {
    winningSegment = objRuleta.getIndicatedSegment();
    /* SonidoFinal(); */
    swal({
        title: " ¡Felicitaciones ganaste "+winningSegment.text+"!",
        //showCancelButton: true,
        confirmButtonColor: "#e74c3c",
        confirmButtonText: "Reiniciar",
        //cancelButtonText: "Quitar elemento",
        closeOnConfirm: true,
        closeOnCancel: true
    },

    function (isConfirm) {
        if (isConfirm) {} else {
        $('#ListaPremios').val($('#ListaPremios').val().replace(winningSegment.text,""));
        leerElementos();
    }
    objRuleta.stopAnimation(false);
    objRuleta.rotationAngle = 0;
    objRuleta.draw();
    DibujarTriangulo();
});}

//Dibujar el triángulo de elección
function DibujarTriangulo() {
    distnaciaX = 200;
    distnaciaY = -10;
    ctx = objRuleta.ctx;
    ctx.strokeStyle = 'navy';
    ctx.fillStyle = '#000000';
    ctx.lineWidth = 2;0
    ctx.beginPath();
    ctx.moveTo(distnaciaX + 170, distnaciaY + 5);
    ctx.lineTo(distnaciaX + 230, distnaciaY + 5);
    ctx.lineTo(distnaciaX + 200, distnaciaY + 40);
    ctx.lineTo(distnaciaX + 171, distnaciaY + 5);
    ctx.stroke();
    ctx.fill();
}

//Función para dibujar la ruleta
function DibujarRuleta(ArregloElementos) {
    objRuleta = new Winwheel({
        'canvasId': 'canvas',
        'textAlignment': 'center',
        'numSegments': ArregloElementos.length, //Cantidad de divisiones
        'lineWidth':3,
        'outerRadius': 280,
        'innerRadius': 30,
        'segments':ArregloElementos,
        'pins':true,
        'animation':{
            'type': 'spinToStop',
            'duration':8, //Segundos girando
            'spins': 15, //Cantidad de vueltas
            'callbackFinished': 'Mensaje()',
            'callbackAfter': 'DibujarTriangulo()'
        },
    });
    DibujarTriangulo();
}

//Función para leer elementos de los premios
function leerElementos() {
    txtListaElementos=$('#ListaPremios').val().trim();
    var Elementos = txtListaElementos.split('\n');
    var ElementosRuleta= [];
    Elementos.forEach(function (Elemento, index) {
        if((index +1) % 3 == 0){
        ElementosRuleta.push({ 'fillStyle': "#14B76E" , 'text': Elemento }); //Size para modificar el tamaño
        }else if ((index +1) % 2 == 0) {
            ElementosRuleta.push({ 'fillStyle': "#0000FF" , 'text': Elemento }); //Size para modificar el tamaño
        }else {
            ElementosRuleta.push({ 'fillStyle': "#ff8000" , 'text': Elemento }); //Size para modificar el tamaño
        }
    });
    DibujarRuleta(ElementosRuleta);
}

leerElementos();
            var audio = new Audio('../alarma.mp3');  // Create audio object and load desired file.
            function SonidoFinal()
                {
                    audio.pause();
                    audio.currentTime = 0;
                    audio.play();
                }
                (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                    })(window,document,'ruleta','//www.google-analytics.com/analytics.js','ga');
                    ga('create', 'UA-74824848-1', 'auto');
                    ga('send', 'pageview');

                    (adsbygoogle = window.adsbygoogle || []).push({});
