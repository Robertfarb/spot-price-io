import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import SectionHeader from './SectionHeader';
 
import {
  MuiThemeProvider,
} from "@material-ui/core/styles";
import {
  apiKeys,
  bidMarkup,
  bullionColumns,
  bullionHalfPercent,
  bullionOneHalfPercent,
  bullionThreePercent,
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
  semiNumisSevenPercent
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

  render() {
    console.log(this.props);
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
        <h1>Numismatic</h1>
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
          coinObj = {
            Name: spotPrice.Name,
            Bid: `$${bidMarkup(spotPrice.Bid, 'Bullion')}`,
            halfPercent: `$${bullionHalfPercent(
              bidMarkup(spotPrice.Bid, "Bullion")
            )}`,
            onePercent: `$${bullionOneHalfPercent(
              bidMarkup(spotPrice.Bid, "Bullion")
            )}`,
            threePercent: `$${bullionThreePercent(
              bidMarkup(spotPrice.Bid, "Bullion")
            )}`
          };
          bullionObj.goldBullion.push(coinObj);
          break;
        case "Platinum Bullion":
          coinObj = {
            Name: spotPrice.Name,
            Bid: `$${bidMarkup(spotPrice.Bid, 'Bullion')}`,
            halfPercent: `$${bullionHalfPercent(
              bidMarkup(spotPrice.Bid, "Bullion")
            )}`,
            onePercent: `$${bullionOneHalfPercent(
              bidMarkup(spotPrice.Bid, "Bullion")
            )}`,
            threePercent: `$${bullionThreePercent(
              bidMarkup(spotPrice.Bid, "Bullion")
            )}`
          };
          bullionObj.platPalBullion.push(coinObj);
          break;
        case "Silver Bullion":
          coinObj = {
            Name: spotPrice.Name,
            Bid: `$${bidMarkup(spotPrice.Bid, 'Bullion')}`,
            halfPercent: `$${bullionHalfPercent(
              bidMarkup(spotPrice.Bid, "Bullion")
            )}`,
            onePercent: `$${bullionOneHalfPercent(
              bidMarkup(spotPrice.Bid, "Bullion")
            )}`,
            threePercent: `$${bullionThreePercent(
              bidMarkup(spotPrice.Bid, "Bullion")
            )}`
          };
          bullionObj.silverBullion.push(coinObj);
          break;
        case "Palladium Bullion":
          coinObj = {
            Name: spotPrice.Name,
            Bid: `$${bidMarkup(spotPrice.Bid, 'Bullion')}`,
            halfPercent: `$${bullionHalfPercent(
              bidMarkup(spotPrice.Bid, "Bullion")
            )}`,
            onePercent: `$${bullionOneHalfPercent(
              bidMarkup(spotPrice.Bid, "Bullion")
            )}`,
            threePercent: `$${bullionThreePercent(
              bidMarkup(spotPrice.Bid, "Bullion")
            )}`
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
              Bid: `$${bidMarkup(spotPrice.Bid, "Numis")}`,
              threePercent: `$${semiNumisThreePercent(
                bidMarkup(spotPrice.Bid, "Numis")
              )}`,
              fivePercent: `$${semiNumisFivePercent(
                bidMarkup(spotPrice.Bid, "Numis")
              )}`,
              sevenPercent: `$${semiNumisSevenPercent(
                bidMarkup(spotPrice.Bid, "Numis")
              )}`
            };
            bullionObj.goldLiberty.push(coinObj);
          } else if (
            spotPrice.Name.includes("St. Gauden") ||
            spotPrice.Name.includes("Indian")
          ) {
            coinObj = {
              Name: spotPrice.Name,
              Bid: `$${bidMarkup(spotPrice.Bid, "Numis")}`,
              threePercent: `$${semiNumisThreePercent(
                bidMarkup(spotPrice.Bid, "Numis")
              )}`,
              fivePercent: `$${semiNumisFivePercent(
                bidMarkup(spotPrice.Bid, "Numis")
              )}`,
              sevenPercent: `$${semiNumisSevenPercent(
                bidMarkup(spotPrice.Bid, "Numis")
              )}`
            };
            bullionObj.goldIndianStG.push(coinObj);
            break;
          }
          break;
        case "Silver Dollars":
          coinObj = {
            Name: spotPrice.Name,
            Bid: `$${bidMarkup(spotPrice.Bid, "Numis")}`,
            threePercent: `$${semiNumisThreePercent(
              bidMarkup(spotPrice.Bid, "Numis")
            )}`,
            fivePercent: `$${semiNumisFivePercent(
              bidMarkup(spotPrice.Bid, "Numis")
            )}`,
            sevenPercent: `$${semiNumisSevenPercent(
              bidMarkup(spotPrice.Bid, "Numis")
            )}`
          };
          bullionObj.silverAndHalfDollars.push(coinObj);
          break;
        case "Half Dollars":
          coinObj = {
            Name: spotPrice.Name,
            Bid: `$${bidMarkup(spotPrice.Bid, "Numis")}`,
            threePercent: `$${semiNumisThreePercent(
              bidMarkup(spotPrice.Bid, "Numis")
            )}`,
            fivePercent: `$${semiNumisFivePercent(
              bidMarkup(spotPrice.Bid, "Numis")
            )}`,
            sevenPercent: `$${semiNumisSevenPercent(
              bidMarkup(spotPrice.Bid, "Numis")
            )}`
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
              Bid: `$${bidMarkup(spotPrice.Bid, "Numis")}`,
              fivePercent: `$${numisFivePercent(
                bidMarkup(spotPrice.Bid, "Numis")
              )}`,
              sixPercent: `$${numisSixPercent(
                bidMarkup(spotPrice.Bid, "Numis")
              )}`,
              eightPercent: `$${numisEightPercent(
                bidMarkup(spotPrice.Bid, "Numis")
              )}`
            };
            bullionObj.goldProofCertEx.push(coinObj);
            break;
          } else if (spotPrice.Name.includes("Liberty MS-")) {
            coinObj = {
              Name: spotPrice.Name,
              Bid: `$${bidMarkup(spotPrice.Bid, "Numis")}`,
              fivePercent: `$${numisFivePercent(
                bidMarkup(spotPrice.Bid, "Numis")
              )}`,
              sixPercent: `$${numisSixPercent(
                bidMarkup(spotPrice.Bid, "Numis")
              )}`,
              eightPercent: `$${numisEightPercent(
                bidMarkup(spotPrice.Bid, "Numis")
              )}`
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
              Bid: `$${bidMarkup(spotPrice.Bid, "Numis")}`,
              fivePercent: `$${numisFivePercent(
                bidMarkup(spotPrice.Bid, "Numis")
              )}`,
              sixPercent: `$${numisSixPercent(
                bidMarkup(spotPrice.Bid, "Numis")
              )}`,
              eightPercent: `$${numisEightPercent(
                bidMarkup(spotPrice.Bid, "Numis")
              )}`
            };
            bullionObj.numismaticGoldIndianStG.push(coinObj);
            break;
          } else if (
            spotPrice.Name.includes("Silver Morgan") ||
            spotPrice.Name.includes("Silver Peace")
          ) {
            coinObj = {
              Name: spotPrice.Name,
              Bid: `$${bidMarkup(spotPrice.Bid, "Numis")}`,
              fivePercent: `$${numisFivePercent(
                bidMarkup(spotPrice.Bid, "Numis")
              )}`,
              sixPercent: `$${numisSixPercent(
                bidMarkup(spotPrice.Bid, "Numis")
              )}`,
              eightPercent: `$${numisEightPercent(
                bidMarkup(spotPrice.Bid, "Numis")
              )}`
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
              Bid: `$${bidMarkup(spotPrice.Bid, "Numis")}`,
              fivePercent: `$${numisFivePercent(
                bidMarkup(spotPrice.Bid, "Numis")
              )}`,
              sixPercent: `$${numisSixPercent(
                bidMarkup(spotPrice.Bid, "Numis")
              )}`,
              eightPercent: `$${numisEightPercent(
                bidMarkup(spotPrice.Bid, "Numis")
              )}`
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