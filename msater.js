const $ = (element)=> document.getElementById(element);

        //DECLARACIÓN DE FUNCIONES
function run ()
{
    document.querySelector(".instructions").style.display = "none";
    setTimeout(function(){
        document.querySelector(".container").style.display = "block"
    }, 1000);
}
function show()
{
    document.querySelector(".container").style.display = "none";
    document.querySelector(".final-data").style.visibility = "visible";
}

function knowWeight()
{
    if(planetSelected != undefined)
{

    let elements = Object.keys(planets);
    for(let i=0; i< elements.length; i++)
    {
      let planet = elements[i]
      if(planet == planetSelected)
      {
        gravity = planets[planet]
        
        if($('weight').value != "")
        {
            userWeight = $('weight').value;
            let finalW = Math.round((userWeight/9.8) * gravity);
            setTimeout(function(){
            let text = document.createTextNode(`Your weight in ${planet} would be ${finalW}Kg`);
            document.querySelector(".final-data").replaceChildren(text);
            let btn = document.createElement("button");
            btn.innerHTML = "Do it again"
            btn.setAttribute("id", "again-btn");
            document.querySelector(".final-data").appendChild(btn);
            $('again-btn').addEventListener("click", doAgain)
            }, 500);
        } else 
        {
            alert("Insert your weight");
        }
      }
      else{}
    }

}
else
{
    alert("Plase, select a planet");
    setTimeout(function(){
        window.location.reload();
    }, 500)
}
}
function doAgain()
{
    window.location.reload();
}

        //ASIGNACIÓN DE EVENTOS

$('instruction-btn').addEventListener("click", run);
$('calculate-btn').addEventListener("click", show);
$('know-btn').addEventListener("click", knowWeight);

        //VARIABLES GLOBALES

let planetSelected;
let gravity;
let userWeight;

const planets = 
{
    'mercury': 3.7,
    'venus': 8.8,
    'mars': 3.7,
    'jupiter': 24.7,
    'saturn': 10.4,
    'uranus': 8.8,
    'neptune': 11
}

        //FUNCION PARA OBTENER ID DEL ELEMENTO SELECCIONADO

document.querySelectorAll(".click").forEach(el => {
    el.addEventListener("click", e => {
      const id = e.target.getAttribute("id");
      planetSelected = id;
    });
  });

