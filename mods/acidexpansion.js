elements.hydrochloric_acid = {
  color: "#ffbb00",
  behavior: behaviors.LIQUID,
  category: "liquids",
  state: "liquid",
  density: 1100,
  viscosity: 1,
  tempHigh: 110,
  stateHigh: "hcl_gas",
  reactions: {
    "iron": {
      elem1: "hydrogen_bubble",
      elem2: "iron_chloride",
      chance: 0.1,
      temp1: 20
    },
    "aluminum": {
      elem1: "hydrogen",
      elem2: null,
      chance: 0.2,
      temp1: 50
    },
    "zinc": {
      elem1: "hydrogen",
      elem2: null,
      chance: 0.15
    },
    "limestone": {
      elem1: "hydrogen_bubble",
      elem2: "calcium_chloride",
      chance: 0.15,
      temp1: 30
    },
    "baking_soda": {
      elem1: "salt_water",
      elem2: "carbon_dioxide"
    },
    "plant": {
      elem1: null,
      elem2: "dead_plant",
      chance: 0.03
    },
    "meat": {
      elem1: null,
      elem2: "rotten_meat",
      chance: 0.02
    },
  },
};

elements.hcl_gas = {
  color: "#f2ffe6",
  behavior: behaviors.GAS,
  category: "gases",
  state: "gas",
  density: 1.5,
  reactions: {
    "water": {
      elem1: "hydrochloric_acid",
      elem2: null,
      chance: 0.1
    },
    "plant": {
      elem1: null,
      elem2: "dead_plant",
      chance: 0.05
    },
  },
};

elements.calcium_chloride = {
  color: "#e3e3e3",
  behavior: behaviors.POWDER,
  category: "powders",
  state: "solid",
  density: 2150,
  reactions: {
    "water": {
      elem1: "salt_water",
      chance: 0.1
    }
  }
};

elements.hydrogen_bubble = {
  color: "#0070ff",
  behavior: [
    "M2|M1|M2",
    "M1|XX|M1",
    "M2|M1|M2",
  ],
  category: "gases",
  state: "gas",
  density: 1,
  reactions: {
    "fire": {
      elem1: "explosion",
      chance: 0.1,
    },
    "air": {
      elem1: "hydrogen",
      chance: 0.3
    }
  },
};

elements.iron_chloride = {
  color: "#4d3319",
  behavior: behaviors.POWDER,
  category: "powders",
  state: "solid",
};

elements.carbonic_acid = {
  color: "#d1f2ff", 
  behavior: behaviors.LIQUID,
  category: "liquids",
  state: "liquid",
  density: 1010,
  viscosity: 1,
  tempHigh: 50,
  stateHigh: "carbon_dioxide",
  reactions: {
    "air": {
      elem1: "water",
      elem2: "carbon_dioxide",
      chance: 0.01
    },
    "limestone": {
      elem1: "water",
      elem2: "carbon_dioxide",
      chance: 0.05
    },
    "calcium": {
      elem1: "hydrogen_bubble",
      elem2: null,
      chance: 0.1
    }
  },
};

if (!elements.water.reactions) {
  elements.water.reactions = {}
}
elements.water.reactions.carbon_dioxide = {
  elem1: "carbonic_acid",
  chance: 0.08
};