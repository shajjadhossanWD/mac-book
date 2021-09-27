function newTotalPrice(price, idName){
    const productPrice = document.getElementById(idName).innerText = price;
    let productNum = parseFloat(productPrice);

    calculateTotal();
}


// spicific product price ............................................
function getProductPrice(productName){
    const productValue = document.getElementById(productName);
    const productTotal = parseFloat(productValue.innerText);
    return productTotal;
}


//  inputfild discount calculate 
 function getDiscount(inputId){
     const discountAmount = document.getElementById(inputId);
     const discountValue = discountAmount.value;
     discountAmount.value = '';
     return discountValue;
 }


// calcutaion total amount ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
function calculateTotal(){
    const memoryTotal = getProductPrice('memory-cost') + 1299 ;
    const storageTotal = getProductPrice('storage-cost') ;
    const deliveryCharge = getProductPrice('delivery-charge') ;
    const inputValue = getDiscount('input-fild');
    const subtotal = memoryTotal + storageTotal + deliveryCharge;

    // subtotal amount ..........................
    document.getElementById('total-cost').innerText = subtotal;
    //final total amount ..........................
    document.getElementById('final-total-price').innerText = subtotal;

    // final discount amount......................................
     if(inputValue =='stevekaku'){
        const discount = subtotal * .20;
        const finalTotalAmount = subtotal - discount;
        document.getElementById('final-total-price').innerText = finalTotalAmount;
     }
     else{
       console.log("sory you can't get this discount");
     }
    
}

// --------------------------------------------------------
//               memory event handlar button
//  ------------------------------------------------------------
document.getElementById('memory-btn-1').addEventListener('click',function(){
  newTotalPrice(0,"memory-cost");
})
document.getElementById('memory-btn-2').addEventListener('click',function(){
    newTotalPrice(180, "memory-cost");
})



// --------------------------------------------------------
//               storage event handlar button
//  ------------------------------------------------------------
document.getElementById('storage-btn-1').addEventListener('click',function(){
    newTotalPrice(0, "storage-cost");
})
document.getElementById('storage-btn-2').addEventListener('click',function(){
    newTotalPrice(100, "storage-cost");
})
document.getElementById('storage-btn-3').addEventListener('click',function(){
    newTotalPrice(180, "storage-cost"); 
})



// --------------------------------------------------------
//               delivery charge event handlar button
//  ------------------------------------------------------------
document.getElementById('delivery-btn-1').addEventListener('click',function(){
    newTotalPrice(0, "delivery-charge");
})
document.getElementById('delivery-btn-2').addEventListener('click',function(){
    newTotalPrice(20, "delivery-charge");
})


// --------------------------------------------------------
//                discount event handlar button
//  ------------------------------------------------------------
 document.getElementById('get-discount').addEventListener('click', function(){      
      calculateTotal ();
 })




