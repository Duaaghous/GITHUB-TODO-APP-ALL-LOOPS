#! /usr/bin/env node
import inquirer from "inquirer";
let todos=[];
let i=true;//jb tk true value ni ajai
while(i){
let list = await inquirer.prompt(
    [{
        name:"todo",//iska name todo rakha hai
        type:"input",//yaha apne iput rkhna hai
        message:"ap apne todo mai kia add krna chahta hai",
    },
    {
        name:"addMore",
        type:"confirm",//mje han ya na mai jawab chye isi lia confirm likha hai
        message:"please here you can enter !",//kia ap enter krna chahty h
       default:"false",

    }]);
todos.push(list.todo);
i = list.addMore && todos.length < 6; // check if the user wants to add more and if the length is less than 6
    
    if (todos.length >= 6) {
        console.log("You have reached the maximum limit of 6 todos.");
        break; // break the loop if the length of todos is 6 or more
    }
console.log(todos);}
// let fruitchat = ["apple", "banana", "mango", "orange", "pineapple"];
// console.log(fruitchat);

// /// now pop method
// fruitchat.pop();
// console.log(fruitchat );

// fruitchat=fruitchat.concat(['melon','KIWI']);
// console.log(fruitchat);

// LOOPS WHILE
// let i = 0;
// while(i<=3){
//     console.log("namaz prhoo");//command
//     console.log(".................................")
//     console.log("ibadat karo\n");
//    i++;//increment the value
// }
// let j=0;//initialize the value 
// while(j<=3){
//     console.log(j);//command for print

//    j++;//increment the value like phle 0 hogi or loop chlta jaiga value
// }
