
export const groupBy = key => array =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});

export const bullionColumns = [
  {
    name: "Name",
    label: "Product Description",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "Bid",
    label: "Retail Bid",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "halfPercent",
    label: "0.5%",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "onePercent",
    label: "1.5%",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "threePercent",
    label: "3%",
    options: {
      filter: true,
      sort: true
    }
  }
];

export const semiNumismaticColumns = [
  {
    name: "Name",
    label: "Product Description",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "Bid",
    label: "Retail Bid",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "threePercent",
    label: "3%",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "fivePercent",
    label: "5.5%",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "sevenPercent",
    label: "7%",
    options: {
      filter: true,
      sort: true
    }
  }
];

export const numismaticColumns = [
  {
    name: "Name",
    label: "Product Description",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "Bid",
    label: "Retail Bid",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "fivePercent",
    label: "5%",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "sixPercent",
    label: "6.5%",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "eightPercent",
    label: "8%",
    options: {
      filter: true,
      sort: true
    }
  }
];

export const options = {
  filterType: "dropdown",
  selectableRows: false,
  pagination: false};

const goldLibertyCoins = {
  "2.5 Liberty Vf": 0,
  "2.5 Liberty XF": 1
}

export const apiKeys = ["Name", "Bid"];

export const sevenPercentForm = (spotPrice) => (
  (spotPrice * 1.54).toFixed(2)
);

