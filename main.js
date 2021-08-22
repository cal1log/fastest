async function getMarioPrice() {
    let response = await fetch('https://WY9ZNW2DSS-QXQ_DYT3A-G:aRBZZpmtTAarq7igPAgTtQ@api.fastspring.com/products/price/mario-kart?country=CO');
    let data = await response.json();
    return data;
}

getMarioPrice().then(data => console.log(data));