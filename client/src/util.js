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
      sort: true,
      print: false,
    }
  },
  {
    name: "Ask",
    label: "Retail Ask",
    options: {
      filter: false,
      sort: true,
      print: false,
    }
  },
  {
    name: "halfPercent",
    label: "0.5%",
    options: {
      filter: false,
      sort: true,
      print: false,
    }
  },
  {
    name: "onePercent",
    label: "1.5%",
    options: {
      filter: false,
      sort: true,
      print: false,
    }
  },
  {
    name: "threePercent",
    label: "3%",
    options: {
      filter: false,
      sort: true,
      print: false,
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
    name: "Ask",
    label: "Retail Ask",
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
    name: "Ask",
    label: "Retail Ask",
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
  pagination: false,
  filter: true,
  print: false,
  rowsSelected: false,
  viewColumns: false,
  filterType: 'multiselect'
};

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
          backgroundColor: "#fdfd96",
          width: "200px"
        }
      },
      MUIDataTableToolbar: {
        titleRoot: {
          display: "flex",
          justifyContent: "flex-end",
          textAlign: "center"
        }
      },
      MUIDataTableHeadCell: {
        fixedHeader: {
          top: '45px',
        }
      },
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
          backgroundColor: "#add8e6",
        }
      },
      MUIDataTableBodyCell: {
        root: {
          backgroundColor: "#add8e6",
          width: "200px"
        }
      },
      MUIDataTableToolbar: {
        titleRoot: {
          display: "flex",
          justifyContent: "flex-end",
          textAlign: "center",
        },
      },
      MUIDataTableHeadCell: {
        fixedHeader: {
          top: '45px',
        }
      },
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
          backgroundColor: "#b6e589",
          width: "200px"
        }
      },
      MUIDataTableToolbar: {
        titleRoot: {
          display: "flex",
          justifyContent: "flex-end",
          textAlign: "center"
        }
      },
      MUIDataTableHeadCell: {
        fixedHeader: {
          top: '45px',
        }
      },
    }
});

export const setHeight = () => {
  let body = document.body;
  let html = document.documentElement;

  let height = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight);
    
  body.style.height = height + "px";
  return height;
}

export const createBullionCoin = (spotPrice) => ({
  Name: spotPrice.Name,
  Ask: `$${bidMarkup(spotPrice.Ask, 'Bullion')}`,
  halfPercent: `$${bullionHalfPercent(
    bidMarkup(spotPrice.Ask, "Bullion")
  )}`,
  onePercent: `$${bullionOneHalfPercent(
    bidMarkup(spotPrice.Ask, "Bullion")
  )}`,
  threePercent: `$${bullionThreePercent(
    bidMarkup(spotPrice.Ask, "Bullion")
  )}`,
});

export const createSemiNumisCoin = (spotPrice) => ({
  Name: spotPrice.Name,
  Ask: `$${bidMarkup(spotPrice.Ask, "Numis")}`,
  threePercent: `$${semiNumisThreePercent(
    bidMarkup(spotPrice.Ask, "Numis")
  )}`,
  fivePercent: `$${semiNumisFivePercent(
    bidMarkup(spotPrice.Ask, "Numis")
  )}`,
  sevenPercent: `$${semiNumisSevenPercent(
    bidMarkup(spotPrice.Ask, "Numis")
  )}`
});

export const createNumisCoin = (spotPrice) => ({
  Name: spotPrice.Name,
  Ask: `$${bidMarkup(spotPrice.Ask, "Numis")}`,
  fivePercent: `$${numisFivePercent(
    bidMarkup(spotPrice.Ask, "Numis")
  )}`,
  sixPercent: `$${numisSixPercent(
    bidMarkup(spotPrice.Ask, "Numis")
  )}`,
  eightPercent: `$${numisEightPercent(
    bidMarkup(spotPrice.Ask, "Numis")
  )}`
});