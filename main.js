let headers = new Headers();
headers.append('username', 'WY9ZNW2DSS-QXQ_DYT3A-G');
headers.append('password', 'iF4838FKQYeFCilMBsQZTQ');
headers.append('Access-Control-Allow-Origin', 'https://api.fastspring.com/');
headers.append('Access-Control-Allow-Headers', 'GET');
headers.append('Connection', 'Keep-Alive');
headers.append('Content-Type', 'application/json');

async function getMarioPrice() {
    let response = await fetch('https://api.fastspring.com/products/price/mario-kart?country=CO', {headers: headers});    
    let data = await response.json();
    return data;
}

getMarioPrice().then(data => console.log(data));