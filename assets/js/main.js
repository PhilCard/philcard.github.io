const projects = [
    {
        link : 'https://github.com/PhilCard/JokenPo',
        img:'https://philcard.github.io/assets/img/sobremim.png', 
        title: 'JokenPO', 
        category: 'FrontEnd' 
    },
    {   
        link : 'https://github.com/PhilCard/helpDesk',
        img:'https://philcard.github.io/assets/img/phpWizzard.png', 
        title: 'HelpDesk', 
        category: 'BackEnd' 
    },
    {
        link : '#',
        img:'https://philcard.github.io/assets/img/sobremim.png', 
        title: 'KillMosque', 
        category: 'FrontEnd' 
    },
    {   
        link : 'https://project-philcard.infinityfreeapp.com/index.php',
        img:'https://philcard.github.io/assets/img/phpWizzard.png', 
        title: 'SendMail', 
        category: 'BackEnd' 
    },
    {   
        link : '#',
        img:'https://philcard.github.io/assets/img/sobremim.png', 
        title: 'OrçamentoApp', 
        category: 'FrontEnd' 
    },
    {   
        link : 'https://github.com/PhilCard/philcard.github.io',
        img:'https://philcard.github.io/assets/img/sobremim.png', 
        title: 'PorfolioWeb', 
        category: 'FrontEnd' 
    },
    {   
        link : 'https://github.com/PhilCard/aginfluencer',
        img:'https://philcard.github.io/assets/img/phpWizzard.png', 
        title: 'Ecommerce', 
        category: 'BackEnd' 
    },
    {   
        link : '#',
        img:'https://philcard.github.io/assets/img/phpWizzard.png', 
        title: 'Store Web', 
        category: 'BackEnd' 
    },
    {   
        link : '#',
        img:'https://philcard.github.io/assets/img/sobremim.png', 
        title: 'ToDoList', 
        category: 'FrontEnd' 
    },
    {   
        link : 'https://github.com/PhilCard/oabApp',
        img:'https://philcard.github.io/assets/img/phpWizzard.png', 
        title: 'OabApp', 
        category: 'BackEnd' 
    }
]

filtra_projects = [...projects];

//criar função para mapear projetos e filtrar, tornar o código menos verboso
let contador = 0;
const speed = 50;
const lang = document.getElementById('language');
const devIcons = document.getElementById("devIcons");
const btn_group = document.querySelector('.button-group');
const btns = btn_group.querySelectorAll('button');
const btn_todos = document.getElementById('todos');
const btn_back = document.getElementById('backend');
const btn_front = document.getElementById('frontend');
const techContainer = document.querySelector('.tech-grid');


window.addEventListener('load', function () {

    techContainer.innerHTML = filtra_projects.map(projeto => {
        return exibeProjetos(projeto);
    })
    .join('');

    if (lang.value === 'pt') {
        apresentaPerfil();
    }
    else if(lang.value === 'en') 
    {
        introduceMySelf();
    }

});

function changeLanguage() {
    if (lang.value == 'en') 
    {
        window.location = 'https://philcard.github.io/en';
    } 
    else if (lang.value == 'pt') 
    {
        window.location = 'https://philcard.github.io';
    }
}

function introduceMySelf (txt = 'Developer in transition with a focus on web, passionate about technology and innovation') {
    if (contador < txt.length) {
        document.getElementById("introduce_myself").innerHTML += txt.charAt(contador);
        contador++;
        setTimeout(introduceMySelf, speed);
    }
}

function apresentaPerfil (txt = 'Desenvolvedor em transição com foco em web, apaixonado por tecnologia e inovação') {
    if (contador < txt.length) {
        document.getElementById("introduce_myself").innerHTML += txt.charAt(contador);
        contador++;
        setTimeout(apresentaPerfil, speed);
    }
}


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


function topoNavMobile() {
    document.querySelector(".abrir-menu").onclick = function(){
        document.documentElement.classList.add("menu-ativo");
    }
  
  document.querySelector(".fechar-menu").onclick = function(){
    document.documentElement.classList.remove("menu-ativo");
    //fim botão abrir e fechar menu//
  }
}

topoNavMobile();


window.onscroll = function () {
    let topo = window.pageYOffset;
    if (topo > 400) {
        document.getElementById('seta').classList.add('scroll-top');
    } 
    else 
    {
        document.getElementById('seta').classList.remove('scroll-top');
    }
}


function exibeProjetos(projeto) {

    return `<div class="tech-card">
        <a href="${projeto.link}" target="_blank">
            <div class="card-icon react">
                <img src="${projeto.img}" alt="">
            </div>
            <div class="card-info">
                <h3 class="tech-name">${projeto.title}</h3>
                <p class="tech-category">${projeto.category}</p>
            </div>
        </a>
    </div>`
}


btns.forEach((button) => {
    let btn = button;
    btn.addEventListener('click', event =>{

        const botoesCate = [btn_todos, btn_back, btn_front];
        let btnActive;
        let btnInative;

        for(let i = 0; i < botoesCate.length; i++) {

            for(let x in botoesCate) {

                if(event.target && event.target.id === botoesCate[i].id) {
                     
                    if(botoesCate[x] == botoesCate[i]) 
                    {
                        btnActive = botoesCate[x];
                        btnActive.style.background = 'ghostwhite';
                        btnActive.style.color = '#0d0d0d';
                    }
                    else if(botoesCate[x] !== botoesCate[i]) 
                    {
                       btnInative = botoesCate[x];
                       btnInative.style.background = '#0d0d0d';
                       btnInative.style.color = 'ghostwhite';
                    }
                }
            }
        }

        if(btnActive.id === 'todos') 
        {
            techContainer.innerHTML = filtra_projects.map(projeto => {
                return exibeProjetos(projeto);
            })
            .join('');
        }
        else 
        {   
            techContainer.innerHTML = '';
            filtra_projects
                .filter(projeto => projeto.category.toLowerCase() === btnActive.id)
                .forEach(projeto => {
                    techContainer.innerHTML += exibeProjetos(projeto);
                });
        }
   })
})


