async function getMario() {
    try {
        let response = await fetch('https://api.fastspring.com/products/mario-kart', {
            method:'GET',
            headers: {
                
                'User-Agent': window.navigator.userAgent        
            },
            mode: 'no-cors'                        
        });
        let data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        return err;
    }
}