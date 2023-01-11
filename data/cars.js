const cars = [
  {
    id: 1,
    road: "Rock Island",
    type: "box",
    reportingMarks: "ROCK",
    roadNumber: "1209",
    color: "blue",
    metaData: {
      accepts: ["general-freight"]
    }
  },
  {
    id: 2,
    road: "TTX",
    type: "box",
    reportingMarks: "TTX",
    roadNumber: "9028",
    color: "yellow",
    metaData: {
      accepts: ["general-freight"]
    }
  },
  {
    id: 3,
    road: "Soo Line",
    type: "Covered Hopper",
    reportingMarks: "SOO",
    roadNumber: "906",
    color: "gray",
    metaData: {
      accepts: ["grain"]
    }
  },
  {
    id: 4,
    road: "Milwaukee Road",
    type: "Reefer",
    reportingMarks: "MILW",
    roadNumber: "8471",
    color: "orange",
    metaData: {
      accepts: ["perishables"]
    }
  },
  {
    id: 5,
    road: "Garfield Central",
    type: "Reefer",
    reportingMarks: "GC",
    roadNumber: "3207",
    color: "green",
    metaData: {
      accepts: ["perishables"]
    }
  },
  {
    id: 6,
    road: "Garfield Central",
    type: "Coal",
    reportingMarks: "GC",
    roadNumber: "7432",
    color: "black",
    metaData: {
      accepts: ["coal"]
    }
  }
];

export default cars;
