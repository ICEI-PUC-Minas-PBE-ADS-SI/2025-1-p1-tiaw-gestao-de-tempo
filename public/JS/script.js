function drawLineBetweenElements() {
    const svg = document.getElementById('line-svg');
    svg.innerHTML = ''; // limpa linhas antigas

    const caminho = document.querySelector('.caminho');
    const circles = caminho.querySelectorAll('.circle');
    if (circles.length < 2) return;

    // ajustar tamanho SVG para cobrir container
    const caminhoRect = caminho.getBoundingClientRect();
    svg.style.width = caminho.scrollWidth + 'px';
    svg.style.height = caminho.scrollHeight + 'px';

    // Obter posições relativas dos círculos para o svg
    const points = Array.from(circles).map(c => {
        const rect = c.getBoundingClientRect();
        return {
            x: rect.left - caminhoRect.left + rect.width / 2,
            y: rect.top - caminhoRect.top + rect.height / 2
        };
    });

    // Criar linhas SVG entre pontos consecutivos
    for (let i = 0; i < points.length -1; i++) {
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute('x1', points[i].x);
        line.setAttribute('y1', points[i].y);
        line.setAttribute('x2', points[i+1].x);
        line.setAttribute('y2', points[i+1].y);
        line.setAttribute('stroke', 'black');
        line.setAttribute('stroke-width', '4');
        line.setAttribute('stroke-linecap', 'round');
        svg.appendChild(line);
    }
}

window.addEventListener('load', drawLineBetweenElements);
window.addEventListener('resize', drawLineBetweenElements);

function amigos(){
    location.href = "Pagina_Inicial.html"
}

function config(){
    location.href = "config.html"
}

function home(){
    location.href = "index.html"
}

function segunda(){
    location.href = "tarefa-segunda.html"
}

function terca(){
    location.href = "tarefa-terca.html"
}

function quarta(){
    location.href = "tarefa-quarta.html"
}

function quinta(){
    location.href = "tarefa-quinta.html"
}

function sexta(){
    location.href = "tarefa-sexta.html"
}

function loja(){
    location.href = "loja.html"
}