<script>

	import _foreach from 'lodash.foreach'
	import moment from 'moment'


	class Calendar {

		constructor(unixtime) {
			this.year     = (unixtime) ? parseInt(moment(unixtime, 'X').format('YYYY')) : parseInt(moment().format('YYYY'))
			this.month    = (unixtime) ? parseInt(moment(unixtime, 'X').format('M')) : parseInt(moment().format('M'))
			this.today    = parseInt(moment(moment().format('YYYY-M-D'), 'YYYY-M-D').format('X'))
			this.hour     = (unixtime) ? parseInt(moment(unixtime, 'X').format('H')) * 60 * 60 : 0
			this.min      = (unixtime) ? parseInt(moment(unixtime, 'X').format('m')) * 60 : 0
			this.selected = (unixtime) ? parseInt(moment(moment(unixtime, 'X').format('YYYY-M-D'), 'YYYY-M-D').format('X')) : null
		}


		get() {

			const firstDayTime = parseInt(moment(this.year + '-' + this.month + '-1', 'YYYY-M-D').format('X'))

			const tempLists = (() => {

				const build = (unixtime) => {
					const date = moment(unixtime, 'X')
					return {
						unixtime     : parseInt(date.format('X')),
						wday         : parseInt(date.format('e')),
						year         : parseInt(date.format('YYYY')),
						month        : parseInt(date.format('M')),
						day          : parseInt(date.format('D')),
						today        : (this.today === parseInt(unixtime)) ? true : false,
						currentMonth : (this.month === parseInt(date.format('M'))) ? true : false,
						selected     : (this.selected === parseInt(unixtime)) ? true : false,
					}
				}

				const calendar = build(firstDayTime)
				const day = 60*60*24
				const start = firstDayTime - (day * calendar.wday)

				let res = []
				let days = 0

				while (days < 42) {
					res.push(build(start + (day * days)))
					days++
				}

				return res
			})()

			let lists     = []
			let week      = 0
			let currentLastDayTime = null

			_foreach(tempLists, (list, i) => {
				if (this.month === list.month) {
					currentLastDayTime = list.unixtime
				}
				if (i % 7 === 0) {
					if (i !== 0) {
						week++
					}
				}
				if (!lists[week]) {
					lists[week] = []
				}
				lists[week].push(list)
			})

			return {
				detail : {
					currentFirstDayTime : firstDayTime,
					currentLastDayTime  : currentLastDayTime,
					year  : this.year,
					month : this.month,
					wdays : [
						{ wday : 0, text: '日' },
						{ wday : 1, text: '月' },
						{ wday : 2, text: '火' },
						{ wday : 3, text: '水' },
						{ wday : 4, text: '木' },
						{ wday : 5, text: '金' },
						{ wday : 6, text: '土' },
					],
				},
				lists : lists,
			}
		}


		setYear(yyyy) {
			const intYYYY = parseInt(yyyy)
			this.year = (intYYYY > 1969) ? intYYYY : this.year
		}


		setMonth(mm) {
			const intMM = parseInt(mm)
			this.month = (intMM > 0 && intMM < 13) ? intMM : this.month
		}

	}


	export let value = 0
	export let isOnlyDate = false
	export let didInit = (() => {})
	export let didChange = (() => {})

	let hour = '0'
	let min  = '0'

	let calendar = (() => {
		let cal = new Calendar(value)
		if (!value) {
			value = cal.today
			cal = new Calendar(value)
			didInit()
		}
		return cal.get()
	})()

	let hours = (() => {
		// <select> に使う hour (時) のリストを生成
		let res = []
		for (let i = 0; i < 24; i++) {
			res.push({ value: (i * 60 * 60), text: i })
		}
		return res
	})()

	let mins = (() => {
		// <select> に使う min (分) のリストを生成
		let res = []
		// const step = 5
		const step = 30
		const cnt  = 60 / step
		for (let j = 0; j < cnt; j++) {
			res.push({ value: (j * step * 60), text: (j * step) })
		}
		res.push({ value: 59 * 60, text: 59 })
		return res
	})()

	let _tempModel = null


	/**
	 * 日付と日時を合わせたものを export let value に代入する
	 * @return void
	 */
	function setTime() {
		value = (_tempModel) ? _tempModel : value
		_tempModel = value
		value = Number(value) + Number(hour) + Number(min)
		didChange()
	}


	/**
	 * カレンダーから日付を選択する
	 * @return void
	 */
	function selectedList(unixtime) {
		value = unixtime
		_tempModel = value

		const cal = new Calendar(value)
		calendar = cal.get()

		setTime()
	}


	/**
	 * 前月のカレンダーに切り替える
	 * @return void
	 */
	function prev() {

		let year  = calendar.detail.year
		let month = calendar.detail.month

		year  = (month - 1 === 0) ? year - 1 : year
		month = (month - 1 === 0) ? 12 : month - 1

		const cal = new Calendar(value)
		cal.setYear(year)
		cal.setMonth(month)

		calendar = cal.get()
	}


	/**
	 * 次の月のカレンダーに切り替える
	 * @return void
	 */
	function next() {

		let year  = calendar.detail.year
		let month = calendar.detail.month

		year  = (month + 1 === 13) ? year + 1 : year
		month = (month + 1 === 13) ? 1 : month + 1

		const cal = new Calendar(value)
		cal.setYear(year)
		cal.setMonth(month)

		calendar = cal.get()
	}


	/**
	 * 今日の日付を export let value に代入する
	 * @return void
	 */
	function today() {

		let cal = new Calendar(null)

		value = cal.today
		_tempModel = value

		cal = new Calendar(value)
		calendar = cal.get()

		// select が int だと反応しないので string に変える
		// hour = String(cal.hour)
		// min  = String(cal.min)

		setTime()
	}

