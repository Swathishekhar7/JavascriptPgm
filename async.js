function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data Received");
        }, 2000);
    });
}

async function displayData() {
    console.log("Fetching the data");

    /*fetchData()
    .then(result => console.log(result));*/

    fetchData().then((result)=>{
        console.log(result);
    });

    /*let result = await fetchData();
    console.log(result);*/
}

displayData();