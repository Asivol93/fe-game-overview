import axios from 'axios'
import { stringify } from 'querystring'

export const get = (query: string, filter: any) => {
    return new Promise<any[]>(function (fulfill, reject) {
        axios({
            method: "get",
            url: query + filter,
            headers: {Accept: "application/json;odata=verbose"}
        }).then(
            response => {
                let items = []
                response.json(data)
                fulfill(items)
        })
    })
}