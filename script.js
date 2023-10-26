
document.querySelector('.busca').addEventListener('submit', async (event)=>{
    event.preventDefault();
    let input = document.querySelector('#searchInput').value;

    if(input !== ''){

        document.querySelector('.img').src ='assests/loading.gif'

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=2bf2545b6be242cedba39401909dd0d1&units=metric&lang=pt_br`
        
        let results = await fetch(url);
        let json = await results.json();

        if(json.code === 200){

        }else{
            showWarning('Localização não encontrada !')
        }

    }else{

    }

});
function showWarning(msg){
    document.querySelector('.aviso').innerHTML = msg;

}
