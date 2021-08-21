// price handling
function upDateProductPrice(btn,productTotal,cost){
         const productBtn = document.getElementById(btn);
        const productAmount = document.getElementById(productTotal);
        productBtn.addEventListener('click',function(){
            productAmount.innerText = cost;
            updateTotal()
        })
}   
//8 gb memory cost
upDateProductPrice('8gb-memory-button','memory-price',0);

//16 bg memory cost
upDateProductPrice('16gb-memory-button','memory-price',180);

//256gb ssd storage
upDateProductPrice('256gb-ssd-button','storage-price',0);

//512gb ssd storage
upDateProductPrice('512gb-ssd-button','storage-price',100);

//1TB ssd storage
upDateProductPrice('1tb-ssd-button','storage-price',180);

// free delivery
upDateProductPrice('delivery-free-button','delivery-cost',0)
// delivery cost
upDateProductPrice('delivery-charge-button','delivery-cost',20)

//all product prices
const extraStorageCost = document.getElementById('storage-price')
const extraMemoryCost = document.getElementById('memory-price')
const extraDeliveryCost = document.getElementById('delivery-cost')

const finalTotal = document.getElementById('after-discount')
//calculate total price
function updateTotal(){
        const memoryCost = Number(extraMemoryCost.innerText)
        const storageCost = Number(extraStorageCost.innerText)
        const deliveryCost = Number(extraDeliveryCost.innerText)
        const bestPrice = document.getElementById('best-price')
        const bestPriceNUmber = Number(bestPrice.innerText)
        const totalPrice = document.getElementById('total-price');
        const allProductTotalPrice = memoryCost+deliveryCost+storageCost +bestPriceNUmber;
        totalPrice.innerText = allProductTotalPrice;   
        finalTotal.innerText = allProductTotalPrice; 
        const finalTotalNumber =Number(finalTotal.innerText);;
        // return finalTotalNumber; 
}


// handle promocode
const promoCodeInput = document.getElementById("promo-code-input");
const promoButton = document.getElementById('promo-code-btn')
const totalPrice = document.getElementById('total-price');
promoButton.addEventListener('click', function(){
    const discountAmount = parseInt(finalTotal.innerText) * .20;
    const code = 'stevekaku';
    if(promoCodeInput.value == code){
        finalTotal.innerText = parseInt(totalPrice.innerText) - discountAmount;
        promoButton.setAttribute('disabled', true);
    }
    promoCodeInput.value = "";
});
