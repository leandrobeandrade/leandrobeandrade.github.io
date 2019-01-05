$('nav').load('components/menu.html');
$('.conteudo').load('components/home.html');

function linkSobre() {
	$('.conteudo').empty();
	$('.conteudo').load('components/sobre.html');
	$('.sobre').addClass('active');
	$('.nav-item').not('.sobre').removeClass('active');
}

function linkConhec() {
	$('.conteudo').empty();
	$('.conteudo').load('components/conhecimentos.html');
	$('.conhec').addClass('active');
	$('.nav-item').not('.conhec').removeClass('active');
}
function linkContato() {
	$('.conteudo').empty();
	$('.conteudo').load('components/contato.html');
	$('.contato').addClass('active');
	$('.nav-item').not('.contato').removeClass('active');
}
function linkHome() {
	$('.conteudo').empty();
	$('.conteudo').load('components/home.html');
	$('.home').addClass('active');
	$('.nav-item').not('.home').removeClass('active');
}