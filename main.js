async function getMario() {
    try {
        let response = await fetch('https://api.fastspring.com/products', {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + window.btoa('WY9ZNW2DSS-QXQ_DYT3A-G' + ":" + 'y-Qv9AioT6O31zqXOddSOA'),
                'Content-Type': 'application/json',
                'User-Agent': 'Chrome/92.0.4515.159'        
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