async function getMoney(){
    //identify the container (div) to put the information inside of
    let div = document.querySelector("#coinList");

    //create a variable to store the data we collect from the api. We will call the api using fetch() 
    var responseFromApi = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");

    //convert the information to json (some format the computer can understand)
    var coinData = await responseFromApi.json();
    // console.log(coinData); //coinData is an array with objects inside of it

    //FOR each coin, i want to generate a paragraph tag
    for(let i = 0; i<coinData.length; i++){
        // console.log(coinData[i]);
        let currentCoin = coinData[i]; //store the current coin we are inside of from the array into a variable
        //create a paragraph tag 
        let pTag = document.createElement("p");

        //fill that paragraph tag with the current coin's name
        pTag.innerText = currentCoin.name + "-" + currentCoin.current_price;

        //add a css class to the pTag
        pTag.classList.add("coin")
        
        //put the paragraph tag inside out div called coinList
        div.appendChild(pTag)

    }

    /*
    identify the container (div) to put the information inside of
    get the data from the api about the coins

    FOR each coin, i want to generate a paragraph tag


    display the coins on the page


    */
}