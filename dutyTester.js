import duty from './R75_array';

const commingDuty = [
	'G15113',
	'G15114',
	'G14115',
	'G15116',
	'RD',
	'V75118',
	'U71118',
];

const requiredList = duty.filter((each) => each.dutyNumber.match(/104/));

const getDuty = (requiredDuty) =>
	duty.filter((duty) => {
		return duty.dutyNumber === requiredDuty;
	});

const dutyDetail = (rawDutyArray) => rawDutyArray.map((duty) => getDuty(duty));

const detailedNextWeek = dutyDetail(commingDuty);

let d = new Date();
d.setDate(d.getDate() + (7 - (d.getDay() % 7) + 1));

const getNextWeek = () => {
	let weekArr = [];
	let startDate = new Date(d);
	for (let i = 0; i < 7; i++) {
		weekArr.push(new Date(startDate));

		startDate.setDate(startDate.getDate() + 1);
	}
	return weekArr;
};

const detailedNextWeekDates = getNextWeek();

const createDutyObjects = (arrayOfDuty, arrayOfNextWeek) => {
	if (arrayOfDuty.length < 7 || arrayOfNextWeek.length < 7) return null;

	const NextWeekDetail = [];

	for (let i = 0; i < 7; i++) {
		const detailedObject = {};
		detailedObject.input = commingDuty[i];
		detailedObject.date = arrayOfNextWeek[i];
		detailedObject.duty = arrayOfDuty[i][0];
		NextWeekDetail.push(detailedObject);
	}
	return NextWeekDetail;
};

const completeWeekDetails = createDutyObjects(
	detailedNextWeek,
	detailedNextWeekDates
);
