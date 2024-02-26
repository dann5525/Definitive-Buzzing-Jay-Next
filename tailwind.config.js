module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "900": "#D9D9D9",
          "White": "#FFFFFF",
          "Black": "#000000"
        },
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "Primary": {
          "100": "#424266ff",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "FiveUnits": "80px",
        "FourUnits": "64px",
        "Unit": "16px",
        "SixUnits": "96px",
        "ThreeUnits": "48px",
        "TwoUnits": "32px",
        "HalfUnit": "8px",
        "OneAndHalfUnits": "24px"
      },
      "borderRadius": {
        "Radius2": "2px",
        "Round": "50%",
        "Radius4": "4px",
        "Radius8": "8px"
      },
      "scale": {
        "XLarge": "192px",
        "Small": "48px",
        "MaxWidth": "1400px",
        "XSmall": "16px",
        "XXLarge": "288px",
        "Large": "144px",
        "Medium": "96px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ]
}