</script>

<style lang="scss">

	.dp {
		background: #f2f2f2;
		padding: 12px;
		> header {
			display: flex;
			padding-bottom: 20px;
			.date-picker-left,
			.date-picker-right {
				button {
					padding: 8px 12px;
				}
			}
			.date-picker-text {
				padding: 8px 12px;
			}
			.date-picker-today {
				flex: 1;
				button {
					background: #fff;
					border: 1px #ccc solid;
					padding: 8px 12px;
					border-radius: 2px;
				}
			}
		}
		.dp-date {
			display: flex;
		}
		> table {
			width: 100%;
			border-collapse: collapse;
			th {
				background: #444;
				color: #fff;
				padding: 5px;
				border: 1px #bbb solid;
				&.dp-wday-0 {
					background: #f44;
				}
				&.dp-wday-6 {
					background: #44f;
				}
			}
			td {
				background: #ddd;
				text-align: center;
				padding: 5px;
				border: 1px #bbb solid;
				cursor: pointer;
				&.dp-current-month {
					background: #fff;
					&.dp-wday-0 {
						background: #f88;
					}
					&.dp-wday-6 {
						background: #88f;
					}
					&.dp-selected {
						background: #ff6;
					}
					&:hover {
						background: #fcfc00;
					}
				}
				&.dp-selected {
					background: #ff6;
					&:hover {
						background: #fcfc00;
					}
				}
				&:hover {
					background: #fcfc00;
				}
			}
		}
	}

</style>


<div class="date-picker dp">
	<header>
		<div class="date-picker-left">
			<button on:click|preventDefault={ prev }><i class="fas fa-chevron-left"></i></button>
		</div>
		<small class="date-picker-text">{ calendar.detail.year }年{ calendar.detail.month }月</small>
		<div class="date-picker-right">
			<button on:click|preventDefault={ next }><i class="fas fa-chevron-right"></i></button>
		</div>
		<div class="date-picker-today">
			<button on:click|preventDefault={ today }><i class="fas fa-chevron-event"></i>今日</button>
		</div>
	</header>
	{ #if !isOnlyDate }
		<div class="date-picker-date dp-date">
			<div class="date-picker-hour">
				<select bind:value={ hour } on:blur={ setTime }>
					{ #each hours as list }
						<option value="{ list.value }">{ list.text }</option>
					{ /each }
				</select>
			</div>
			<span>：</span>
			<div class="date-picker-min">
				<select bind:value={ min } on:blur={ setTime }>
					{ #each mins as list }
						<option value="{ list.value }">{ list.text }</option>
					{ /each }
				</select>
			</div>
		</div>
	{ /if }
	<table>
		<thead>
			<tr>
				{ #each calendar.detail.wdays as list }
					<th class="wday-{ list.wday } dp-wday-{ list.wday }">{ list.text }</th>
				{ /each }
			</tr>
		</thead>
		<tbody>
			{ #each calendar.lists as weekly }
				<tr>
					{ #each weekly as list }
						<td on:click="{ () => { selectedList(list.unixtime) } }" class="wday-{ list.wday } dp-wday-{ list.wday } { (list.today) ? 'today dp-today' : '' } { (list.currentMonth) ? 'current-month dp-current-month' : '' } { (list.selected) ? 'selected dp-selected' : '' } " value="{ list.unixtime }">
							<span>{ list.day }</span>
						</td>
					{ /each }
				</tr>
			{ /each }
		</tbody>
	</table>
</div>
