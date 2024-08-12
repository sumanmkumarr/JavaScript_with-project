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
let i=document.getElementById("click");// by using this we can perform operation on element which comes under id=click
console.log(i);


//2.class
let c=document.getElementsByClassName("container"); // using this this we can perform operation on element which comes under class=container
console.log(c);

//c[0].style.background="black";// here we are changing background by accessing class

// we can add new class also
c[0].classList.add("qwert");


// we can remove class also
c[0].classList.remove("qwert");


// we can access inner text and inner html also of class and id
console.log(c[0].innerHTML);
console.log(c[0].innerText);


// tag
ta=document.getElementsByTagName("button");// by using this we can perform operation on tag name also
console.log(ta);
