count=0
for (var i=0;i<9;i++){
    count=9*i;
    document.getElementsByClassName("box")[i].innerHTML="<div class='cell' pattern='[1-9]' maxlength='1' oninput='validateInput(this)'><input type='text' id='"+
    (count+1)+"' class='input' pattern='[1-9]' maxlength='1' oninput='validateInput(this)'></div><div class='cell'><input type='text' id='"+
    (count+2)+"' class='input' pattern='[1-9]' maxlength='1' oninput='validateInput(this)'></div><div class='cell'><input type='text' id='"+
    (count+3)+"' class='input' pattern='[1-9]' maxlength='1' oninput='validateInput(this)'></div><div class='cell'><input type='text' id='"+
    (count+4)+"' class='input' pattern='[1-9]' maxlength='1' oninput='validateInput(this)'></div><div class='cell'><input type='text' id='"+
    (count+5)+"' class='input' pattern='[1-9]' maxlength='1' oninput='validateInput(this)'></div><div class='cell'><input type='text' id='"+
    (count+6)+"' class='input' pattern='[1-9]' maxlength='1' oninput='validateInput(this)'></div><div class='cell'><input type='text' id='"+
    (count+7)+"' class='input' pattern='[1-9]' maxlength='1' oninput='validateInput(this)'></div><div class='cell'><input type='text' id='"+
    (count+8)+"' class='input' pattern='[1-9]' maxlength='1' oninput='validateInput(this)'></div><div class='cell'><input type='text' id='"+
    (count+9)+"' class='input' pattern='[1-9]' maxlength='1' oninput='validateInput(this)'></div>"
}

function validateInput(input) {
    // Permite solo números del 1 al 9
    const value = input.value;
    if (!/^[1-9]$/.test(value)) {
        input.value = ''; // Limpia el campo si el valor no está en el rango permitido
    }
}

//Dark Mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

function applyDarkModePreference() {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}
//window.onload = applyDarkModePreference;


function toggleMenu() {
    const menuList = document.querySelector('.menu-list');
    const burgerMenu = document.getElementById('burgerMenu');
    menuList.classList.toggle('active');
    burgerMenu.classList.toggle('open');
}

//how to play game instruction
function help(){
    window.open(
        "https://sudoku.com/how-to-play/sudoku-rules-for-complete-beginners/", "_blank");
}
var level;
var choosen;


// easy_level board create
easy_board=['2-5---7--45---9----2-6-81----9---8567-------2418---2----43-7-1----1---85--6---7-8',
            '----35-86-1-9-7-----269----54------------527-9--75----7-6---3-----2-----56---2-14',
            '3-5---6----3-6--81-5-2--1-94-2-6-1-39----83-46-15-9--7-6-1-82--5--7-3-9-4---7-3-6',
            '47----3-------179--4-93--5----6---7-48---------2716-34-9----6----6--2381---54--1-',
            '-2--18573-31--5-96---16----5--4-26--97--86--------98--1-6--79--2-5---8144-9-7---1',
            '-796--8-3-9--68-31286---9-48-29---7----7---2-5-----3---63-1---2371-9-58-13----827'];
easy=['215986734452869371527648193379124856781543692418937265864357219693172485936521748',
      '129735486213967854342691578543869127498315276981754632786421359675248193567832914',
      '315492678723964581857236149482765193916258374631549827967138245584713692429871356',
      '476285319523861794148932657123649578481397265952716834895137624976452381763548219',
      '429618573831245796382164957537492618974186325761259843186537942265793814459378621',
      '179625843492568731286317954852934176685713429547298361463718952371294586139645827'];

//medium level board create
medium=['876345291982754163417638529493712568135826947359271684251968473746319825682594137',
        '834615279152793468921546387512879346634258791463987125796342581978614235857123469',
        '695138472243761589817356924428975361796854213532149687137264598851923476649782315',
        '184936257623498715372561849259847136491375682514928763673521894758162439986347215',
        '439671258825764193316582947612583497741239865924176358578429613396185742857934261',
        '786921543397215468659172834493875216624789351137548962215436798581643972824369157'];
medium_board=['--6----9---75-1---1------9-9-7-25-8-3-----4-3-92-1-8-2------7---6-19--5-8----1--',
              '------27----793--892-5-63--5--87-3---34-5-79---3-87--5--63-2-819--614----57------',
              '6-5-384--2----1--9-1----9-------53--7--8-4--3--21-------7----9-8--9----6--978-3-5',
              '-8493--576--4----5---------2--84----4-1-7-6-2----28--3---------7----2--998--4721-',
              '43--7-2---2----1-----5--9-------349-741---865-241-------8--9-----6----4---7-3--61',
              '7-692----3---1---8-59--283---3-75-----------11---4--6-21------8---64--7----3----7'];

