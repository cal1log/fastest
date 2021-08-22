var headers = new Headers();
headers.append('Authorization', 'Basic' + btoa('WY9ZNW2DSS-QXQ_DYT3A-G' + ':' + 'iF4838FKQYeFCilMBsQZTQ'));
async function getMarioPrice() {
    let response = await fetch('https://api.fastspring.com/products', {headers: headers});    
    let data = await response.json();
    return data;
}

getMarioPrice().then(data => console.log(data));