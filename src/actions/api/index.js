export function apiCall(url, options) {

    return fetch(url, options).then(res => res.json())
}