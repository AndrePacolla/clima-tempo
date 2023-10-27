document.querySelector(".busca").addEventListener("submit", async (event) => {
  event.preventDefault();
  let input = document.querySelector("#searchInput").value;

  if (input !== "") {
    document.querySelector(".img").src = "assests/loading.gif";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=2bf2545b6be242cedba39401909dd0d1&units=metric&lang=pt_br`;

    let results = await fetch(url);
    let json = await results.json();

    // code 200 ,  Serve tanto para estruturar quanto para selecionar oq quero usar!

    if(json.cod === 200) {
        showinfo({
            name: json.name,
            country: json.sys.country,
            temp: json.main.temp,
            tempIcon: json.weather[0].icon,
            windSpeed: json.wind.speed,   
            windAngle: json.wind.deg         
        });
    }else {
      showWarning("Localização não encontrada 💢");
    }
  } else {
  }
});

// estrutudando/ manipulando o DOM.
function showinfo(j){
    showWarning('');

    document.querySelector('.resultado').style.display = 'block';
    document.querySelector('.titulo').innerHTML = `${j.name} - ${j.country} 🔎`;
    document.querySelector('.tempInfo').innerHTML = `${j.temp} <sup>ºC</sup>`
    document.querySelector('.ventoInfo').innerHTML = `${j.windSpeed}<span>km/h</span>`



}


function showWarning(msg) {
  document.querySelector(".aviso").innerHTML = msg;
}
