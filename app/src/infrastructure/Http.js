
import axios from 'axios'
import _foreach from 'lodash.foreach'


/**
 * callback(error boolean, message string, data object|null)
 */
const Http = {
	get: (endpoint, params, callback) => {

		let sendParams = (params == null) ? {} : params

		axios({
			method: 'get',
			// baseURL: 'https://api.github.com',
			url: endpoint,
			params: sendParams,
		})
			.then((response) => {
				// handle success
				callback(false, response.statusText, response.data)
			})
			.catch((error) => {
				// handle error
				if (error.response) {
					callback(true, error.response.statusText, error.response.data)
					return
				}
				callback(true, error.message, null)
			})
			.finally(() => {
				// always executed
			})
	},
	post: (endpoint, params, callback) => {

		let sendParams = (params == null) ? {} : params
		let formData = new FormData()

		_foreach(sendParams, (value, key) => {
			formData.append(key, value)
		})

		axios({
			method: 'post',
			// baseURL: 'https://api.github.com',
			url: endpoint,
			data: formData,
		})
			.then((response) => {
				// handle success
				callback(false, response.statusText, response.data)
			})
			.catch((error) => {
				// handle error
				if (error.response) {
					callback(true, error.response.statusText, error.response.data)
					return
				}
				callback(true, error.message, null)
			})
			.finally(() => {
				// always executed
			})
	},
}


export default Http;
