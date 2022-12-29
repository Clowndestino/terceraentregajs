/*array de productos*/
let id = [
    {1: "Bleach", valor: 750, paginas:420},
    {2: "Demon Slayer", valor: 750, paginas:420},
    {3: "Evangelion", valor: 750, paginas:420},
    {4: "Gantz", valor: 1350, paginas:600},
    {5: "My Hero Academia", valor: 750, paginas:420},
    {6: "Naruto", valor: 750, paginas:420},
    {7: "Promise Neverland", valor: 750, paginas:420},
    {8: "Akame Ga Kill", valor: 950, paginas:520},
    {9: "Attack on Titan", valor: 1350, paginas:600},
    {10: "Dragon Ball Super", valor: 1350, paginas:600},
    {11: "Haiikyu", valor: 750, paginas:420},
    {12: "Tokyo Revengers", valor: 1350, paginas:600},   
];

let CarroDeCompras = []

let seleccionar = prompt("Hi, queres leer mangas?")

while (seleccionar != "si" && seleccionar != "no") {
    alert("responde la pregunta")
    seleccionar = prompt("Hi, queres leer mangas?")
}

if(seleccionar == "si"){
    alert("nuestros mangas en stock son")
    let todoslosMangas = id.map((Tomo) => Tomo.id + " " + Tomo.valor+ "$" + Tomo.paginas );
    alert(todoslosMangas.join(" - "))
} else if (seleccionar == "no"){
    alert("gracias por chusmear")
}

 while(seleccionar != "no"){
    let Tomo = prompt("Elegi tus tomos")
    let valor = 0

    if(Tomo == "Bleach" || Tomo == "Demon Slayer" || Tomo == "Evangelion" || Tomo == "Gantz" || Tomo == "My Hero Academia" || Tomo == "Naruto" || Tomo == "Promise Neverland" || Tomo == "Akame Ga Kill" || Tomo == "Attack on Titan" || Tomo == "Dragon Ball Super" || Tomo == "Haiikyu" || Tomo == "Tokyo Revengers"){
        switch(id){
            case "Bleach":
                valor = 750;
                paginas = 420;
                break;
            case "Demon Slayer":
                valor = 750;
                paginas = 420;
                break;
            case "Evangelion":
                valor = 750;
                paginas = 420;
                break;
            case "Gantz":
                valor = 1350;
                paginas = 600;
                break;
            case "My Hero Academia":
                valor = 750;
                paginas = 420;
                break;
            case "Naruto":
                valor = 750;
                paginas = 420;
                break;
            case "Promise Neverland":
                valor = 750;
                paginas = 420;
                break;
            case "Akame Ga Kill":
                valor = 950;
                paginas = 520;
                break;
            case "Attack on Titan":
                valor = 1350;
                paginas = 600;
                break;
            case "Dragon Ball Super":
                valor = 1350;
                paginas = 600;
                break;
            case "Haiikyu":
                valor = 750;
                paginas = 420;
                break;
            case "Tokyo Revengers":
                valor = 1350;
                paginas = 600;
                break;
            default:
                break;
        }
        let Tomo = parseInt(prompt("Cuantos Tomos llevas???"))
        CarroDeCompras.push({Tomo, valor})
            console.log(CarroDeCompras)
    } else{
        alert("No tenemos este Tomo")
    }

    seleccionar = prompt("Desea Continuar?")

    while(seleccionar === "no"){
        alert("Gracias por Confiar en nosotros")
        CarroDeCompras.forEach((Carrofinal) => {
            console.log(`Tomo: ${Carrofinal.Tomo}, tomos: ${Carrofinal.Tomo}, Total a pagar ${Carrofinal.Tomo * Carrofinal.valor}`);
        })
    }
 }