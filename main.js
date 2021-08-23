const https = require('https');

https.get('https://api.fastspring.com/products/price/mario-kart?country=CO', (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data += chunk;
    });

    response.on('end', () => {
        console.log(data);
    });
})
.on('error', (error) => {
    console.log(error);
});
