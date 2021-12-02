function calculate(){
    let amount = Number(document.getElementById("amount").value);
    let interest = Number(document.getElementById("r").value)/100;
    let n = Number(document.getElementById("n").value);
    let method_payment = document.getElementById("select").value;
    let result;
    if(method_payment=="ordinary"){
        result = amount*((1-(Math.pow(1+interest,-n)))/interest);

        document.getElementById("result").innerHTML = result;
    }

    else{
        result = amount*((1-(Math.pow(1+interest,-(n))))/interest)*(1+interest);

        document.getElementById("result").innerHTML = result;
    }

    
}