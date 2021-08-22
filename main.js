var headers = new Headers();
headers.append('username', 'WY9ZNW2DSS-QXQ_DYT3A-G');
headers.append('password', 'iF4838FKQYeFCilMBsQZTQ');
headers.append('Access-Control-Allow-Origin', '*');
async function getMarioPrice() {
    let response = await fetch('https://api.fastspring.com/products', {headers: headers});    
    let data = await response.json();
    return data;
}

getMarioPrice().then(data => console.log(data));