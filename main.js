function getPriceMarioKark()
{
    axios.get('https://WY9ZNW2DSS-QXQ_DYT3A-G:aRBZZpmtTAarq7igPAgTtQ@api.fastspring.com/products/price/mario-kart?country=CO')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
    });
}
