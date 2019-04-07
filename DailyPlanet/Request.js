
export default class Request {

    static async GET(url, header, callbacks) {
        await this.request(url, 'get', null, callbacks, header)
    }

    static async POST(url, header, data, callbacks) {
        await this.request(url, 'post', data, callbacks, header)
    }

    static async PUT(url, data, callbacks) {
        await this.request(url, 'put', data, callbacks)
    }

    static async DELETE(url, data, callbacks) {
        await this.request(url, 'delete', data, callbacks)
    }

    static async request(url, method, data, callbacks, header) {
        let payload = {method};
        payload.headers = {
            'Content-Type': 'application/json',
            ...header
        };

        if (method !== 'get') {
            payload.body = JSON.stringify({
                ...data
            });
        }

        try {
            const response = await fetch(url, payload)
            let json;
            if(response.headers.get('content-type').match(/application\/json/))
                json = await response.json()

            if (callbacks[response.status]) {
                callbacks[response.status](json)
                return;
            } else {
                if (callbacks.otherwise) {
                    callbacks.otherwise(json)
                    return;
                }
            }
        } catch (err) {
            if (callbacks.fail) {
                callbacks.fail(err)
            }
            return;
        }


    }

}
