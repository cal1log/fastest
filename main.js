async function getMario() {
    try {
        let response = await fetch('https://api.fastspring.com/products/mario-kart', {
            method:'GET',
            headers: {
                'Authorization': 'Basic ' + window.btoa('WY9ZNW2DSS-QXQ_DYT3A-G' + ":" + 'y-Qv9AioT6O31zqXOddSOA'),                
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_5_2) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Safari/605.1.15'        
            },
            mode: 'no-cors',            
            cache: 'default',
        });
        let data = await response.json();
        return data;
    } catch (err) {
        return err;
    }
}