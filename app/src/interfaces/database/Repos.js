
import Http from '/src/infrastructure/Http.js';


const Repos = {
	list: (callback) => {
		// let lists = [{ id: 1 }, { id: 2 }]
		// callback(lists)
		// console.log(axios)
		Http.get('/users/psychedelicnekopunch/repos', null, (error, message, data) => {
			callback(data)
		})
	}
}

export default Repos;
