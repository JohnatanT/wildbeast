// Lógica
// 1 - Selecionar elementos que devem ser animados
// 2 - Definir a classe que é adicionada durante a animação
// 3 - Criar função de animação
// 3.1 - Verificar a distância entre a barra de scroll e o topo do site
// 3.2 - Verificar se a distância do 3.1 + Offset é maior do que a distância entre o elemento e o Topo da Página.
// 3.3 - Se verdadeiro adicionar classe de animação, remover se for falso.
// 4 - Ativar a função de animação toda vez que o usuário utilizar o Scroll
// 5 - Otimizar ativação

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


const target = document.querySelectorAll('[data-anime]'); //Elementos que serão animados
const animationClass = 'animate'; //Classe de animação

function animeScroll () {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4); //Pega a distancia da barra de scroll e do topo do site
    //Mostra qual o elemento do HTML está
    target.forEach(function(element){
        if(windowTop > element.offsetTop){
            element.classList.add(animationClass);
        }else{
            element.classList.remove(animationClass);
        }
    })
}

//Garante que a função será ativada sempre que o usuario entrar no site
animeScroll();

//Verifica se tem algo para ser animado na página
if(target.length){
    //Quando ocorre o scroll chama a função
    window.addEventListener('scroll',debounce(function(){
        animeScroll();
    },200));
}