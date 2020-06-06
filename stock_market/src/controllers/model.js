
function simulator(data){
    console.log(analysisiOfHistoricData(data));
    generateData(data[data.length-1].date,data[data.length-1].date-data[data.length-2].date,data);
}

function analysisiOfHistoricData(d) {
    const tableOfIndex=["open","high","low","close","volume"]
    const dataNew = []
    const fractorTab = [];
    let lastDiff = [0,0,0,0,0];
    let fracId=0;
    initFractalTab(fractorTab, 5)
    
    console.log(fractorTab);
    for(let i=1; i<d.length; i++){
        dataNew.push({})
        dataNew[i-1].open = d[i].open;
		dataNew[i-1].high = d[i].high;
		dataNew[i-1].low = d[i].low;
		dataNew[i-1].close = d[i].close;
        dataNew[i-1].volume = d[i].volume;

        for(let j=0; j<tableOfIndex.length; j++) {
           const diff = d[i][tableOfIndex[j]] - d[i-1][tableOfIndex[j]];
           if(diff<0) fracId = 0;
           else fracId=1;
           console.log(fractorTab);
           console.log(fracId);
            fractorTab[j][fracId]++;

            if(lastDiff[j]>=0&&diff>=0) fractorTab[j][2].currSeries.push(d[i][tableOfIndex[j]]);
            else if(lastDiff[j]<=0&&diff<=0) fractorTab[j][3].currSeries.push(d[i][tableOfIndex[j]]);
            else {
                console.log("zmiana trendu")
                console.log(fractorTab[j][fracId+2])
                const size=fractorTab[j][fracId+2].currSeries.length;
                if(fractorTab[j][fracId+2].maxN<size) fractorTab[j][fracId+2].maxN = size;
                fractorTab[j][fracId+2].avg = changeAvg(
                    fractorTab[j][fracId+2].avg,
                    fractorTab[j][fracId+2].n,
                    avgFromTab(fractorTab[j][fracId+2].currSeries)
                )
                fractorTab[j][fracId+2].n++;
                fractorTab[j][fracId+2].currSeries=[]
            }
           lastDiff[j]=diff;
        }
    }

    return dataNew;
}

function initFractalTab(tab,n){
    for(let i=0; i<n; i++){
        tab[i]=[0,0,
            {
            avg:0,
            n:0,
            max:0,
            maxN:0,
            currSeries:[],
        },
        {
            avg:0,
            n:0,
            max:0,
            maxN:0,
            currSeries:[],
        }]
    }
}

function changeAvg(lastAvg, n, newValue) {
    return (lastAvg*n+newValue)/n+1;
}

function avgFromTab(tab){
    let sum = tab.reduce(function(prev, curr) {
        return prev + curr;
      });
      return sum/tab.length;
}


function generateData(startDate, period, basicData){
    console.log(period)
}


export default simulator




/*      dataDayOfIncrease dataDayOfDecline AvgCountOfSeriesIncrease AvgCountOfSeriesDecline 
close:                                              tab            tab factorEmaa
​​​
high: 
​​​
low: 
​​​
open: 
​​​ 
​​​
volume: 
​​​
​​​
*/ 