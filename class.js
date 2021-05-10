 class Mkulima{
constructor(farms,products,vendors,orders){
    this.farms=[];
    this.products=[];
    this.orders=[];
    this.vendors=[];

console.log();
}
addFarm(farmId,name,farmer ,phone,address){
    let mkulimafarm={farmId: farmId, jina: name,  mkulimaa: farmer, nambari: phone, sanduku: address}
    this.farms.push(mkulimafarm);
    
}
removeFarm(farmId){
    let mkulimaRemove=this.farms.find(mkulimaRemove=>mkulimaRemove.farmId=farmId)
 
 return this.farms[mkulimaRemove]


}
updateFarm(farmId,name,phone,farmer,adress){
    let mkulimaUpdate=this.farms.find(mkulimaUpdate=>mkulimaUpdate.farmer=="shambashape");
   mkulimaUpdate={farmId:farmId,name:name,farmer:farmer,phone:phone,adress:adress}
    return this.farms.push(mkulimaUpdate)

}
addProduct(productId,name,price){
let product={
    productId:productId,
    name:name,
    price:price
}
return this.products.push(product)
}
getProduct(productId){
    for(var i=0;i<this.product.length;i++)
    {let product=this.products[i];
    if(this.product.productId===productId){
        return product;
    }
}

}
removeProduct(productId){
    let product=this.getProduct(productId)
    let index=this.product.indexOf(product)
    this.products.splice(index,1)
}
updateProduct(productId,name,price){
    let newProduct=this.products.find(newProduct=>newProduct.name=="Cabbage")
    newProduct={
        productId:productId,
        name:name,
        price:price
    }
return newProduct
    
}
printProduct(){
    for(items of this.products){
        console.log(items.name+","+items.price)
    }
}
calculateOrderCost(productId,quantity){
    let cost=this.products.find(cost=>cost.productId==productId)
    return cost.price*quantity

}
}
let order=new Mkulima([{
    farmId:"2323232",
    farmer:"dee farm",
    phone:"0998789",
    adress:"kijabe 1111",


}],[{
    vendorsId:"jay",
    store:"J STORE",
    phone:"076542"


}],[{
    productId:"5677Y",
    name:"onions",
    price:"99999"}]);
//set Nfarms(newNfarms)
//{console.log("me");
//this.farms=newNfarms}
 //}
//let f1 = new Mkulima( "happy","fruits","ltd",22);
//console.log(f1);

//setter is called
//f1.Nfarms = 201;
//console.log(f1);//
 let mkulima1 =new Mkulima()
mkulima1.addFarm(1011,"Jarenga farm","jarenga","0722232144","234Nakuru")
mkulima1.addFarm(2,"Diana farm","Diana","0713357064","244 Nairobi")
console.log(mkulima1.farms)
console.log(mkulima1.removeFarm(mkulima1))

console.log(mkulima1.farms)
console.log(mkulima1.updateFarm('cook'))
console.log(mkulima1.addProducts("cook"))