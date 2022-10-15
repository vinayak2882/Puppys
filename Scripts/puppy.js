var displayimg = document.getElementById("fetch_results")
        
var namepuppy = localStorage.getItem("puppydd")
// console.log(display)


async function fetchdata(){
try{
 


 let resposne =await fetch(
     `https://dog.ceo/api/breed/${namepuppy}/images/`
 );

let data =await resposne.json();
// console.log(data.message,"data")

appendData(data.message)
// console.log("data",data);
}catch(e){
console.log("e:", e);
}
}
fetchdata()

function appendData(img){
    img.forEach(function(el) {
        let div =document.createElement("div")
        
        let image = document.createElement("img");
        image.src=el;
        image.style.width="300px"
        image.style.height="300px"
        div.append(image)
   
    displayimg.append(div);
    });
}






