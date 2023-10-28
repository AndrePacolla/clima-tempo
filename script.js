document.querySelector(".busca").addEventListener("submit", async (event) => {
  event.preventDefault();
  let input = document.querySelector("#searchInput").value;

  if (input !== "") {

      clearInfo();
      showGif();

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=2bf2545b6be242cedba39401909dd0d1&units=metric&lang=pt_br`;

    let results = await fetch(url);
    let json = await results.json();

    // code 200 ,  Serve tanto para estruturar meu objeto, quanto para selecionar oq quero usar!

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
      clearInfo();
      showWarning("Localização não encontrada 💢");
    }
  } else {
    clearInfo();
  }
});

// estrutudando/ manipulando o DOM.
function showinfo(j){
    hiddenGif();

    document.querySelector('.titulo').innerHTML = `${j.name} - ${j.country} 🔎`;
    document.querySelector('.tempInfo').innerHTML = `${j.temp} <sup>ºC</sup>`
    document.querySelector('.ventoInfo').innerHTML = `${j.windSpeed} <span>km/h</span>`

    document.querySelector('.temp img').setAttribute('src' , `http://openweathermap.org/img/wn/${j.tempIcon}@2x.png`)
    document.querySelector('.ventoPonto').style.transform = `rotate(${j.windAngle-90}deg)`;

    document.querySelector('.resultado').style.display = 'block';

};


function showWarning(msg) {
  document.querySelector(".aviso").innerHTML = msg;
}

function clearInfo(){
    document.querySelector('.resultado').style.display = 'none';
    
}

function showGif(){
    document.querySelector(".aviso img").setAttribute('src' , "assests/loading.gif");
}

function hiddenGif(){
    document.querySelector(".aviso img").setAttribute('src' , "");
}