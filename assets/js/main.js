
let contador = 0;
let txt = 'Desenvolvedor em transição com foco em web, apaixonado por tecnologia e inovação';
let speed = 50;

const btn_group = document.querySelector('.button-group');

const stacks = [
  {dev : 'back', titulo : 'HelpDesk', link: 'https://github.com/PhilCard/JokenPo', img : 'img/helpDesk.jpg'},
  {dev : 'front', titulo : 'Jokenpo', link: 'https://github.com/PhilCard/helpDesk', img : 'img/jokenpo.jpg'}
  //{dev : 'back', img : 'img/jokenpo.jpg'}
]

window.addEventListener('load',typeWriter);

function changeLanguage()
{
  let lang = document.getElementById('language').value;
  if(lang == 'en')
  {
    //window.location = 'en/index.html';
    console.log('english');
  }
  else
  {
    console.log('estou em pt');
  }
}

window.onscroll = function()
{
  let topo = window.pageYOffset;
  if(topo > 400)
  {
    document.getElementById('seta').classList.add('scroll-top');
  }
  else
  {
    document.getElementById('seta').classList.remove('scroll-top');
  }
}

function typeWriter() {
  if (contador < txt.length) {
    document.getElementById("introduce_myself").innerHTML += txt.charAt(contador);
    contador++;
    setTimeout(typeWriter, speed);
  }
}

const devIcons = document.getElementById("devIcons");

    function slideOnce() {
      devIcons.style.transform = "translateX(-100px)"; // move 1 ícone (80px + 20px gap)

      setTimeout(() => {
        // Após a animação, mover o primeiro ícone para o final
        const firstIcon = devIcons.firstElementChild;
        devIcons.appendChild(firstIcon);

        // Resetar o transform para posição original instantaneamente (sem transição)
        devIcons.style.transition = "none";
        devIcons.style.transform = "translateX(0)";

        // Reabilitar a transição para o próximo ciclo
        setTimeout(() => {
          devIcons.style.transition = "transform 0.5s ease-in-out";
        }, 20);
      }, 500); // Tempo da animação
    }
setInterval(slideOnce, 2000);


btn_group.addEventListener('click', event => {

  if(event.target && event.target.id === 'todos') 
  {
    //console.log(event.target.id);
    /*
    for(let stack of stacks)
    {

    }
    //mudar estilo do botão, mostrar que está selecionado
    /*/
  }
   if(event.target && event.target.id === 'backend') 
  {
    //console.log(event.target.id);
    /*
    for(let stack of stacks)
    {

    }
    //mudar estilo do botão, mostrar que está selecionado
    /*/
  }
   if(event.target && event.target.id === 'frontend') 
  {
    //console.log(event.target.id);
    /*
    for(let stack of stacks)
    {

    }
    //mudar estilo do botão, mostrar que está selecionado
    /*/
  }

});

