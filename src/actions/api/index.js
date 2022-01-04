export function apiCall(url, method = 'GET', data, header) {

    console.log(data)

    return fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(res => res.json())
}