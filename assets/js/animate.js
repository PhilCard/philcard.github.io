var contador = 0;
var txt = 'Desenvolvedor em transição com foco em web, apaixonado por tecnologia e inovação';
var speed = 50;

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