//hard level board create
hard_board=['---7-9-----75-8-4---3------8---1---6---7-9---2---7---1-----61---5-3--2-----43----',
            '-6------2---9-8-----6--3-79----3-8---2-----4----61----7--8--4----51-7---2------8-',
            '-8-------4---15--3----9-----2-73-1----9-----2-6----------19--87---9-2----2--35---',
            '----5-8------3--19---3---7----2-8--4------6---1-7-24---7----6-----42---3---9--3--',
            '--346-5-------------9-4-8--5-9---18------3--7-------7--4--------9--81--6-3-71----',
            '6---174---7------2----951-8--25------23-1---54--------5------2--6-3--7------3-9--'];
hard=['165789432297518346973821654847312596463729158284675931923546178851364297615439782',
      '861794532617948325156283479492536871928365147784619253753812496345127968239574681',
      '187256349428715963534691872924738156619483572861247395356194287573962418729835641',
      '143657892526738419984361275956238174843591627315782469872149635791426583267954318',
      '783461592318627954179246835569732184625493817246358971142958673497581326835719264',
      '683217459871564932326795148172594386923718645459861237549683127465392718871234956'];

var timerInterval; // Variable global para almacenar el temporizador

/*************************************** Inicio ************************************************/
function start(){
     // Deshabilitar los botones u otras acciones relacionadas con el inicio del juego
    for (var i = 0; i < 6; i++) {
    document.getElementsByClassName("label")[i].setAttribute("onclick", "return false;");
    }

     // Detener el temporizador anterior si existe
     if (timerInterval) {
        clearInterval(timerInterval);
    }
    // Iniciar el temporizador
        timer();

    //easy game
    if(document.getElementById("easy").checked){
        level='easy';
        var easy_random=Math.floor(Math.random()*6);
        choosen=easy_random;
        for(var i=0;i<81;i++){
            if(easy_board[easy_random][i]!='-'){
                document.getElementById((i+1).toString()).value=easy_board[easy_random][i];
                document.getElementById((i+1).toString()).readOnly=true;
            }
        }
    }

    //medium game
    else if(document.getElementById("medium").checked){
        level='medium';
        var medium_random=Math.floor(Math.random()*6);
        choosen=medium_random;
        for(var i=0;i<81;i++){
            if(medium_board[medium_random][i]!='-'){
                document.getElementById((i+1).toString()).value=medium_board[medium_random][i];
                document.getElementById((i+1).toString()).readOnly=true;
            }
        }
    }

    //hard game
    else{
        level='hard';
            var hard_random=Math.floor(Math.random()*6);
            choosen=hard_random;
            for(var i=0;i<81;i++){
                if(hard_board[hard_random][i]!='-'){
                    document.getElementById((i+1).toString()).value=hard_board[hard_random][i];
                    document.getElementById((i+1).toString()).readOnly=true;
                }
            }
    }

    document.getElementById("start").removeAttribute("onclick");

}

/***************************************** Revisar Respuesta **********************************************/
var id=setInterval(() => {
    if (level=="easy"){
        if(document.activeElement.className=="input"){
            if((document.getElementById(document.activeElement.id).value==easy[choosen][document.activeElement.id-1])||(document.getElementById(document.activeElement.id).value=='')){
                for(var i=0;i<81;i++){
                    if(i==80 && document.getElementById((81).toString()).value!='' ){
                        alert("Ganaste!! Felicidades...");
                        clearInterval(id);
                        window.location.reload();
                    }
                    else if(document.getElementById((i+1).toString()).value==''){
                        break;
                    }
                }
            }
            else{
                if(document.getElementById("rem_live").innerHTML==1){
                    document.getElementById("rem_live").innerHTML==0;
                    alert("Perdiste!!");
                    document.activeElement.value='';
                    window.location.reload();

                }
                else{
                alert("Número incorrecto, perdiste 1 vida!!");
                document.getElementById("rem_live").innerHTML=document.getElementById("rem_live").innerHTML-1;
                document.activeElement.value='';
                }
            }

        }
    }

    else if(level=="medium"){

        if(document.activeElement.className=="input"){
            if((document.getElementById(document.activeElement.id).value==medium[choosen][document.activeElement.id-1])||(document.getElementById(document.activeElement.id).value=='')){
                for(var i=0;i<81;i++){
                    if(i==80 && document.getElementById((81).toString()).value!='' ){
                            alert("Ganaste!! Felicidades...");
                            clearInterval(id);
                            window.location.reload();
                    }
                    else if(document.getElementById((i+1).toString()).value==''){
                        break;
                    }
                }
            }
            else{
                if(document.getElementById("rem_live").innerHTML==1){
                    document.getElementById("rem_live").innerHTML==0;
                    alert("Perdiste!!");
                    document.activeElement.value='';
                    window.location.reload();

                }
                else{
                alert("Número incorrecto, perdiste 1 vida!!");
                document.getElementById("rem_live").innerHTML=document.getElementById("rem_live").innerHTML-1;
                document.activeElement.value='';
                }
            }

        }
    }

    else{

        if(document.activeElement.className=="input"){
            if((document.getElementById(document.activeElement.id).value==hard[choosen][document.activeElement.id-1])||(document.getElementById(document.activeElement.id).value=='')){
                for(var i=0;i<81;i++){
                    if(i==80 && document.getElementById((81).toString()).value!='' ){
                            alert("Ganaste!! Felicidades...");
                            clearInterval(id);
                            window.location.reload();
                    }
                    else if(document.getElementById((i+1).toString()).value==''){
                        break;
                    }
                }
            }
            else{
                if(document.getElementById("rem_live").innerHTML==1){
                    document.getElementById("rem_live").innerHTML==0;
                    alert("Perdiste!!");
                    document.activeElement.value='';
                    window.location.reload();

                }
                else{
                alert("Número incorrecto, perdiste 1 vida!!");
                document.getElementById("rem_live").innerHTML=document.getElementById("rem_live").innerHTML-1;
                document.activeElement.value='';
                }
            }

        }
    }
}, 500);

