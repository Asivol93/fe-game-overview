import axios from 'axios'

export const get = (query: string, filter: any) => {
    return new Promise<any[]>(function (fulfill, reject) {
        axios({
            method: "get",
            url: query + filter,
            headers: {Accept: "application/json;odata=verbose"}
        }).then((response: any) => {
            console.log(response);
          }, (error: any) => {
            console.log(error);
          });
    })
}