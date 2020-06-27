function fetchData() {   
    console.log("fetch start");
    fetch("http://localhost:4000/category")
    .then(response => {
        if(!response.ok) {
            throw Error("ERROR");
        }
        return response.json();
    })
    .then(data=> {
        //console.log(data);
        const html = data
        .map(topmenu => {
            return `
            <div>
                <p>menu name: ${topmenu.catName}</p>
            </div>
            `;
        })
        .join("");
        document.querySelector("#app").insertAdjacentHTML("afterbegin",html);
    }).catch(error =>{
        console.log(error);
    });
    
}

fetchData();