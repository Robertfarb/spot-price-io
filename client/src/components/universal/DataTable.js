import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import SectionHeader from './SectionHeader';
 
import {
  MuiThemeProvider,
} from "@material-ui/core/styles";
import {
  bullionColumns,
  createBullionCoin,
  createNumisCoin,
  createSemiNumisCoin,
  getBullionTheme,
  getSemiNumisTheme,
  getNumisTheme,
  numismaticColumns,
  options,
  semiNumismaticColumns,
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
      </div>
    );
  }

  cleanData() {
    const spotPrices = this.props.livePrices.data;

    let bullionObj = {
      goldBullion: [
        createBullionCoin(spotPrices.find(obj => obj.SKU === "GAE50")),
        createBullionCoin(spotPrices.find(obj => obj.SKU === "GAE25")),
        createBullionCoin(spotPrices.find(obj => obj.SKU === "GAE10")),
        createBullionCoin(spotPrices.find(obj => obj.SKU === "GAE5")),
        createBullionCoin(spotPrices.find(obj => obj.SKU === "GAB50")),
        createBullionCoin(spotPrices.find(obj => obj.SKU === "GCM1")),
        createBullionCoin(spotPrices.find(obj => obj.SKU === "GAP1")),
        createBullionCoin(spotPrices.find(obj => obj.SKU === "GSK1")),
        createBullionCoin(spotPrices.find(obj => obj.SKU === "GB1")),
        createBullionCoin(spotPrices.find(obj => obj.SKU === "GB10")),
        createBullionCoin(spotPrices.find(obj => obj.SKU === "GB10GR")),
        createBullionCoin(spotPrices.find(obj => obj.SKU === "GB50GRV")),
        createBullionCoin(spotPrices.find(obj => obj.SKU === "GBSK")),
        createBullionCoin(spotPrices.find(obj => obj.SKU === "GBS")),
        createBullionCoin(spotPrices.find(obj => obj.SKU === "GSFPRE")),
        createBullionCoin(spotPrices.find(obj => obj.SKU === "GSF")),
      ],
      silverBullion: [
        createBullionCoin(spotPrices.find(obj => obj.SKU === "SAE")),
        createBullionCoin(spotPrices.find(obj => obj.SKU === "SCML")),
        createBullionCoin(spotPrices.find(obj => obj.SKU === "SAP")),
        createBullionCoin(spotPrices.find(obj => obj.SKU === "SB1")),
        createBullionCoin(spotPrices.find(obj => obj.SKU === "SB10")),
        createBullionCoin(spotPrices.find(obj => obj.SKU === "SB100")),
        createBullionCoin(spotPrices.find(obj => obj.SKU === "SR1")),
        createBullionCoin(spotPrices.find(obj => obj.SKU === "SB100GRV")),
      ],
      platPalBullion: [
        createBullionCoin(spotPrices.find(obj => obj.SKU === "PLB1")),
        createBullionCoin(spotPrices.find(obj => obj.SKU === "PDCML")),
        createBullionCoin(spotPrices.find(obj => obj.SKU === "PLAE100")),
        createBullionCoin(spotPrices.find(obj => obj.SKU === "PLB1")),
        createBullionCoin(spotPrices.find(obj => obj.SKU === "PCML")),
      ],
      goldLiberty: [
        createSemiNumisCoin(spotPrices.find(obj => obj.SKU === "G2LC")),
        createSemiNumisCoin(spotPrices.find(obj => obj.SKU === "G2LB")),
        createSemiNumisCoin(spotPrices.find(obj => obj.SKU === "G5LC")),
        createSemiNumisCoin(spotPrices.find(obj => obj.SKU === "G5LB")),
        createSemiNumisCoin(spotPrices.find(obj => obj.SKU === "G10LC")),
        createSemiNumisCoin(spotPrices.find(obj => obj.SKU === "G10LB")),
        createSemiNumisCoin(spotPrices.find(obj => obj.SKU === "G20LC")),
        createSemiNumisCoin(spotPrices.find(obj => obj.SKU === "G20LB")),
      ],
      silverAndHalfDollars: [
        createSemiNumisCoin(spotPrices.find(obj => obj.SKU === "SKHC")),
        createSemiNumisCoin(spotPrices.find(obj => obj.SKU === "SKHB")),
        createSemiNumisCoin(spotPrices.find(obj => obj.SKU === "SFHC")),
        createSemiNumisCoin(spotPrices.find(obj => obj.SKU === "SWHC")),
        createSemiNumisCoin(spotPrices.find(obj => obj.SKU === "SMDC")),
        createSemiNumisCoin(spotPrices.find(obj => obj.SKU === "SJ90")),
        createSemiNumisCoin(spotPrices.find(obj => obj.SKU === "SP1C")),
        createSemiNumisCoin(spotPrices.find(obj => obj.SKU === "SP1A")),
        createSemiNumisCoin(spotPrices.find(obj => obj.SKU === "SP1B")),
        createSemiNumisCoin(spotPrices.find(obj => obj.SKU === "SM1C")),
        createSemiNumisCoin(spotPrices.find(obj => obj.SKU === "SM1PC")),
        createSemiNumisCoin(spotPrices.find(obj => obj.SKU === "SM1A")),
        createSemiNumisCoin(spotPrices.find(obj => obj.SKU === "SM1PB")),
      ],
      goldProofCertEx: [
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G10COM")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G5COM")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "GCPBC")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "GCAF")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "GCWF")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "GCTMLQ18")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "GGUINEA2018")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "GAEP50")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "GAEP25")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "GAEP10")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "GAEP5")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "GAEP4P")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "GAEP2P")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "PLAEP100")),
        // createNumisCoin(spotPrices.find(obj => obj.SKU === "SAEP")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "SCAF")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "SCPBC")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "SCSF")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "SCGB")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "SATB")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "SCTL2OZ17")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "SGUINEA2018")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "SP14")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "SP15")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "SM13")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "SM14")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "SM15")),

      ],
      goldIndianStG: [
        createSemiNumisCoin(spotPrices.find(obj => obj.SKU === "G2IC")),
        createSemiNumisCoin(spotPrices.find(obj => obj.SKU === "G2IB")),
        createSemiNumisCoin(spotPrices.find(obj => obj.SKU === "G5IC")),
        createSemiNumisCoin(spotPrices.find(obj => obj.SKU === "G5IB")),
        createSemiNumisCoin(spotPrices.find(obj => obj.SKU === "G10IC")),
        createSemiNumisCoin(spotPrices.find(obj => obj.SKU === "G10IB")),
        createSemiNumisCoin(spotPrices.find(obj => obj.SKU === "G20SC")),
        createSemiNumisCoin(spotPrices.find(obj => obj.SKU === "G20SB")),
      ],
      numismaticGoldLiberty: [
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G2L1")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G5L1")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G10L1")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G20L1")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G2L2")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G5L2")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G10L2")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G20L2")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G2L3")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G5L3")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G10L3")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G20L3")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G2L4")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G5L4")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G10L4")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G20L4")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G2L5")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G5L5")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G10L5")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G20L5")),
      ],
      numismaticGoldIndianStG: [
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G2I1")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G5I1")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G10I1")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G20S1")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G2I2")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G5I2")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G10I2")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G20S2")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G2I3")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G5I3")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G10I3")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G20S3")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G2I4")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G5I4")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G10I4")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G20S4")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G2I5")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G5I5")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G10I5")),
        createNumisCoin(spotPrices.find(obj => obj.SKU === "G20S5")),
      ],
    };

    console.log(spotPrices)

    let assetClasses = {
      bullion: bullionObj
    };

    this.setState({ assetClasses });
  }
}

export default DataTable;