/******************************************** Respuesta *************************************************/
function answer(){
    if(level=="easy"){
        for(var i=0;i<81;i++){
            document.getElementById((i+1).toString()).value=easy[choosen][i];
        }
    }
    else if(level=="medium"){
        for(var i=0;i<81;i++){
            document.getElementById((i+1).toString()).value=medium[choosen][i];
        }
    }
    else if(level=="hard"){
        for(var i=0;i<81;i++){
            document.getElementById((i+1).toString()).value=hard[choosen][i];
        }
    }
    else{
        alert("Primero elige el juego e Inicialo!!");
    }
}

/***************************************** Nuevo Juego ***********************************************/
function replay(){
    for(var i=0;i<81;i++){
        document.getElementById((i+1).toString()).value='';
    }
        start();
}

/************************************ Reiniciar O Terminar todo ***************************************/
function finish() {
    for(var i=0;i<81;i++){
        document.getElementById((i+1).toString()).value='';
    }
    // Poner el tiempo en cero
    document.getElementById("time_min").textContent = "00";
    document.getElementById("time_sec").textContent = "00";

    // Detener el temporizador actual, si existe
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    // Restablecer vidas u otros elementos que necesites reiniciar
    remainingLives = 3;
    document.getElementById("rem_live").textContent = remainingLives;

    // Habilitar el botón de inicio
    document.getElementById("start").setAttribute("onclick", "start();");

    // Habilitar las opciones de dificultad
    document.getElementById("easy").disabled = false;
    document.getElementById("medium").disabled = false;
    document.getElementById("hard").disabled = false;

    // Habilitar las opciones de tiempo de duración
    document.getElementById("time1").disabled = false;
    document.getElementById("time2").disabled = false;
    document.getElementById("time3").disabled = false;

    // Habilitar las etiquetas (si es necesario)
    for (var i = 0; i < 6; i++) {
    document.getElementsByClassName("label")[i].removeAttribute("onclick");
    }

}

// Inicializar vidas restantes
var remainingLives = 3;
/*********************************** Función del Tiempo en Juego **********************************/
function timer() {
    const time1 = document.getElementById("time1");
    const time2 = document.getElementById("time2");
    const time3 = document.getElementById("time3");

    if (time1.checked) {
        document.getElementById("time_min").textContent = "04";
        document.getElementById("time_sec").textContent = "59";
    } else if (time2.checked) {
        document.getElementById("time_min").textContent = "09";
        document.getElementById("time_sec").textContent = "59";
    } else {
        document.getElementById("time_min").textContent = "12";
        document.getElementById("time_sec").textContent = "59";
    }

     // Iniciar el nuevo temporizador y guardar su ID en timerInterval
    timerInterval = setInterval(() => {
        let min = parseInt(document.getElementById("time_min").textContent);
        let sec = parseInt(document.getElementById("time_sec").textContent);

        if (sec === 0) {
            if (min === 0) {
                clearInterval(timerInterval);
                alert("¡Has perdido 1 vida!");
                remainingLives--;
                document.getElementById("rem_live").textContent = remainingLives;
                if (remainingLives === 0) {
                    alert("¡Juego terminado!");
                } else {
                    start(); // Reiniciar el juego
                }
            } else {
                document.getElementById("time_min").textContent = (min - 1).toString().padStart(2, '0');
                document.getElementById("time_sec").textContent = "59";
            }
        } else {
            document.getElementById("time_sec").textContent = (sec - 1).toString().padStart(2, '0');
        }
    }, 1000);
}