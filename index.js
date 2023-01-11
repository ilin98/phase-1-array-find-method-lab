const record = [
    { year: "2018", result: "N/A"},
    { year: "2017", result: "N/A"},
    { year: "2016", result: "N/A"},
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    { year: "2012", result: "N/A"},
  ]

function superbowlWin(array){
    for(let item of array){
        if(item.result === "W"){
            return item.year;
        }
    }
}

console.log(superbowlWin(record));
