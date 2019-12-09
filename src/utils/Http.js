import 'whatwg-fetch'
import {
    HOST
} from './api'

export default class Http {
    //封装get请求
    static async get(url, data) {
        let pathStr = '';
        //拼接get请求地址data参数
        Object.keys(data).forEach((key) => {
            pathStr += `${key}=${data[key]}&`
        })
        //把最后一个拼接的参数的&删除
        pathStr = pathStr.slice(0, pathStr.length - 1);
        console.log(`${HOST}/${url}?${pathStr}`)
        //用fetch发送请求
        try {
            //请求成功，返回json数据
            let response = await window.fetch(`${HOST}${url}?${pathStr}`);
            let data = await response.json();
            return data;
        } catch (error) {
            throw new Error(error);
        }
    }

    //封装post请求
    static async post(url,data){
        console.log(data,url);
        try {
            let response = await fetch(url,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    data
                })
            })
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }
}
