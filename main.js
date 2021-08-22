let request = new XMLHttpRequest();
request.open("GET", "https://WY9ZNW2DSS-QXQ_DYT3A-G:aRBZZpmtTAarq7igPAgTtQ@api.fastspring.com/products/price/mario-kart?country=CO");
request.send();
request.onload = () => {
    if (request.status == 200) {
        console.log(JSON.parse(request.response));
    }
    else {
        console.log(request.statusText);
    }
}
