let serial = 0;

//first card
document.getElementById("first-card-btn").addEventListener("click", function(){
    serial += 1;   
    //get the data
    const angleName = document.getElementById("first-name").innerText;
    const firstInput = document.getElementById("b-input").value;
    const secondInput = document.getElementById("h-input").value;
    //console.log(firstElement, firstInput, secondInput);

    //math
    if(
        firstInput == "" || 
        secondInput == "" ||
        firstInput <= 0 ||
        secondInput <= 0
    ){
        return alert("pleas inter valid number")
    }
    const AreaTotal = 0.5 * parseFloat(firstInput) * parseFloat(secondInput);

    //show the data
    displayData(angleName, AreaTotal);
})

//second card
document.getElementById("second-card-btn").addEventListener("click", function(){
    serial += 1;
    //get the data
    const angleName = document.getElementById("rectangle").innerText;
    const firstInput = document.getElementById("w-input").value;
    const secondInput = document.getElementById("l-input").value;

     //math
     if(
        firstInput == "" || 
        secondInput == "" ||
        firstInput <= 0 ||
        secondInput <= 0
    ){
        return alert("pleas inter valid number")
    }
    const AreaTotal = parseFloat(firstInput) * parseFloat(secondInput);

    //show the data
    displayData(angleName, AreaTotal);    
})

//third card
document.getElementById("third-card-btn").addEventListener("click", function(){
    serial += 1;  
    //get the data
    const angleName = document.getElementById("parallelogram").innerText;
    const firstInput = document.getElementById("parallelogram-b").value;
    const secondInput = document.getElementById("parallelogram-h").value;

     //math
     if(
        firstInput == "" || 
        secondInput == "" ||
        firstInput <= 0 ||
        secondInput <= 0
    ){
        return alert("pleas inter valid number")
    }
    const AreaTotal = parseFloat(firstInput) * parseFloat(secondInput);

    //show the data
    displayData(angleName, AreaTotal);    
})

//forth card
document.getElementById("forth-card-btn").addEventListener("click", function(){
    serial += 1;
    //get the data
    const angleName = document.getElementById("rhombus").innerText;
    const firstInput = document.getElementById("rhombus-b1").value;
    const secondInput = document.getElementById("rhombus-b2").value;

     //math
     if(
        firstInput == "" || 
        secondInput == "" ||
        firstInput <= 0 ||
        secondInput <= 0
    ){
        return alert("pleas inter valid number")
    }
    const AreaTotal = 0.5 * parseFloat(firstInput) * parseFloat(secondInput);

    //show the data
    displayData(angleName, AreaTotal);    
})

//fifth card
document.getElementById("fifth-card-btn").addEventListener("click", function(){
    serial += 1;
    //get the data
    const angleName = document.getElementById("pentagon").innerText;
    const firstInput = document.getElementById("pentagon-b").value;
    const secondInput = document.getElementById("pentagon-p").value;

     //math
     if(
        firstInput == "" || 
        secondInput == "" ||
        firstInput <= 0 ||
        secondInput <= 0
    ){
        return alert("pleas inter valid number")
    }
    const AreaTotal = 0.5 * parseFloat(firstInput) * parseFloat(secondInput);

    //show the data
    displayData(angleName, AreaTotal);    
})

//sixth card
document.getElementById("sixth-card-btn").addEventListener("click", function(){
    serial += 1;
    //get the data
    const angleName = document.getElementById("ellipse").innerText;
    const firstInput = document.getElementById("ellipse-a").value;
    const secondInput = document.getElementById("ellipse-b").value;

     //math
     if(
        firstInput == "" || 
        secondInput == "" ||
        firstInput <= 0 ||
        secondInput <= 0
    ){
        return alert("pleas inter valid number")
    }
    const AreaTotal = 3.14 * parseFloat(firstInput) * parseFloat(secondInput);

    //show the data
    displayData(angleName, AreaTotal);    
})

    //common function
function displayData(angleName, AreaTotal){
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML=`
    <td>${serial}</td>
    <td>${angleName}</td>
    <td>${AreaTotal}</td>
    `;
    container.appendChild(tr);
}