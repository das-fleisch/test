export default class API {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    get = async (path, urlParams) => {
        const options = {
            method: "GET",
        };
        const request = new Request(this.apiUrl + ( path ? path : '' ) + (urlParams ? ("?" + urlParams) : ''), options);
        const response = await fetch(request);
        return response.json();
    };

    post = async (path, model) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        let options = {
            method: "POST",
            headers,
            body: JSON.stringify(model)
        };
        const request = new Request(this.apiUrl + ( path ? path : '' ), options);
        const response = await fetch(request);
        return response.json();
    };
}