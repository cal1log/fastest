let url = 'https://api.fastspring.com/products/price/mario-kart?country=CO';
let username = 'WY9ZNW2DSS-QXQ_DYT3A-G';
let password = '8-K4f-tpSf2kBWFROH34tA';
let methods = '"GET", "POST", "DELETE"';
let headers = new Headers();
headers.append('Authorization', 'Basic ' + window.btoa(username + ":" + password));
headers.set('User-Agent', 'Chrome/77.0.3865.90');

async function getMarioPrice() {
    let response = await fetch(url, {method: 'GET', mode: 'no-cors', headers: headers, credentials: 'same-origin'});    
    let data = await response.json();
    return data;
}

getMarioPrice().then(data => console.log(data));