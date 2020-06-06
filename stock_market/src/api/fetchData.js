
import { tsvParse } from  "d3-dsv";
import { timeParse } from "d3-time-format";



function parseData(parse) {
	return function(d) {
		d.date = parse(d.date);
		d.open = +d.open;
		d.high = +d.high;
		d.low = +d.low;
		d.close = +d.close;
		d.volume = +d.volume;

		return d;
	};
}

const parseDate = timeParse("%Y-%m-%d");

function utcDate(timeString) {
	console.log(timeString);
	console.log(Date.parse(timeString));
	return Date.parse(timeString);
}
export function getData(market,start,end) {
	const promiseTrade = fetch(`https://poloniex.com/public?command=returnChartData&currencyPair=BTC_ETH&start=1589250000&end=1589252583&period=300`)
		.then(response => response.json())
	return promiseTrade;
}
