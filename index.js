// 1).ways to print javascript 
//console.log("hello world");
// alert("me");
//document.write("this is document write")// it is for write on document

// 2).javascript console api(application programing interface)
// console.log("hello world", 8 + 4, "this is another log");
// console.warn('this is warning');
// console.error('this is an error');


//3).javascript variable
// variable- container which store the data value
// var is datatype 
// var number1=9;
// var number2=8;
// console.log(number1+number2);


// 4) data type in javascript
//nums
// var num1=7;


// //string
// var str1="werwt";


// //object-it is key value pair in javascript
// var marks={
//     suman:99,
//     aman:89,
//     siki:99
// };
// console.log(marks);

//booleans
// var a=true;
// var b=false;
// console.log(a,b);


// undefined-when we not store any value in declared varible then it result undefined
// var und;
// console.log(und);


// null
// var n=null;
// console.log(n);


/*At a very high level ,there are two types of data type 
1)primitive data type - Int,string,boolean,undefined,null,symbol
2)reference data type - array,object
*/


//array
// var arr=[1,3,6,3,7,"hvdfedfe",7,"suman"];
// console.log(arr);



// operator in javascript
// arithmetic - +,-,*,%
// var a=100;
// var b=40;
// console.log("a+b is ",a+b);

//assignment operator
// var q=8;
// var w=q;
// w +=2//w=w+2
// w -=2//w=w-2
// w *=2//w=w*2
// console.log(w);


// comparision operator - >,>=,<,<=,==
// var z=5;
// var r=9;
// console.log(z==r)// it will print false
// console.log(z<r)// it will print true

// logical operator - &&(and),||(or),!(not)
// console.log(true && true);
// console.log(false || false);
// console.log(!false);


// function
// DRY = do not repeat yourself
// function avg(a,b)
// {
//     return (a+b)/2;
// }
// c1=avg(2,7.9);
// c2=avg(9,4);
// console.log(c1,c2);


// conditional - if else,if else ladder
// var age=8;
// if(age>10)
// {
//     console.log("not kid");
// }
// else{
//     console.log("kid");
// }

// var f=10;
// if(f>20)
// {
//     console.log("twenty");
// }
// else if(f>15)
// {
//     console.log("fifteen");
// }
// else{
//     console.log("less");
// }



// for loop 
// var arr=[3,4,55,4,2]
// for(var i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }

// iterate using forEach
// arr.forEach(function(i)
// {
//     console.log(i);
// })



// const - it is constant
// const a=0;


// let - we should use let insted of var because it is a good practice

// while loop
// let arr1=[2,6,8,9,4,5];
// let i=0;
// while(i<arr1.length)
// {
//     console.log(arr1[i]);
//     i++;
// }



// do while loop
// let arr2=[9,6,4,8,2];
// let i=0;
// do
// {
//    console.log(arr2[i]);
//    i++
// }while(i<arr2.length)


// break(it break the loop and exit from loop) and conitue(it leave the particular condition then continue)

// let arr3=[5,7,3,null,true];
// for(let i=0;i<arr3.length;i++)// it will print only 5,7
// {
//     if(i==2)
//     {
//         break;
//     }
//     console.log(arr3[i]);
// }

// for(let i=0;i<arr3.length;i++)// it will print 5,7,null,true
// {
//     if(i==2)
//     {
//         continue;
//     }
//     console.log(arr3[i]);
// }



// array method
// let arr4=[5,8,"suman",true];
// console.log(arr4.length);//it will print length of array
// arr4.pop();// it will remove or delete the last element
// arr4.push("aman");// it will push aman at last
// arr4.shift();// it will remove or delete the first element
// arr4.unshift(9);// it will add 9 at first
// console.log(arr4);



// string method
// let str="my name is suman kumar kumar";
// console.log(str.length);// it will print length of string
// console.log(str.indexOf("suman"));// it will print index of suman
// console.log(str.indexOf("kumar"));// it will print index of first kumar word
// console.log(str.lastIndexOf("kumar"));// it will print index of last kumar word

// console.log(str.slice(3,6));// it will print index 2,3,4 element

// d=str.replace("suman","aman");// it will replace suman by aman,(replace is used for replace 1st occurance only)
// console.log(d,str);


