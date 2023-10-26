document.querySelector('.busca').addEventListener('submit',(event)=>{
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;

    if(input !== ''){
        showWarning();

    }else{

    }

});
function showWarning(){
    document.querySelector('.img').src = 'assests/loading.gif';
    



}