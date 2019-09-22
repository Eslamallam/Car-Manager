// car search func.

const getVisibleCar = (cars, { text }) => {
	return cars.filter(cars => {
		const nameMatch = cars.name.toLowerCase().includes(text.toLowerCase());

		const priceMatch = cars.price.includes(text);

		const horsepowerMtach = cars.horsepower.includes(text);

		return nameMatch || priceMatch || horsepowerMtach;
	});
};

export default getVisibleCar;
