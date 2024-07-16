const btnHome = document.getElementById('btn-Home');
const btnSobre = document.getElementById('btn-Sobre Nos');
const btnContato = document.getElementById('btnContato');

btnHome.addEventListener('click', function(event) {
    event.preventDefault(); 
    console.log('Clicou em Página Inicial');
    
});

btnSobre.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Clicou em Sobre Nos');
   
});

btncontato.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Clicou em Contato');
   
});