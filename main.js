let headers = new Headers();
headers.append("Authorization", "Basic " + "WY9ZNW2DSS-QXQ_DYT3A-G" + "iF4838FKQYeFCilMBsQZTQ");
headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")

async function getMarioPrice() {
    let response = await fetch('https://api.fastspring.com/products/price/mario-kart?country=CO', {headers: headers});    
    let data = await response.json();
    return data;
}

getMarioPrice().then(data => console.log(data));