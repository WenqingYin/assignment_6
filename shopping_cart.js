//checkout button: clear the items
function clearItems(){
	localStorage.clear();
	console.log(localStorage);
	var temp=JSON.parse(localStorage.getItem('cartItems'));
	console.log(temp);
	displayItems(temp);
}

//function constructor for the items in cart 
function itemsInCart(name,imageSrc,quantity,glazing,subtotal){
	this.name=name;
	this.imageSrc=imageSrc;
	this.quantity=quantity;
	this.glazing=glazing;
	this.subtotal=subtotal; 
}


//add objects to the list 

//console.log(JSON.parse(localStorage.getItem('cartItems')));

var addToCart=localStorage.getItem('buttonClicked');

var currAllItems=JSON.parse(localStorage.getItem('cartItems'));
displayItems(currAllItems);

if (addToCart=='true'){
	//declare variables 
	var itemList=JSON.parse(localStorage.getItem('cartItems'));

	var addedName=localStorage.getItem('currName');
	var addedImageSrc=localStorage.getItem('currImageSrc');
	var addedQuantity=parseInt(localStorage.getItem('currQuantity'));
	var addedGlazing=localStorage.getItem('currGlazing');
	var addedSubtotal=parseInt(localStorage.getItem('currSubtotal')); 
	var addedPrice=localStorage.getItem('currPrice'); 

	//console.log(localStorage);
	//console.log(addedImageSrc);

	//loop all items in the itemList, find if this item has already existed in the cart 
	var alreadyAdded=false; 

	//if there is no object in the cart 
	if (itemList==null){
		var tempList=[];
		//set the first object
		var tempItem=new itemsInCart(addedName,addedImageSrc,addedQuantity,addedGlazing,addedSubtotal);
		tempList.push(tempItem);
		//update storage
		localStorage.setItem("cartItems",JSON.stringify(tempList));
		itemList=tempList;
		console.log(itemList);
		displayItems(itemList);
	}

	else {

		for (i=0; i<itemList.length; i++){
			if (itemList[i].name==addedName&&itemList[i].glazing==addedGlazing){
				//update the properties of the object 
				itemList[i].quantity+=addedQuantity; 
				itemList[i].subtotal+=addedSubtotal;
				//update the local storage 
				localStorage.setItem("cartItems",JSON.stringify(itemList));
				alreadyAdded=true; 
				break; 
			}
		}

		if (alreadyAdded==false){
		//add this item to the list 
			var tempItem=new itemsInCart(addedName,addedImageSrc,addedQuantity,addedGlazing,addedSubtotal);
			itemList.push(tempItem); 
			//console.log(itemList);
			//console.log(itemList.length);
			//update the local storage 
			localStorage.setItem("cartItems",JSON.stringify(itemList));
		}
		displayItems(itemList);
	}
	localStorage.setItem('buttonClicked',false);
}


//according to the item list in JSON storage, use loop to display all of the items on the page 
function displayItems(itemList){
	//first delete all previous items in the cart 
	var cartProducts=document.getElementById('allItems');
	cartProducts.innerHTML='';

	var total=0; 

	if (itemList!==null){
		for (i=0; i<itemList.length; i++){
			var newName=itemList[i].name; 
			var newImageSrc=itemList[i].imageSrc;
			var newGlazing=itemList[i].glazing;
			var newSubtotal=itemList[i].subtotal; 
			var newQuantity=itemList[i].quantity;
			//add a div to the shopping cart page 
			var newProduct=document.createElement('div');
			newProduct.classList.add('item_in_cart');
			var insideNewProduct=`
						<div class='image'>
							<img class="pic-of-item" src="${newImageSrc}" width=100 height=65>
						</div>
						<div class='name-of-item'>
							<p>${newName}</p>
						</div>
						<div class="quantity-of-item">
							<p>Quantity: ${newQuantity}</p>
						</div>
						<div class="delete">
							<p>Delete</p>
						</div>
						<div class="subtotal-of-item">
							<p>Subtotal: $${newSubtotal}</p>
						</div>
						<div class="flavor-of-item">
							<p>${newGlazing}</p>
						</div>`
			newProduct.innerHTML=insideNewProduct; 
			cartProducts.append(newProduct); 
			total+=newSubtotal;
			console.log(total);
		}
		var currAllItems=document.getElementsByClassName('item_in_cart');
	}

	//update total 
	var totalAmount=document.getElementById('total_amount');
	totalAmount.innerText='Total: $'+total;

	//delete the object 
	var deleteBtn=document.getElementsByClassName('delete'); 
	console.log(deleteBtn);
	for (i=0; i<deleteBtn.length; i++){
		console.log('in the loop');
		console.log(deleteBtn[i]);
		var temp=deleteBtn[i];
		temp.addEventListener('click',deleteItem);
	}

}


function deleteItem(event){
	var item=event.target.parentElement.parentElement;
	var deleteName=item.getElementsByClassName('name-of-item')[0].innerText; 
	var deleteGlazing=item.getElementsByClassName('flavor-of-item')[0].innerText;
	console.log(item);
	console.log(deleteName);
	console.log(deleteGlazing);
	var currStorageItems=JSON.parse(localStorage.getItem('cartItems'));
	console.log(currStorageItems);
	//loop through the items, find the same product, and delete it 
	for (i=0; i<currStorageItems.length; i++){
		var currItem=currStorageItems[i];
		if (currItem.name==deleteName && currItem.glazing==deleteGlazing){
			currStorageItems.splice(i, 1);
			console.log(currStorageItems);
		}
	}
	//update storage 
	localStorage.setItem("cartItems",JSON.stringify(currStorageItems));
	displayItems(currStorageItems);
}



// mouseover the item, display the delete
function displayDelete(currAllItems){
	console.log(currAllItems);
	for (i=0; i<currAllItems.length; i++){
		var currItem=currAllItems[i];
		console.log(currItem);
		var deleteBtn=currItem.getEelementsByClassName('delete')[0];
		deleteBtn.style.display='inline-block';
	}

}

