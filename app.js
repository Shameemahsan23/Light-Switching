const light =document.getElementById('buld');
light.addEventListener('click',function(e){
    e.target.classList.toggle('bulb-on');
})