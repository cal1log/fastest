let headers = new Headers();
let username = 'WY9ZNW2DSS-QXQ_DYT3A-G';
let password = 'yRSwLDkBR_-1wUl7saZfpg';
headers.set('Authorization', 'Basic ' + username + ":" + password);

async function getMarioPrice() {
    let response = await fetch('https://api.fastspring.com/products/price/mario-kart?country=CO', {headers: headers});    
    let data = await response.json();
    return data;
}

getMarioPrice().then(data => console.log(data));