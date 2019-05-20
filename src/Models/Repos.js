
import axios from 'axios';


const Repos = {
	list: (callback) => {
		// let lists = [{ id: 1 }, { id: 2 }]
		// callback(lists)
		// console.log(axios)
		axios.get('https://api.github.com/users/psychedelicnekopunch/repos')
			.then((response) => {
				// handle success
				console.log(response);
				callback(response.data)
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.finally(function () {
				// always executed
			})
	}
}

export default Repos;
