//blocks 
let quickPickUp=document.getElementById('pickup');
let order=document.getElementById('order');
let newProduct=document.getElementById('new_product');
let flavors=document.getElementById('explore_flavors');
let behindTheScene=document.getElementById('behind_the_scene');
let interior=document.getElementById('interior');
//nav bar
let home=document.getElementById('home');
let menu=document.getElementById('menu');
let about=document.getElementById('about');
let search=document.getElementById('search');
//sign button 
let sign=document.getElementById('sign');


//nav bar change color
home.onmouseover=function(){
	this.style.color='#FAEED3'; 
	this.style.transition = "all 0.5s";
}

home.onmouseout=function(){
	this.style.color='#5A5B50'
}

menu.onmouseover=function(){
	this.style.color='#FAEED3'; 
	this.style.transition = "all 0.5s";
}

menu.onmouseout=function(){
	this.style.color='#5A5B50'
}

about.onmouseover=function(){
	this.style.color='#FAEED3'; 
	this.style.transition = "all 0.5s";
}

about.onmouseout=function(){
	this.style.color='#5A5B50'
}

search.onmouseover=function(){
	this.style.color='#FAEED3'; 
	this.style.transition = "all 0.5s";
}

search.onmouseout=function(){
	this.style.color='#5A5B50'
}

sign.onmouseover=function(){
	this.style.color='#FAEED3';
	this.style.backgroundColor='#5A5B50'; 
	this.style.border='0px solid #FAEED3';
	this.style.transition = "all 0.5s";
}

sign.onmouseout=function(){
	this.style.color='#5A5B50';
	this.style.backgroundColor='transparent'; 
	this.style.border='2px solid #5A5B50';
}







//change the shadow 
quickPickUp.onmouseover=function(){
	this.style.boxShadow='0 8px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)'; 
	//ref: https://www.w3schools.com/jsref/prop_style_transition.asp
	this.style.transition = "all 0.5s";
}

quickPickUp.onmouseout=function(){
	this.style.boxShadow='0 4px 4px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05)'; 
}

order.onmouseover=function(){
	this.style.boxShadow='0 8px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)'; 
	this.style.transition = "all 0.5s";
}

order.onmouseout=function(){
	this.style.boxShadow='0 4px 4px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05)'; 
}

newProduct.onmouseover=function(){
	this.style.boxShadow='0 8px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.05)'; 
	this.style.transition = "all 0.5s";
}

newProduct.onmouseout=function(){
	this.style.boxShadow='none'; 
}

flavors.onmouseover=function(){
	this.style.boxShadow='0 8px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.05)';
	this.style.transition = "all 0.5s"; 
}

flavors.onmouseout=function(){
	this.style.boxShadow='none'; 
}

behindTheScene.onmouseover=function(){
	this.style.boxShadow='0 8px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.05)';
	this.style.transition = "all 0.5s"; 
}

behindTheScene.onmouseout=function(){
	this.style.boxShadow='none'; 
}

interior.onmouseover=function(){
	this.style.boxShadow='0 8px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.05)';
	this.style.transition = "all 0.5s"; 
}

interior.onmouseout=function(){
	this.style.boxShadow='none'; 
}