let form = document.getElementById('form1');

function submit(e){
    
    e.preventDefault();

    let name1 = document.getElementById("input1").value;
    let name2 = name1.toLowerCase();
    let len_ = name1.length;
    let name4 = "";

    if (len_ < 2){
        return false
    }
        
    for (i = 0; i < len_; i++){
    name3 = name2.charAt(i);

    switch(name3) {
        case "a":
        name4 = "Amable π"
        break;
        case "b":
        name4 = "Bueno π"
        break;
        case "c":
        name4 = "Comedido π€"
        break;
        case "d":
        name4 = "Decente π"
        break;
        case "e":
        name4 = "Elegante π€΅β"
        break;
        case "f":
        name4 = "Fabuloso π€©"
        break;
        case "g":
        name4 = "Gigante π"
        break;
        case "h":
        name4 = "HΓ‘bil π€Ή"
        break;
        case "i":
        name4 = "Imparable π"
        break;
        case "j":
        name4 = "Jefe π"
        break;
        case "k":
        name4 = "KinΓ©tico π"
        break;
        case "l":
        name4 = "Leopardo π"
        break;
        case "m":
        name4 = "Misionero π€ "
        break; 
        case "n": 
        name4 = "Nocturno π" 
        break; 
        case "o": 
        name4 = "Obrador π€­" 
        break; 
        case "p": 
        name4 = "Paciente π" 
        break; 
        case "q": 
        name4 = "Quejoso π€" 
        break; 
        case "r": 
        name4 = "Respetuoso π" 
        break; 
        case "s": 
        name4 = "Sinarca π¨ββοΈ" 
        break; 
        case "t": 
        name4 = "Tigre π―" 
        break; 
        case "u": 
        name4 = "Unicornio π¦" 
        break; 
        case "v": 
        name4 = "Valioso π" 
        break; 
        case "w": 
        name4 = "Web π" 
        break; 
        case "x": 
        name4 = "X-men π¦Έ" 
        break; 
        case "y": 
        name4 = "Yacente π" 
        break; 
        case "z": 
        name4 = "Zafiro π·" 
        break; 
        default:
        name3 = "";
        name1 = "";
        name4 = ""
    }

    document.getElementById("div22").innerHTML += 
    "<div><span class='name3'> " + name3 + " - </span><span class='name4'>  " + name4 + "</span></div>";

    }

    let letters = /^[A-Za-z]+$/;
    
    if(name1.match(letters)){
        document.getElementById("div1").style.display = "none";
        document.getElementById("div2").style.display = "block";
        document.querySelector('h1').style.display = "none";
        
    } else {
        document.getElementById("div22").innerHTML = "";
        return false;
    }
}

form.addEventListener('submit', submit);