const results_div =document.getElementById("fetch_results");
async function fetchData(){
    try{
         

         let resposne =await fetch(
             `https://dog.ceo/api/breeds/list`
         );
        

        let data =await resposne.json();
        console.log(data,"data")
       
        appendData(data.message)
       
    }catch(e){
        console.log("err:", e);
    }
 }
 fetchData()

const appendData =(data)=>{
   
   
 

    results_div.innerHTML=null;
data.map((el) => {
    console.log(el,'el')

    let div=document.createElement("div")


    let name = document.createElement("h1");
    name.innerText=el
    div.append(name)

    div.onclick = ()=>{
        console.log(el)
        localStorage.setItem("puppydd",el)
        window.location.href="puppy.html"
    }
   
results_div.append(div);

});

};