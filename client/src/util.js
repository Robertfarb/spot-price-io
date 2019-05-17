import {
  createMuiTheme,
} from "@material-ui/core/styles";

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
  pagination: false
};

export const apiKeys = ["Name", "Bid"];

export const sevenPercentForm = (spotPrice) => (
  (spotPrice * 1.07).toFixed(2)
);

export const bullionHalfPercent = spotPrice => (
  (spotPrice * 1.005).toFixed(2)
);

export const bullionOneHalfPercent = spotPrice => (
  (spotPrice * 1.015).toFixed(2)
);

export const bullionThreePercent = spotPrice => (
  (spotPrice * 1.03).toFixed(2)
);

export const bidMarkup = (spotPrice, bidType = 'Bullion') => {
  if (bidType === 'Bullion') {
    return (spotPrice * 1.005).toFixed(2);
  } else if (bidType === 'Numis') {
    return (spotPrice * 1.045).toFixed(2);
  }
};

export const semiNumisThreePercent = spotPrice => (
  (spotPrice * 1.24).toFixed(2)
);

export const semiNumisFivePercent = spotPrice => (
  (spotPrice * 1.265).toFixed(2)
);

export const semiNumisSevenPercent = spotPrice => (
  (spotPrice * 1.28).toFixed(2)
);

export const numisFivePercent = spotPrice => (
  (spotPrice * 1.26).toFixed(2)
);

export const numisSixPercent = spotPrice => (
  (spotPrice * 1.275).toFixed(2)
);

export const numisEightPercent = spotPrice => (
  (spotPrice * 1.29).toFixed(2)
);

export const getBullionTheme = () =>
  createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    overrides: {
      MUIDataTable: {
        root: {
          backgroundColor: "#fdfd96"
        }
      },
      MUIDataTableBodyCell: {
        root: {
          backgroundColor: "#fdfd96"
        }
      }
    }
});

export const getSemiNumisTheme = () =>
  createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    overrides: {
      MUIDataTable: {
        root: {
          backgroundColor: "#cccccc"
        }
      },
      MUIDataTableBodyCell: {
        root: {
          backgroundColor: "#cccccc"
        }
      }
    }
});

export const getNumisTheme = () =>
  createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    overrides: {
      MUIDataTable: {
        root: {
          backgroundColor: "#b6e589"
        }
      },
      MUIDataTableBodyCell: {
        root: {
          backgroundColor: "#b6e589"
        }
      }
    }
});