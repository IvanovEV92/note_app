export default function data() {
	const Data = new Date();
	const Year = Data.getFullYear();
	const Month = Data.getMonth();
	const Day = Data.getDate();
	const Hour = Data.getHours();
	const Minutes = Data.getMinutes();
	const Seconds = Data.getSeconds();

	let fMonth = '';

	switch (Month) {
		case 0:
			fMonth = 'января';
			break;
		case 1:
			fMonth = 'февраля';
			break;
		case 2:
			fMonth = 'марта';
			break;
		case 3:
			fMonth = 'апреля';
			break;
		case 4:
			fMonth = 'мае';
			break;
		case 5:
			fMonth = 'июня';
			break;
		case 6:
			fMonth = 'июля';
			break;
		case 7:
			fMonth = 'августа';
			break;
		case 8:
			fMonth = 'сентября';
			break;
		case 9:
			fMonth = 'октября';
			break;
		case 10:
			fMonth = 'ноября';
			break;
		case 11:
			fMonth = 'декабря';
			break;
		default:
			fMonth = '';
	}
	return (
		Hour +
		':' +
		Minutes +
		':' +
		Seconds +
		' ' +
		Day +
		' ' +
		fMonth +
		' ' +
		Year +
		' года'
	);
}
