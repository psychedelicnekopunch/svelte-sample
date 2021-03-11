
import Http from '/src/infrastructure/Http.js';


const Postcode = {
	list: (zipcode, callback) => {
		// let lists = [{ id: 1 }, { id: 2 }]
		// callback(lists)
		// console.log(axios)
		Http.get('https://zipcloud.ibsnet.co.jp/api/search', { zipcode: zipcode }, (error, message, data) => {
			callback(data)
		})
	}
}

export default Postcode;
