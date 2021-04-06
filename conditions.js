
//for in loop & for of loop
//assignment1

function my_property(){
    
    var information={firsthouse:"Box House", car:"Rolce Royce",land:"Ngong hills",business:"fashion House"};
    var text=" ";
    var x;
    for (x in information){console.log(text +=information[x]+" ")};
   
}my_property();

function my_salary(){
    var amount=[" ksh 1,000,000 ","not <" ,"$ 100,000 " ];
    var text=" ";
    var y;
    for ( y of amount){console.log(text += y + " " )};

}my_salary();

class kioskCalc{
    constructor(priceList={"orange":(30*2),"mango":15,"avovado":40}){
    this.priceList=priceList;
    
}
}

var kioskCalc1 = new kioskCalc()


{for (z in this.priceList ){console.log (kioskCalc())}}
 console.log(kioskCalc1.priceList);


