const projects = [
    {
        link : '#',
        img:'assets/img/sobremim.png', 
        title: 'JavaScript', 
        category: 'Front-End' 
    },
    {
        link : '#',
        img:'assets/img/sobremim.png', 
        title: 'PHP', 
        category: 'Back-End' 
    },
    {   
        link : '#',
        img:'assets/img/sobremim.png', 
        title: 'Node.JS', 
        category: 'Back-End' 
    },
    {   
        link : '#',
        img:'assets/img/sobremim.png', 
        title: 'Node.JS', 
        category: 'Back-End' 
    },
    {   
        link : '#',
        img:'assets/img/sobremim.png', 
        title: 'Node.JS', 
        category: 'Back-End' 
    }
]

filtra_projects = [...projects];

let contador = 0;
//Developer in transition with a focus on web, passionate about technology and innovation.
let speed = 50;
let lang = document.getElementById('language');

const btn_group = document.querySelector('.button-group');
const btns = btn_group.querySelectorAll('button');
const btn_todos = document.getElementById('todos');
const btn_back = document.getElementById('backend');
const btn_front = document.getElementById('frontend');
const techContainer = document.querySelector('.tech-grid');


window.addEventListener('load', function () {

    mostraProjects();
    //btn_todos.classList.add('button-hover');

    if (lang.value === 'pt') {
        typeWriter();
    } else if (lang.value === 'en') {
        typeWriter('Developer in transition with a focus on web, passionate about technology and innovation');
    }

});

function changeLanguage() {
    if (lang.value == 'en') {
        window.location = 'http://localhost/philcard.github.io/en/';
        //https://philcard.github.io/
    } else if (lang.value == 'pt') {
        window.location = 'http://localhost/philcard.github.io';
        //https://philcard.github.io/en
    }
}

function typeWriter(txt = 'Desenvolvedor em transição com foco em web, apaixonado por tecnologia e inovação') { //adicionar parametro para ingles e português
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



window.onscroll = function () {
    let topo = window.pageYOffset;
    if (topo > 400) {
        document.getElementById('seta').classList.add('scroll-top');
    } else {
        document.getElementById('seta').classList.remove('scroll-top');
    }
}


const mostraProjects = () => {

    techContainer.innerHTML = filtra_projects.map((project) => {
        return `<div class="tech-card">
             <a href="${project.link}">
                <div class="card-icon react">
                    <img src="${project.img}" alt="">
                </div>
                <div class="card-info">
                    <h3 class="tech-name">${project.title}</h3>
                    <p class="tech-category">${project.category}</p>
                </div>
            </a>
        </div>`
    })
    .join('')
}


btns.forEach((button) => {
    let btn = button;
    btn.addEventListener('click', event =>{
        if(event.target && event.target.id === 'todos') {
           btn_todos.style.background = 'ghostwhite';
           btn_todos.style.color = '#0d0d0d';
           btn_back.style.background = '#0d0d0d';
           btn_back.style.color = 'ghostwhite';
           btn_front.style.background = '#0d0d0d';
           btn_front.style.color = 'ghostwhite';
        }
        else if(event.target && event.target.id === 'backend') 
        {
            btn_back.style.background = 'ghostwhite';
            btn_back.style.color = '#0d0d0d';
            btn_front.style.background = '#0d0d0d';
            btn_front.style.color = 'ghostwhite';
            btn_todos.style.background = '#0d0d0d';
            btn_todos.style.color = 'ghostwhite';
        }
        else if(event.target && event.target.id === 'frontend') 
        {
            btn_front.style.background = 'ghostwhite';
            btn_front.style.color = '#0d0d0d';
            btn_back.style.background = '#0d0d0d';
            btn_back.style.color = 'ghostwhite';
            btn_todos.style.background = '#0d0d0d';
            btn_todos.style.color = 'ghostwhite';
        }
   })
})

