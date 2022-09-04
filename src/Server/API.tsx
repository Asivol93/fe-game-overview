import axios from 'axios'

export const get = (url: string, filter: any) => {
    return new Promise<any[]>(function (fulfill, reject) {
        axios({
            method: "get",
            url: url + filter,
            headers: {Accept: "application/json;odata=verbose"}
        }).then((response: any) => {
            console.log(response);
          }, (error: any) => {
            console.log(error);
          });
    })
}

export const post = (url: string, data: any) => {
    const dataToPost = {...data}
        axios({
            method: "post",
            url: url + data,
            headers: {Accept: "application/json;odata=verbose",
            "Content-Type": "application/json;odata=verbose",
        },
        data: dataToPost
        })
    
}

