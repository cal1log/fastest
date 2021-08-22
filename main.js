let headers = new Headers();
let username = 'WY9ZNW2DSS-QXQ_DYT3A-G';
let password = '8-K4f-tpSf2kBWFROH34tA';
headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));
headers.set('User-Agent', 'Chrome');

async function getMarioPrice() {
    let response = await fetch('https://api.fastspring.com/products/price/mario-kart?country=CO', {mode: 'no-cors', headers: headers});    
    let data = await response.json();
    return data;
}

getMarioPrice().then(data => console.log(data));