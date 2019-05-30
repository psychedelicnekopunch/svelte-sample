
import Api from './Api.js';


const Repos = {
	list: (callback) => {
		// let lists = [{ id: 1 }, { id: 2 }]
		// callback(lists)
		// console.log(axios)
		Api.get('/users/psychedelicnekopunch/repos', null, (error, message, data) => {
			callback(data)
		})
	}
}

export default Repos;
