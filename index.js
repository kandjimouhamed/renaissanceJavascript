const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const elemet = e.currentTarget
    console.log(elemet);
   const data =  new FormData(elemet)
    console.log( data.get('firstname'));
    console.log(e.target);
})
document.addEventListener('keydown', (e)=>{
    // console.log(e.ctrlKey)
    // console.log(e.key)
    console.log(e)
    if (e.ctrlKey === true && e.key === 'k') {
        document.body.style.backgroundColor = 'red'
        
    }
})
window.addEventListener('scroll', ()=>{
    // console.log(window.scrollX)
    // console.log(window.scrollY)
    console.log(scrollY)
    console.log(scrollX)
   
})
document.getElementById('demo')
let montant = '30000';
let result = montant.padEnd(montant.length + 3,'.00')
document.getElementById('demo').innerHTML = result