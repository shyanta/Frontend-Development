/* JavaScript voor Toggle menu */

var nav= document.querySelector('nav');
var search= document.querySelector('form');

var buttonNav= document.querySelector('button[id="menu"]');
var buttonSearch= document.querySelector('button[id="zoek"]');

buttonNav.addEventListener("click", menu);
buttonSearch.addEventListener("click", zoek);

function menu() {
    if (this === buttonNav){
    	nav.classList.toggle('visible');
    	search.classList.remove('visible');
    }
    else {
    	search.classList.remove('visible');
    	nav.classList.remove('visible');
    }
}

function zoek() {
    if (this === buttonSearch){
    	nav.classList.remove('visible');
    	search.classList.toggle('visible');
    }
    else{
    	search.classList.remove('visible');
    	nav.classList.remove('visible');
    }
}

/* Laatste Mededelingen Toggle */

var aside= document.querySelector('aside');
var buttonMededeling= document.querySelector('button[id="mededelingen"]')

buttonMededeling.addEventListener("click", mededeling);

function mededeling(){
	if (this === buttonMededeling){
		aside.classList.toggle('visible');
	}
}

/* Footer Toggle's*/

var sitemap= document.querySelector('section[id="sitemap"]');
var zoeken= document.querySelector('section[id="search"]');
var about= document.querySelector('section[id="about"]');
var credits= document.querySelector('section[id="credits"]');

var buttonSitemap= document.querySelector('button[class="sitemap"]');
var buttonZoeken= document.querySelector('button[class="search"]');
var buttonAbout= document.querySelector('button[class="about"]');
var buttonCredits= document.querySelector('button[class="credits"]');

buttonSitemap.addEventListener("click", een);
buttonZoeken.addEventListener("click", twee);
buttonAbout.addEventListener("click", drie);
buttonCredits.addEventListener("click", vier);

function een(){
    if (this === buttonSitemap){
        sitemap.classList.toggle('visible');
        zoeken.classList.remove('visible');
        about.classList.remove('visible');
        credits.classList.remove('visible');
    }

    else{
        sitemap.classList.remove('visible');
        zoeken.classList.remove('visible');
        about.classList.remove('visible');
        credits.classList.remove('visible');
    }
}

function twee(){
    if (this === buttonZoeken){
        zoeken.classList.toggle('visible');
        sitemap.classList.remove('visible');
        about.classList.remove('visible');
        credits.classList.remove('visible');
    }

    else{
        sitemap.classList.remove('visible');
        zoeken.classList.remove('visible');
        about.classList.remove('visible');
        credits.classList.remove('visible');
    }
}

function drie(){
    if (this === buttonAbout){
        about.classList.toggle('visible');
        sitemap.classList.remove('visible');
        zoeken.classList.remove('visible');
        credits.classList.remove('visible');
    }

    else{
        sitemap.classList.remove('visible');
        zoeken.classList.remove('visible');
        about.classList.remove('visible');
        credits.classList.remove('visible');
    }
}

function vier(){
    if (this === buttonCredits){
        credits.classList.toggle('visible');
        about.classList.remove('visible');
        sitemap.classList.remove('visible');
        zoeken.classList.remove('visible');
    }

    else{
        sitemap.classList.remove('visible');
        zoeken.classList.remove('visible');
        about.classList.remove('visible');
        credits.classList.remove('visible');
    }
}

/* Javascript voor formulier */
var project= document.getElementById('project');

var stage= document.getElementById('stage');

project.classList.add('inVisible');

stage.classList.add('inVisible');

var inputProject= document.querySelector('input[value="project"]');

var inputStage= document.querySelector('input[value="stage"]');



inputProject.addEventListener("click", trueFalse);
inputStage.addEventListener("click", trueFalse);

function trueFalse() {
    if (inputProject.checked){
        project.classList.remove('inVisible');
        stage.classList.add('inVisible');
    }
    else if(inputStage.checked){
        project.classList.add('inVisible');
        stage.classList.remove('inVisible');
    }
}
