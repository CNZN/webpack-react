/*
 * @Author: your name
 * @Date: 2021-04-07 22:24:05
 * @LastEditTime: 2021-08-31 18:50:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-react\src\common\utils\request.js
 */
import axios from 'axios'

export const request = (path, params) => {
    path = 'http://localhost:7777' + path;
    // return axios.post(
    //     path+ `?id=${params.id}`,
    //     {name: params.name},
    //     // `name=${params.name}`,
    //     {
    //         header: {
    //             '1': '222',
    //             'csp': '3333'
    //         }
    //     }
    // )
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