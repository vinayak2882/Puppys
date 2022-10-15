const results =document.getElementById("results");
async function searchpuppys(){
    try{
         let breedname =document.getElementById("puppyName").value;

         let resposne =await fetch(
             `https://dog.ceo/api/breed/${breedname}/images`//
         );

         let data =await resposne.json();
        console.log(data.message,"data")
        
        appendData(data.message)
        // console.log("data",data);
    }catch(e){
        console.log("e:", e);
    }
 }


 const appendData =(el)=>{
    puppyName.innerHTML=null;

    for (var k=0; k<el.length; k++){
        console.log(el[k])

        let div =document.createElement("div")
    let image = document.createElement("img");
    image.src=el[k];
    image.style.width="300px"
    image.style.height="300px"
   
    div.append(image)
   
    results.append(div);

    }
}