// date
// let mydate=new Date();
// console.log(mydate);// it will give date and day
// console.log(mydate.getTime());// it will give date in second
// console.log(mydate.getFullYear());// it will give year
// console.log(mydate.getDay());// it will give day 0-sun,1-mon,2-tue,....
// console.log(mydate.getMinutes());//it will give minute
// console.log(mydate.getHours());//it will give hour


// DOM (DOCUMENT OBJECT MODEL) manipulation
//1.id
// let i=document.getElementById("click");// by using this we can perform operation on element which comes under id=click
// console.log(i);


// //2.class
// let c=document.getElementsByClassName("container"); // using this this we can perform operation on element which comes under class=container
// console.log(c);

// //c[0].style.background="black";// here we are changing background by accessing class

// // we can add new class also
// c[0].classList.add("qwert");


// // we can remove class also
// c[0].classList.remove("qwert");


// // we can access inner text and inner html also of class and id
// console.log(c[0].innerHTML);
// console.log(c[0].innerText);


// // tag
// ta=document.getElementsByTagName("button");// by using this we can perform operation on tag name also
// console.log(ta);

// // we can create element also with help of javascript
// created=document.createElement('p');// p is paragraph
// created.innerText="this is another paragraph";
// ta[0].appendChild(created);

// created2=document.createElement("b");// b is bold
// created2.innerText="this is bold";
// ta[0].replaceChild(created2,created);// it replace 


// selecting using query
// let sel=document.querySelector('.container');// it will return first container class
// console.log(sel);

// let sel2=document.querySelectorAll('.container');//it will return all the class which name is container
// console.log(sel2);


// event in javascript - onclick,onload,...,
function clicked()
{
    console.log("click is done");
}

// window.onload=function()
// {
//     console.log("reload is done");
// }

// first.addEventListener("click",function()// first is id which we defined in index.html page,instead of that we can use class name also like container,...
// // when we click on first element then following function is called
// {
//     console.log("clicked on container ");
// })


// first.addEventListener("mouseover",function() // when mouse will go to first element area then it will call function
// {
//     console.log("mouse on first id")
// })

// first.addEventListener("mouseout",function()// when mouse will go outside the first element then it will call function
// {
//     console.log("mouse is outside");
// })


// first.addEventListener("mouseup",function()
// {
//     console.log("mouse is up");
// })

// first.addEventListener("mousedown",function()
// {
//     console.log("mouse is down");
// })



// while call event we can modify the data also like below 
// let prev=document.querySelectorAll(".container")[1].innerHTML;
// first.addEventListener("mouseup",function()
// {
//     document.querySelectorAll(".container")[1].innerHTML=prev;
//     console.log("mouse is up");
// })

// first.addEventListener("mousedown",function()
// {
//     document.querySelectorAll(".container")[1].innerHTML= "<b> we have clicked </b>";
//     console.log("mouse is down");
// })

// arrow function
// function summ(a,b)
// {
//     return a+b;
// }
// console.log(summ(9,7));

// // instead of using function we can use following thing also to declare or to write function 
// summ1=(a,b)=>{
//     return a+b;
// }
// console.log(summ1(8,4));



// setTimeout and setInterval
// logkaro=()=>
// {
//     document.querySelectorAll('.container')[0].innerHTML=" <p> this is paragraph of setTimeout </p>"
//     console.log("set timeout is called");
// }
// q=setTimeout(logkaro,2000);// it will call function logkaro after 2 sec
// // clearTimeout is used for cancel setTimeout
// clearTimeout(q);



// logkaro2=()=>
// {
//     document.querySelectorAll('.container')[1].innerHTML="<b> this is bold of setInterval </b>";
//     console.log("set interval is called");
// }
// w=setInterval(logkaro2,3000);// it will call function logkaro2 after every 3 sec
// clearInterval(w);


// localStorage
// localStorage.setItem('name','suman');
// localStorage 
// localStorage.getItem('name');
// localStorage.removeItem("name");// it used for remove the item
// localStorage.clear();// it used for clear all local stored data




//JSON - javascript object notation  // it is used for transmitting data in web application
// JSON accept double quote not single quote
obj={"name":"suman","roll":283};// if we want to convert this object into JSON format then we can not use single quote,we have to use in this case only double quote

// convert obj to JSON
jso=JSON.stringify(obj);// it is used to convert object to JSON
console.log(jso);
console.log(typeof jso);// typeof is used to know the type of variable,that is ,it is int,object,string,....

// parse is also used for conversion
parsed=JSON.parse(`{"name":"suman","roll":283}`);
console.log(typeof parsed);






