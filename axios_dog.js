let btn= document.querySelector("button");

btn.addEventListener("click", async ()=>{
    let gi= await getImage();
    let im= document.querySelector("#Result");
    im.setAttribute("src", gi);
})

let url="https://dog.ceo/api/breeds/image/random";

async function getImage(){
    try{
        let di= await axios.get(url);
        return di.data.message;
    }
    catch(e){
        console.log("ERR");
        return "/";
    }
}