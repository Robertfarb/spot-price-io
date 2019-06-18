import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import SectionHeader from './SectionHeader';
 
import {
  MuiThemeProvider,
} from "@material-ui/core/styles";
import {
  bidMarkup,
  bullionColumns,
  bullionHalfPercent,
  bullionOneHalfPercent,
  bullionThreePercent,
  createBullionCoin,
  createNumisCoin,
  createSemiNumisCoin,
  getBullionTheme,
  getSemiNumisTheme,
  getNumisTheme,
  numismaticColumns,
  numisFivePercent,
  numisSixPercent,
  numisEightPercent,
  options,
  semiNumismaticColumns,
  semiNumisThreePercent,
  semiNumisFivePercent,
  semiNumisSevenPercent,
  setHeight,
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

  shouldComponentUpdate() {
    return true;
  }

  componentDidUpdate() {
    setHeight();
  }

  render() {
    const { assetClasses } = this.state;
    if (!assetClasses.bullion) {
      return <LoadingSpinner />;
    }

    return (
      <div>
        <SectionHeader title="Bullion Products" />
        <MuiThemeProvider theme={getBullionTheme()}>
          <MUIDataTable
            height="95vh"
            data={assetClasses.bullion.goldBullion}
            columns={bullionColumns}
            options={options}
            title="Gold Bullion"
          />
        </MuiThemeProvider>
        <MuiThemeProvider theme={getBullionTheme()}>
          <MUIDataTable
            height="95vh"
            data={assetClasses.bullion.silverBullion}
            columns={bullionColumns}
            options={options}
            title="Silver Bullion"
          />
        </MuiThemeProvider>
        <MuiThemeProvider theme={getBullionTheme()}>
          <MUIDataTable
            height="95vh"
            data={assetClasses.bullion.platPalBullion}
            columns={bullionColumns}
            options={options}
            title="Platinum & Palladium Bullion"
          />
        </MuiThemeProvider>
        <SectionHeader title="Semi Numismatic" />
        <MuiThemeProvider theme={getSemiNumisTheme()}>
          <MUIDataTable
            height="95vh"
            data={assetClasses.bullion.goldLiberty}
            columns={semiNumismaticColumns}
            options={options}
            title="Gold Liberty Series"
          />
        </MuiThemeProvider>
        <MuiThemeProvider theme={getSemiNumisTheme()}>
          <MUIDataTable
            height="95vh"
            data={assetClasses.bullion.goldIndianStG}
            columns={semiNumismaticColumns}
            options={options}
            title="Gold Indian/St. Gauden Series"
          />
        </MuiThemeProvider>
        <MuiThemeProvider theme={getSemiNumisTheme()}>
          <MUIDataTable
            height="95vh"
            data={assetClasses.bullion.silverAndHalfDollars}
            columns={semiNumismaticColumns}
            options={options}
            title="Silver Dollars & Half Dollars"
          />
        </MuiThemeProvider>
        <SectionHeader title="Numismatic" />
        <MuiThemeProvider theme={getNumisTheme()}>
          <MUIDataTable
            height="95vh"
            data={assetClasses.bullion.goldProofCertEx}
            columns={numismaticColumns}
            options={options}
            title="Gold Proof / Certified / Exclusive"
          />
        </MuiThemeProvider>
        <MuiThemeProvider theme={getNumisTheme()}>
          <MUIDataTable
            height="95vh"
            data={assetClasses.bullion.numismaticGoldLiberty}
            columns={numismaticColumns}
            options={options}
            title="Gold Liberty Series"
          />
        </MuiThemeProvider>
        <MuiThemeProvider theme={getNumisTheme()}>
          <MUIDataTable
            height="95vh"
            data={assetClasses.bullion.numismaticGoldIndianStG}
            columns={numismaticColumns}
            options={options}
            title="Gold Indian / St. Gauden Series"
          />
        </MuiThemeProvider>
        <MuiThemeProvider theme={getNumisTheme()}>
          <MUIDataTable
            height="95vh"
            data={assetClasses.bullion.silverProofCert}
            columns={numismaticColumns}
            options={options}
            title="Silver Proof / Certified"
          />
        </MuiThemeProvider>
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
          coinObj = createBullionCoin(spotPrice);
          bullionObj.goldBullion.push(coinObj);
          break;
        case "Platinum Bullion":
          coinObj = createBullionCoin(spotPrice);
          bullionObj.platPalBullion.push(coinObj);
          break;
        case "Silver Bullion":
          coinObj = createBullionCoin(spotPrice);
          bullionObj.silverBullion.push(coinObj);
          break;
        case "Palladium Bullion":
          coinObj = createBullionCoin(spotPrice);
          bullionObj.platPalBullion.push(coinObj);
          break;
        case "Pre-1933 US Gold":
          if (
            !spotPrice.Name.includes("Indian") &&
            spotPrice.Name.includes("Liberty")
          ) {
            coinObj = createSemiNumisCoin(spotPrice);
            bullionObj.goldLiberty.push(coinObj);
          } else if (
            spotPrice.Name.includes("St. Gauden") ||
            spotPrice.Name.includes("Indian")
          ) {
            coinObj = createSemiNumisCoin(spotPrice);
            bullionObj.goldIndianStG.push(coinObj);
            break;
          }
          break;
        case "Silver Dollars":
          coinObj = createSemiNumisCoin(spotPrice);
          bullionObj.silverAndHalfDollars.push(coinObj);
          break;
        case "Half Dollars":
          coinObj = createSemiNumisCoin(spotPrice);
          bullionObj.silverAndHalfDollars.push(coinObj);
          break;
        case "Proof & Certified":
          if (
            spotPrice.Name.includes("Proof") ||
            spotPrice.Name.includes("BU/PRF") ||
            spotPrice.Name.includes("Gold Canadian")
          ) {
            coinObj = createNumisCoin(spotPrice);
            bullionObj.goldProofCertEx.push(coinObj);
            break;
          } else if (spotPrice.Name.includes("Liberty MS-")) {
            coinObj = createNumisCoin(spotPrice);
            bullionObj.numismaticGoldLiberty.push(coinObj);
            break;
          } else if (
            spotPrice.Name.includes("Indian") &&
            spotPrice.AssetClass === "Numismatic" &&
            spotPrice.Name.includes("MS")
          ) {
            coinObj = createNumisCoin(spotPrice);
            bullionObj.numismaticGoldIndianStG.push(coinObj);
            break;
          } else if (
            spotPrice.Name.includes("Silver Morgan") ||
            spotPrice.Name.includes("Silver Peace")
          ) {
            coinObj = createNumisCoin(spotPrice);
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
            coinObj = createNumisCoin(spotPrice);
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