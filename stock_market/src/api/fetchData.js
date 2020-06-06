
function utcDate(timeString) {
	return Date.parse(timeString)/1000;
}

export function getData(market,end,start) {
	console.log(end)
	console.log(start)
	const promiseTrade = fetch(`https://poloniex.com/public?command=returnChartData&currencyPair=BTC_ETH&start=${utcDate(start)}&end=${utcDate(end)}&period=300`)
		.then(response => response.json()).catch(err=>console.log(err))
	return promiseTrade;
}
