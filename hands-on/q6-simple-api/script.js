
let url = " https://api.kanye.rest/"

window.addEventListener('DOMContentLoaded', function(){
    let btn=document.querySelector('#btn');
    console.log(btn);
    document.addEventListener('click', async function(){
        let response = await axios.get(url);
        console.log(response.data.quote);
        let quote=response.data.quote;
        document.querySelector('#quote').innerHTML=quote;
    })
})