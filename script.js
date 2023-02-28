//your code here
let pageNumber = 1;
let dataDiv = document.getElementById('data')
let showPage = document.getElementById("showPageNumber")
async function fetchData(pageNum){
    let response = await fetch(`https://api.github.com/repositories/1296269/issues?page=${pageNum}&per_page=5`)
    if(response){
        let data = await response.json()
        data.map((value)=>{
            dataDiv.innerHTML +=`<li>${value.title}</li>` 
        })
    }
} 
function nextPage(){
    dataDiv.innerHTML = ""
    document.getElementById("load_prev").disabled = false
    pageNumber++;
    showPage.innerText = pageNumber
    fetchData(pageNumber);
}
function prevPage(){
    dataDiv.innerHTML = ""
    if(pageNumber==2){
        document.getElementById("load_prev").disabled = true
    }else{
        document.getElementById("load_prev").disabled = false
    }
        pageNumber--;
        showPage.innerText = pageNumber
        fetchData(pageNumber);
      
}
fetchData(1)