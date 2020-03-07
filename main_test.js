//when click on add to cart, add to the instance of the object 
//create a javascript object constructor 

var currQuantity;
var currGlazing; 
var subtotal; 
var total=[]; 
var quantity=document.getElementsByName('quantity');
var glazing=document.getElementsByName('glazing');
var emptyCart; 

//object constructor 
function items(name,quantity,subtotal,glazing){
	this.name=name; 
	this.quantity=quantity; 
	this.subtotal=subtotal;
	this.glazing=glazing; 
}

let itemOne=items("Original Cinnamon Rolls",0,0,"None"); 

//check which quantity is selected
//ref: https://stackoverflow.com/questions/9618504/how-to-get-the-selected-radio-button-s-value
for (var i=0, length=quantity.length; i<length; i++){
	console.log('hi');
	console.log(quantity[i])
	//console.log(quantity[i].checked)
	if (quantity[i].checked){
		//if checked, store it in the currQuantity, change the subtotal
		console.log('hi again');
		itemOne.quantity=quantity[i].value
		itemOne.subtotal="$"+itemOne.quantity*3.28; 
	}
}

console.log(currQuantity);
console.log(subtotal);


//check which glazing is selected 
for (var i=0, length=glazing.length; i<length; i++){
	console.log('hi');
	console.log(glazing[i])
	//console.log(quantity[i].checked)
	if (glazing[i].checked){
		//if checked, store it in the currQuantity, change the subtotal
		console.log('yay');
		itemOne.glazing=glazing[i].value
	}
}

console.log(currGlazing);


//add items to the shopping cart when click subtotal
//change the value of the last child, append another child and set the display as none
addItem()
function addItem(){
	//add price to total 
	total.push(subtotal);

	//check if it is the first item
	//if it is, change the value within the dive 
	var childNum=document.getElementById('allItems').childElementCount; 
	if (childNum==1||emptyCart==true){
		console.log("yes");
		var temp=document.querySelector('.item_in_cart');
		temp.style.display='block'; 
		//change the values inside 
		console.log(itemOne.quantity);
		document.querySelector(".quantity").innerHTML="Quantity: "+itemOne.quantity; 
		document.querySelector(".subtotal").innerHTML="Subtotal: "+itemOne.subtotal;  
		document.querySelector(".flavor").innerHTML=itemOne.glazing;   
	} 

	//if not the first item. 
	else {
		//clone the div, append it to the <main>
		//ref: https://www.w3schools.com/jsref/met_node_clonenode.asp
		var itemBlock=document.getElementsByClassName('item'); 
		var cln=itemBlock.cloneNode(true); 
		document.getElementById('allItems').appendChild(cln);
	}
}


/* 

console.log(document.getElementById('allItems').childElementCount)
//add to cart button 
*/ 
console.log(getElementById("add_to_cart"));
function getElementById(id){
	var temp=document.getElementById(id);
	return temp; 
}

document.querySelector('#add-to-cart').onclick=function(){
	addItem();
	emptyCart=false; 
}









