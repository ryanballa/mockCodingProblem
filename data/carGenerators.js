const carGenerators = [
  {
    id: 1,
    name: "Ice House",
    ref: {
      resource: "cities",
      id: 1
    },
    metaData: {
      type: "commercial",
      resource: "ice",
      accepts: ["reefer"],
      generates: ["perishables"]
    }
  },
  {
    id: 2,
    name: "Team Track",
    ref: {
      resource: "cities",
      id: 1
    },
    metaData: {
      type: "commercial",
      resource: "mixed-goods",
      accepts: ["box", "reefer", "flat"],
      generates: ["general-freight"]
    }
  },
  {
    id: 3,
    name: "Station",
    ref: {
      resource: "cities",
      id: 1
    },
    metaData: {
      type: "non-commercial",
      resource: "passenger",
      accepts: ["mail", "passenger", "express"],
      generates: ["mail", "passenger", "express"]
    }
  },
  {
    id: 4,
    name: "Station",
    ref: {
      resource: "cities",
      id: 2
    },
    metaData: {
      type: "non-commercial",
      resource: "passenger",
      accepts: ["mail", "passenger", "express"],
      generates: ["mail", "passenger", "express"]
    }
  },
  {
    id: 5,
    name: "Station",
    ref: {
      resource: "cities",
      id: 3
    },
    metaData: {
      type: "non-commercial",
      resource: "passenger",
      accepts: ["mail", "passenger", "express"],
      generates: ["mail", "passenger", "express"]
    }
  },
  {
    id: 6,
    name: "Cold Storage",
    ref: {
      resource: "cities",
      id: 3
    },
    metaData: {
      type: "commercial",
      resource: "perishables",
      accepts: ["reefer"],
      generates: ["perishable"]
    }
  },
  {
    id: 7,
    name: "Yard",
    ref: {
      resource: "cities",
      id: 3
    },
    metaData: {
      type: "yard",
      resource: "*",
      accepts: ["*"],
      generates: ["*"]
    }
  }
];

export default carGenerators;
