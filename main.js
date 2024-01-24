function getValue() {
    let input1 = document.getElementById("input1").value;
    let input2 = document.querySelector("#input2").value
    let Hr2 = document.querySelector("#Hr2")
    let Hr1 = document.querySelector("#Hr1")

    if( input1.length >= 5){
        Hr1.style.backgroundColor ="green"    
    } else if(input1 < 5){
        Hr1.style.backgroundColor = "red"
    }if( input2.length >= 3){
        Hr2.style.backgroundColor ="green"    
    }else if(input2 < 5 ){
        Hr2.style.backgroundColor = "red"
    }
}

let submit = document.querySelector("#submit")
submit.addEventListener('click', getValue)