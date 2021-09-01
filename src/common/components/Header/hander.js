/*
 * @Author: your name
 * @Date: 2021-04-07 22:24:05
 * @LastEditTime: 2021-08-31 18:53:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-react\src\common\components\Header\hander.js
 */
import services from '@/common/services/home';
import store from '@/reducer/index';

export const getInfo = () => {
    let params = {
        id: 11,
        name: 'kenny'
    };
    services.getUserInfo(params).then(res => {
        console.log(res)
        // let name = res.data.data.Name;
        // let age = res.data.data.Age;
        // store.dispatch({
        //     type:'HOME_NAME',
        //     payload: name
        // })
        // store.dispatch({
        //     type:'HOME_AGE',
        //     payload: age
        // })
    })
}