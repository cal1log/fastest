var headers = new Headers();
headers.append('Authorization', 'Basic' + btoa('WY9ZNW2DSS-QXQ_DYT3A-G' + ':' + 'aRBZZpmtTAarq7igPAgTtQ'));
async function getMarioPrice() {
    let response = await fetch('https://api.fastspring.com/products/price/mario-kart?country=CO', {headers: headers});
    let data = await response.json();
    return data;
}

getMarioPrice().then(data => console.log(data));