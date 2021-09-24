// Obtenemos nuestro botón.
var btn = document.getElementById('btn')

//Obtenemos el elemento donde vamos a colocar el resultado.
var resultPlace = document.getElementById('child')

btn.addEventListener("click", function() {
    let inputOne = document.getElementById('inputOne').value
    var inputTwo = document.getElementById('inputTwo').value

    if(inputOne === '' || inputTwo === '' || isNaN(inputOne) || isNaN(inputTwo)) {
        
        resultPlace.innerHTML = '<p class="red">DEBE INTRODUCIR VALORES APROPIADOS</p>'

    } else {
        var sumResult = parseFloat(inputOne) + parseFloat(inputTwo)
        //var contentResult = document.createElement("p.green")
        //contentResult.textContent = `EL RESULTADO DE LA SUMA ES DE ${sumResult}`
        //resultPlace.append(contentResult)
        resultPlace.innerHTML = `<p class="green">EL RESULTADO DE LA SUMA ES DE ${sumResult}</p>`
    }
    
})
