import axios from 'axios'

export const request = (path, params) => {
    path = 'http://localhost:3000' + path;
    return axios.post(
        path,
        params,
        {
            header: {
                '1': '222',
                'csp': '3333'
            }
        }
    )
}