
async function getUsers(){
    let uriJson = await fetch("https://jsonplaceholder.typicode.com/comments");
    let jsonObj = await uriJson.json();
    let rowTable = '';
    jsonObj.forEach(row=>{
        rowTable = rowTable + "<tr>"
        rowTable = rowTable + "<td>" + row.name + "</td>";
        rowTable = rowTable + "<td>" + row.email + "</td>";
        rowTable = rowTable + "<td>" + row.body + "</td>";
        
        rowTable = rowTable + "</tr>"
    })
    document.querySelector("#row").innerHTML = rowTable;
}
console.log(getUsers());