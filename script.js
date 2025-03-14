
function clickme() {
   let first = document.getElementById('first').value 
     let second = document.getElementById('second').value
     var soLve = Math.round(Math.random()*100)
     if(first == '' || second == '')
     {
        danger.style.display = 'block'
        setTimeout(() => {
         danger.style.display='none'
},5000)
}
else if(first == 'Ayodeji' || second == 'Mariam')
{
   slide1.style.display = 'none'
   slide2.style.display = 'block'
   words.style.display = 'block'
   show.innerHTML += '100%'
   words.innerHTML += `Congratulation ${second} the two of you are inlove with each other, Kindly fix a date for Marriage. ❤`
}

 else if (soLve >=0 && soLve <=39 ){
   slide1.style.display = 'none'
    words.style.display = 'block'
   slide2.style.display = 'block'
   words.innerHTML = `Opps ${second}, you need to find another lover ${first} is a chronic cheat 💔`
   show.innerHTML += `${soLve}%`
   
}
else if (soLve >=40 && soLve <=69 ){
   slide1.style.display = 'none'
   words.style.display = 'block'
   slide2.style.display = 'block'
   words.innerHTML = `Congratulation you are compatible but, ${second} be careful of ${first}`
   show.innerHTML += `${soLve}%`
   
}
else if (soLve >=70 && soLve <=99 ){
   slide1.style.display = 'none'
   words.style.display = 'block'
   slide2.style.display = 'block'
   words.innerHTML = `${second} & ${first} are highly compatible,Kindly fix a date`
   show.innerHTML += `${soLve}%`
   
}
else{
   console.log("you no get name");
}

    
   
   
}