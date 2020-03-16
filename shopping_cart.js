let productInCart=document.getElementById('item_in_cart');
let deleteOption=document.getElementById('delete'); 
console.log(productInCart);

productInCart.onmouseover=function(){
	//let 'delete' appear
	deleteOption.style.display='inline-block';


}

productInCart.onmouseout=function(){
	deleteOption.style.display='none';
}