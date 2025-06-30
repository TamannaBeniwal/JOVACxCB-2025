//event delegation in javascript(it is a technique where you attach event listner only on a single parent,use to handle its child also )
//why vent delegation? 1.cleaner code 2.better performance 

const menuItem = document.getElementById("menuItems");
menuItem.addEventListener("click",(event)=)