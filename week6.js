/*Write a program Kiosk( ) that will allow you to add a fruit and retrieve a list of fruits to/from a kiosk using setter and getter methods.
For instance: 
var kiosk = Kiosk( )
kiosk.setFruit(“mango”)
kiosk.getFruits() will return a list of fruits  [“mango”]  */
const kiosk={
  Fruits="Mango",
  get getFruits(){
    return this.Fruits;},
    set changeFruits(newFruits){
      this.Fruits=newFruits;
    },
  };
  console.log(kiosk.getFruits);
  kiosk.newFruits='Apple';
  console.log(kiosk.newFruits);




