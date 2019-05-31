
import DatePicker from './../Views/DatePicker.svelte';


const DatePickerContoller = {
	Index: (context) => {
		document.getElementById('app').innerText = ''
		const app = new DatePicker({
			target: document.getElementById('app'),
		})
	}
}

export default DatePickerContoller;
