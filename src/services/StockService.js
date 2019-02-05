
class StockService {
    constructor() {
       this.url =  process.env.REACT_APP_API_URL + '/stocks/';
    }

    async getStocks() {
        const response = await fetch(this.url);
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    }

    async saveStock(stock) {
        let id = stock.id;
        const response = await fetch(this.url + (id ? id.toString() : ''), {
            method: id ? 'PUT' : 'POST',
            body: JSON.stringify(stock),
            headers: {
                'Content-Type': 'application/json'
            }
        });
       const resp = await response.json();
       if (response.status !== 200) throw Error(resp.message);
       return resp;
    }
}

export default StockService;