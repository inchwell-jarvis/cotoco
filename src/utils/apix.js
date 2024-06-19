import axios from "axios"; // 引入 axios 库
import { Message as message } from "element-ui"; // 引入 Element UI 的消息组件，并重命名为 message

/**
 * 通用请求函数
 * @param {string} url - 请求地址
 * @param {Object} [data={}] - 请求参数，默认为空对象
 * @param {Object} [options={}] - 其他配置
 * @param {string} [options.method='GET'] - HTTP请求方法，默认为 'GET'
 * @param {number} [options.timeout=0] - HTTP请求超时时间，默认为 0（即无超时）
 * @param {number} [options.source_data=false] - 是否返回顶级源数据
 * @param {number} [options.shake=true] - 是否开启防抖，只对 POST 生效，默认开启
 * @param {number} [options.pop_err=true] - 是否弹出错误信息，默认弹出
 * @param {number} [options.err_data=false] - 接口错误，即后端返回非 0 状态是否返回数据
 * @return {Promise<Object>} 返回 Promise 对象
 */
export default async function request(url, data = {}, options = {}) {
    return new Promise(async (resolve, reject) => { // 返回一个 Promise 对象

        const defaultOptions = { // 设置默认配置
            method: 'GET', // 默认请求方法为 GET
            timeout: 0, // 默认无超时
            source_data: false, // 默认不返回顶级源数据
            pop_err: true, // 默认弹出错误信息
            err_data: false, // 默认接口错误时不返回数据
            shake: true, // 默认开启防抖
            headers: {
                'Content-Type': 'application/json', // 默认 Content-Type 头       
            },
            ...options // 合并传入的配置选项
        };

        const axiosConfig = { // 配置 axios 请求
            url: url, // 拼接请求 URL
            method: defaultOptions.method.toUpperCase(), // 请求方法转为大写
            headers: defaultOptions.headers, // 设置请求头
            timeout: defaultOptions.timeout, // 设置超时时间
            ...(defaultOptions.method.toUpperCase() === 'GET' ? { params: data } : { data }), // 根据请求方法设置参数或数据
            ...defaultOptions // 合并其他配置项
        };


        try {
            const response = await axios(axiosConfig); // 发起 axios 请求并等待响应

            // let responseData = typeof response.data === "string" ? JSON.parse(response.data) : response.data; // 解析响应数据
            resolve(response.data)
            // if (defaultOptions.pop_err && responseData.Code !== 0) { // 如果需要弹出错误信息且接口返回非 0 状态码
            //     message({ message: responseData.Msg, type: "error" }); // 弹出错误信息
            // }

            // if (responseData.Code === 0 || defaultOptions.err_data) { // 如果接口成功或需要返回错误数据
            //     resolve(defaultOptions.source_data ? responseData : responseData.Data); // 返回响应数据
            // }

        } catch (error) {
            reject(error); // 捕获错误并拒绝 Promise

            if (defaultOptions.pop_err) { // 如果需要弹出错误信息
                if (error.response) { // 处理 HTTP 响应错误
                    message({ message: `Request failed with status ${error.response.status}: ${error.response.data}`, type: "error" }); // 弹出响应错误信息
                } else if (error.code === 'ECONNABORTED') { // 处理请求超时错误
                    message({ message: `Request timed out after ${defaultOptions.timeout} ms`, type: "error" }); // 弹出超时错误信息
                } else { // 处理其他类型错误
                    message({ message: error.message, type: "error" }); // 弹出错误信息
                }
            }
        }
    });
}
