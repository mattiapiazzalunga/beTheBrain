$(function () {
	initCarousel();
	initFields();
	initScroll();
})

function initCarousel() {
	$('.carousel').carousel({
		interval: false
	});
}

function initFields() {
	jcf.replaceAll();
	$('#annoInput').datepicker();
}

function initScroll() {
	$('[data-toggle="tooltip"]').tooltip();
	$(".testata-header-bottone").on('click', function (event) {
		if (this.hash != undefined) {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 900, function () {
				window.location.hash = hash;
			});
		}
	});
	$(".spazi-classifica-gioca .bottone").on('click', function (event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 900, function () {
				window.location.hash = hash;
			});
		}
	});
}

function formeffect(id, para) {
	var oggetto = document.getElementById(id);
	oggetto.style = "font-size: 13px; top:-15px;";
	document.getElementById(para).placeholder = "Scrivi qui...";
	document.getElementById(para).focus();
}
function formeffect2(id,para) {
	var label=document.getElementById(id);
	var input=document.getElementById(para);
	var valore=input.value.trim();
	if(valore.length === 0)
	{
		document.getElementById(para).placeholder = "";
		label.style = "font-size: 15px; top:8px;";
	}
		input.value=valore;
}