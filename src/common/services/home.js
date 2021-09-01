/*
 * @Author: your name
 * @Date: 2021-04-07 22:24:05
 * @LastEditTime: 2021-08-31 18:56:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-react\src\common\services\home.js
 */
import axios from 'axios';
import {request} from '@/common/utils/request';

const services = {};

services.getUserInfo = (params = {}) => {
    let path = '/getUserInfo';
    return request(path, params);
} 
services.getlist = (params = {}) => {
    let path = '/getList';
    return request(path, params);
} 
services.getcount = (params = {}) => {
    let path = '/getCount';
    return request(path, params);
} 

export default services;