//menu: click on one item, pops up according product detail page 

//when the product is clicked, update the product detail page 
var productList=document.getElementsByClassName('view_details');
//console.log(productList);
for (var i=0; i<productList.length; i++){
	var product=productList[i];
	//console.log(product);
	console.log(product);
	product.addEventListener('click',updateProductDetail);
}

localStorage.setItem('buttonClicked',false);
console.log(localStorage);

//update product detail page 
function updateProductDetail(event){
	var productDetailPage=document.getElementById('product_detail_page');
	productDetailPage.style.display='block';
	var button=event.target
	var selectedProduct=button.parentElement;

	//update the information on the floating window 
	console.log(selectedProduct);
	var newName=selectedProduct.getElementsByClassName('name')[0].innerHTML;
	document.getElementsByClassName('product_title')[0].innerHTML=newName+' Cinnamon Roll';
	var newImageSrc=selectedProduct.getElementsByClassName('pic')[0].src; 
	document.getElementById('detail_image').src=newImageSrc; 
	var newPrice=selectedProduct.getElementsByClassName('price')[0].innerHTML;
	document.getElementsByClassName('pricing')[0].innerHTML=newPrice+'/ea'

	//store the name and picture in local storage
	localStorage.setItem('currName',newName);
	localStorage.setItem('currPrice',newPrice);
	localStorage.setItem('currImageSrc',newImageSrc);

	//check which glazing is selected; add event listner to all of the options 
	var glazingList=document.getElementsByClassName('selected_glazing');
	for (var i=0; i<glazingList.length; i++){
		var glazing=glazingList[i].getElementsByTagName('input')[0];
		//console.log(glazing);
		glazing.addEventListener('click',updateChoice);
		//console.log(glazing);
	}

	//check which quantity is selected; add event listner to all of the options 
	var quantityList=document.getElementsByClassName('selected_quantity');
	for (var i=0; i<quantityList.length; i++){
		var quantity=quantityList[i].getElementsByTagName('input')[0];
		quantity.addEventListener('click',updateChoice); 
		//updateSubtotal
	}
	
}

function updateChoice(event){
	//console.log(newPrice);
	var choice=event.target; 
	var valueOfChoice=choice.value;
	console.log(valueOfChoice, typeof valueOfChoice);
	console.log(parseInt(valueOfChoice))
	var typeOfInput=choice.name; 
	if (typeOfInput=='glazing'){
		//store in local storage
		localStorage.setItem('currGlazing',valueOfChoice);
		//console.log(localStorage);
	}
	if (typeOfInput=='quantity'){
		//update subtotal 
		var quantity=parseInt(choice.value);
		var priceString=document.getElementsByClassName('pricing')[0].innerHTML;
		console.log(priceString);
		var price=parseFloat(priceString.slice(1,5))
		//console.log(price);
		var newSubtotal=quantity*price;
		console.log(newSubtotal);
		//change the subtotal on display 
		document.getElementById('subtotal').children[0].innerHTML='Subtotal: $'+newSubtotal;
		//store in local storage
		localStorage.setItem('currQuantity',valueOfChoice);
		console.log(localStorage);
		localStorage.setItem('currSubtotal',newSubtotal);
	}

	//add event listener to the add to cart button 
	var addToCart=document.getElementById('add_to_cart');
	addToCart.addEventListener('click', storeCurrProduct());
}


//when click add to cart button in the product deetail page, store it in the local storage 
function storeCurrProduct(){
	//check if the users selected both glazing and quantity 

	var glazing=document.getElementsByName('glazing');
	var quantity=document.getElementsByName('quantity');
	var glazingChecked=false;
	var quantityChecked=false;
	for (i=0; i<glazing.length; i++){
		if (glazing[i].checked){
			console.log('yes glazing')
			glazingChecked=true;
		}
	}
	for (i=0; i<quantity.length; i++){
		if (quantity[i].checked){
			console.log('yes quantity')
			quantityChecked=true;
		}
	}

	//when 'add to cart' button is clicked 
	if (glazingChecked==true && quantityChecked==true){
		localStorage.setItem('buttonClicked',true);
	}
	/*
	else {
		alert("Hello! I am an alert box!!");
	}
	//console.log(localStorage);
	*/
}

//localStorage.clear();

