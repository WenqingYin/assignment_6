
//get quantity and glazing as array 
var quantity=document.getElementsByName('quantity');
var glazing=document.getElementsByName('glazing');


//make item an object 
function itemProperty(name,quantity,glazing,price){
	this.name=name;
	this.quantity=quantity; 
	this.glazing=glazing;
	this.price=price; 
}

//when click on one item in the menu, make it an instance of itemProperty object 
function createItem(){
	var name="Original Cinnamon Roll";
	var price=3.28; 
	let itemOne=new itemProperty(name,0,'None',price); 
	return item1; 
}

let itemOne=new itemProperty("Original Cinnamon Roll",0,'None',3.28);

//check which button of quantity is cickd, update the data of item
function checkQuantity(item){
	if(item.checked){
		itemOne.quantity=item.value;
	}
	console.log(itemOne.quantity); 
	//update the value in the shopping cart page 
	//document.getElementById("quantity-of-item").innerHTML="Quantity: "+item.value; 
}

//check which button of glazing is cickd, update the data of item
function checkGlazing(item){
	if (item.checked){
		itemOne.glazing=item.value;
	}
	console.log(itemOne.glazing); 
}

function subtotal(item){
	var price=item.price;
	var quantity=item.quantity;
	var subtotal=price*quantity; 
	return subtotal 
}
//update the subtotal
function subtotalUpdate(){
	var num=subtotal(itemOne);
	document.querySelector('#total_price').innerHTML="Subtotal: $"+num;
	//document.querySelector('#total_amount').innerHTML="Total:"+num;
	console.log(itemOne.quantity);
}

function displaySubtotal(){
	document.querySelector('#subtotal-of-item').style.display=inline-block;
}

//when clicking add to cart, update the items in the shopping cart 

addItem()
function addItem(){
	console.log('yes');
	console.log(document.querySelector(".quantity-of-item"));
	console.log(document.getElementsByClassName("quantity"));
	console.log(itemOne[quantity]);
	//first item
	//update subtotal, total, quantity, glazing 
	document.querySelector(".quantity-of-item").innerHTML="Quantity: "+itemOne.quantity; 
	document.querySelector(".subtotal-of-item").innerHTML="Subtotal: "+subtotal(itemOne);  
	document.querySelector(".flavor-of-item").innerHTML=itemOne.glazing;   
	//update total
	document.querySelector("#totalAmount").innerHTML="Total: "+subtotal(itemOne);
}


