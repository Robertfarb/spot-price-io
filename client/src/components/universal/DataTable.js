import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles
} from "@material-ui/core/styles";
import {
  apiKeys,
  bullionColumns,
  goldLibertyCoins,
  groupBy,
  numismaticColumns,
  options,
  semiNumismaticColumns,
  sevenPercentForm,
} from "../../util";
import LoadingSpinner from "./LoadingSpinner";


class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assetClasses: {}
    };
    this.cleanData = this.cleanData.bind(this);
  }

  componentDidMount() {
    this.cleanData();
  }

  getMuiTheme = () =>
    createMuiTheme({
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

  render() {
    const { assetClasses } = this.state;
    if (!assetClasses.bullion) {
      return <LoadingSpinner />;
    }
    return (
      <div>
        <h1>Bullion Products</h1>
        <MuiThemeProvider theme={this.getMuiTheme()}>
          <MUIDataTable
            height="95vh"
            data={assetClasses.bullion.goldBullion}
            columns={bullionColumns}
            options={options}
            title="Gold Bullion"
          />
        </MuiThemeProvider>
        <MuiThemeProvider theme={this.getMuiTheme()}>
          <MUIDataTable
            height="95vh"
            data={assetClasses.bullion.silverBullion}
            columns={bullionColumns}
            options={options}
            title="Silver Bullion"
          />
        </MuiThemeProvider>
        <MUIDataTable
          height="95vh"
          data={assetClasses.bullion.platPalBullion}
          columns={bullionColumns}
          options={options}
          title="Platinum & Palladium Bullion"
        />
        <h1>Semi Numismatic</h1>
        <MUIDataTable
          height="95vh"
          data={assetClasses.bullion.goldLiberty}
          columns={semiNumismaticColumns}
          options={options}
          title="Gold Liberty Series"
        />
        <MUIDataTable
          height="95vh"
          data={assetClasses.bullion.goldIndianStG}
          columns={semiNumismaticColumns}
          options={options}
          title="Gold Indian/St. Gauden Series"
        />
        <MUIDataTable
          height="95vh"
          data={assetClasses.bullion.silverAndHalfDollars}
          columns={semiNumismaticColumns}
          options={options}
          title="Silver Dollars & Half Dollars"
        />
        <h1>Numismatic</h1>
        <MUIDataTable
          height="95vh"
          data={assetClasses.bullion.goldProofCertEx}
          columns={numismaticColumns}
          options={options}
          title="Gold Proof / Certified / Exclusive"
        />
        <MUIDataTable
          height="95vh"
          data={assetClasses.bullion.numismaticGoldLiberty}
          columns={numismaticColumns}
          options={options}
          title="Gold Liberty Series"
        />
        <MUIDataTable
          height="95vh"
          data={assetClasses.bullion.numismaticGoldIndianStG}
          columns={numismaticColumns}
          options={options}
          title="Gold Indian / St. Gauden Series"
        />
        <MUIDataTable
          height="95vh"
          data={assetClasses.bullion.silverProofCert}
          columns={numismaticColumns}
          options={options}
          title="Silver Proof / Certified"
        />
      </div>
    );
  }

  cleanData() {
    const spotPrices = this.props.livePrices.data;

    let bullionObj = {
      goldBullion: [],
      silverBullion: [],
      platPalBullion: [],
      goldLiberty: [],
      silverAndHalfDollars: [],
      goldProofCertEx: [],
      goldIndianStG: [],
      numismaticGoldLiberty: [],
      numismaticGoldIndianStG: [],
      silverProofCert: []
    };

    console.log("OG SPOT PRICES", spotPrices);
    spotPrices.forEach(spotPrice => {
      let coinObj;
      switch (spotPrice.ProductFamily) {
        case "Gold Bullion":
          coinObj = {
            Name: spotPrice.Name,
            Bid: `$${spotPrice.Bid}`,
            halfPercent: "HALF PERCENT",
            onePercent: "ONE_PERCENT",
            threePercent: "THREE_PERCENT"
          };
          bullionObj.goldBullion.push(coinObj);
          break;
        case "Platinum Bullion":
          coinObj = {
            Name: spotPrice.Name,
            Bid: `$${spotPrice.Bid}`,
            halfPercent: "HALF PERCENT",
            onePercent: "ONE_PERCENT",
            threePercent: "THREE_PERCENT"
          };
          bullionObj.platPalBullion.push(coinObj);
          break;
        case "Silver Bullion":
          coinObj = {
            Name: spotPrice.Name,
            Bid: `$${spotPrice.Bid}`,
            halfPercent: "HALF PERCENT",
            onePercent: "ONE_PERCENT",
            threePercent: "THREE_PERCENT"
          };
          bullionObj.silverBullion.push(coinObj);
          break;
        case "Palladium Bullion":
          coinObj = {
            Name: spotPrice.Name,
            Bid: `$${spotPrice.Bid}`,
            halfPercent: "HALF PERCENT",
            onePercent: "ONE_PERCENT",
            threePercent: "THREE_PERCENT"
          };
          bullionObj.platPalBullion.push(coinObj);
          break;
        case "Pre-1933 US Gold":
          if (
            !spotPrice.Name.includes("Indian") &&
            spotPrice.Name.includes("Liberty")
          ) {
            coinObj = {
              Name: spotPrice.Name,
              Bid: `$${spotPrice.Bid}`,
              threePercent: "THREE PERCENT",
              fivePercent: "FIVE_PERCENT",
              sevenPercent: `$${sevenPercentForm(spotPrice.Bid)}`
            };
            bullionObj.goldLiberty.push(coinObj);
          } else if (
            spotPrice.Name.includes("St. Gauden") ||
            spotPrice.Name.includes("Indian")
          ) {
            coinObj = {
              Name: spotPrice.Name,
              Bid: `$${spotPrice.Bid}`,
              threePercent: "THREE PERCENT",
              fivePercent: "FIVE_PERCENT",
              sevenPercent: `$${sevenPercentForm(spotPrice.Bid)}`
            };
            bullionObj.goldIndianStG.push(coinObj);
            break;
          }
          break;
        case "Silver Dollars":
          coinObj = {
            Name: spotPrice.Name,
            Bid: `$${spotPrice.Bid}`,
            threePercent: "THREE PERCENT",
            fivePercent: "FIVE_PERCENT",
            sevenPercent: `$${sevenPercentForm(spotPrice.Bid)}`
          };
          bullionObj.silverAndHalfDollars.push(coinObj);
          break;
        case "Half Dollars":
          coinObj = {
            Name: spotPrice.Name,
            Bid: `$${spotPrice.Bid}`,
            threePercent: "THREE PERCENT",
            fivePercent: "FIVE_PERCENT",
            sevenPercent: `$${sevenPercentForm(spotPrice.Bid)}`
          };
          bullionObj.silverAndHalfDollars.push(coinObj);
          break;
        case "Proof & Certified":
          if (
            spotPrice.Name.includes("Proof") ||
            spotPrice.Name.includes("BU/PRF") ||
            spotPrice.Name.includes("Gold Canadian")
          ) {
            coinObj = {
              Name: spotPrice.Name,
              Bid: `$${spotPrice.Bid}`,
              fivePercent: "FIVE_PERCENT",
              sixPercent: "SIX_PERCENT",
              eightPercent: "EIGHT_PERCENT"
            };
            bullionObj.goldProofCertEx.push(coinObj);
            break;
          } else if (spotPrice.Name.includes("Liberty MS-")) {
            coinObj = {
              Name: spotPrice.Name,
              Bid: `$${spotPrice.Bid}`,
              fivePercent: "FIVE_PERCENT",
              sixPercent: "SIX_PERCENT",
              eightPercent: "EIGHT_PERCENT"
            };
            bullionObj.numismaticGoldLiberty.push(coinObj);
            break;
          } else if (
            spotPrice.Name.includes("Indian") &&
            spotPrice.AssetClass === "Numismatic" &&
            spotPrice.Name.includes("MS")
          ) {
            coinObj = {
              Name: spotPrice.Name,
              Bid: `$${spotPrice.Bid}`,
              fivePercent: "FIVE_PERCENT",
              sixPercent: "SIX_PERCENT",
              eightPercent: "EIGHT_PERCENT"
            };
            bullionObj.numismaticGoldIndianStG.push(coinObj);
            break;
          } else if (
            spotPrice.Name.includes("Silver Morgan") ||
            spotPrice.Name.includes("Silver Peace")
          ) {
            coinObj = {
              Name: spotPrice.Name,
              Bid: `$${spotPrice.Bid}`,
              fivePercent: "FIVE_PERCENT",
              sixPercent: "SIX_PERCENT",
              eightPercent: "EIGHT_PERCENT"
            };
            bullionObj.silverProofCert.push(coinObj);
            break;
          }

          break;
        case "Exclusive Coins":
          if (
            spotPrice.Name.includes("Proof") ||
            spotPrice.Name.includes("BU/PRF") ||
            spotPrice.Name.includes("Gold Canadian")
          ) {
            coinObj = {
              Name: spotPrice.Name,
              Bid: `$${spotPrice.Bid}`,
              fivePercent: "FIVE_PERCENT",
              sixPercent: "SIX_PERCENT",
              eightPercent: "EIGHT_PERCENT"
            };
            bullionObj.goldProofCertEx.push(coinObj);
            break;
          }
          break;
      }
    });

    let assetClasses = {
      bullion: bullionObj
    };

    this.setState({ assetClasses });
  }
}

export default DataTable;