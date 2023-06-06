function calculateInclusivePrice(exclusivePrice,taxRate){

const inclusivePrice = exclusivePrice + (exclusivePrice * taxRate);
return inclusivePrice;

}
console.log (calculateInclusivePrice( 100 ,0.16 ));