// Typing Animation


const words = [

"Medical Virtual Assistant",
"Physician Assistant",
"Dental Assistant"

];


let i = 0;
let j = 0;
let currentWord="";
let isDeleting=false;


function type(){

currentWord = words[i];


if(!isDeleting){

document.getElementById("typing").textContent =
currentWord.substring(0,j++);

if(j > currentWord.length){

isDeleting=true;

}

}

else{

document.getElementById("typing").textContent =
currentWord.substring(0,j--);


if(j==0){

isDeleting=false;
i++;


if(i==words.length){

i=0;

}

}

}


setTimeout(type,100);


}


type();







// IMAGE SLIDERS


let images = {


cert:[

"images/certificates/cert1.jpg",

"images/certificates/cert2.jpg",

"images/certificates/cert3.jpg",

"images/certificates/cert4.jpg"

],


feedback:[

"images/feedbacks/feedback1.jpg",

"images/feedbacks/feedback2.jpg"

],



apps:[

"images/apps/app1.png",

"images/apps/app2.png",

"images/apps/app3.png"

]


};





let index={

cert:0,
feedback:0,
apps:0

};





function changeSlide(type,direction){


if(direction==="next"){

index[type]++;

}


else{

index[type]--;

}




if(index[type]>=images[type].length){

index[type]=0;

}



if(index[type]<0){

index[type]=images[type].length-1;

}



document.getElementById(type).src =
images[type][index[type]];


}
