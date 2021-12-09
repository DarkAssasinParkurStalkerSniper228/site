let url="https://thatcopy.pw/catapi/restId/";
document.querySelector("button").onclick=()=>{
    let k=document.querySelector("input").value;
    if(k>58){document.querySelector("#number").innerHTML=`<h1 id="error">Error 404</h1`}else{
    document.querySelector("#number").style.visibility="hidden";
    for(let i=0;i<k;i++){
        let j=i+1;
        while(j>5){j-=5;}
        let xhr=new XMLHttpRequest();
        xhr.responseType="json";
        xhr.open("GET", url+(i+1));
        xhr.send();
        xhr.onload=function(){
            let result=xhr.response;
            document.querySelector("#s"+j).innerHTML+=
            `<div id='image'><label>#${result['id']}</label><img src="${result['webpurl']}"></div>`;
        }
    }
}
}
    
