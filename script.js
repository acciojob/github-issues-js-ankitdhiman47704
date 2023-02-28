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
    pageNumber++;
   showPage.innerText =`Page number ${pageNumber}` 
    fetchData(pageNumber);
}
function prevPage(){
    if(pageNumber>=2){
        dataDiv.innerHTML = ""
        pageNumber--;
        showPage.innerText =`Page number ${pageNumber}` 
        fetchData(pageNumber);
    }
      
}
fetchData(1)