module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Games', [
    {
      name:'Simpsons',
      turn:1,
      winner:'None',
      status:'In-Progress',
      playerCounter:0,
      gameBoard:JSON.stringify({
        "tablero": {
          "1": {"x": 45, "y": 483},
          "2": {"x": 110, "y": 483},
          "3": {"x": 170, "y": 483},
          "4": {"x": 235, "y": 483},
          "5": {"x": 295, "y": 483},
          "6": {"x": 360, "y": 483},
          "7": {"x": 422, "y": 483},
          "8": {"x": 485, "y": 483},
          "9": {"x": 485, "y": 420},
          "10": {"x": 422, "y": 420},
          "11": {"x": 360, "y": 420},
          "12": {"x": 295, "y": 420},
          "13": {"x": 235, "y": 420},
          "14": {"x": 170, "y": 420},
          "15": {"x": 110, "y": 420},
          "16": {"x": 45, "y": 420},
          "17": {"x": 45, "y": 355},
          "18": {"x": 110, "y": 355},
          "19": {"x": 170, "y": 355},
          "20": {"x": 235, "y": 355},
          "21": {"x": 295, "y": 355},
          "22": {"x": 360, "y": 355},
          "23": {"x": 422, "y": 355},
          "24": {"x": 485, "y": 355},
          "25": {"x": 485, "y": 295},
          "26": {"x": 422, "y": 295},
          "27": {"x": 360, "y": 295},
          "28": {"x": 295, "y": 295},
          "29": {"x": 235, "y": 295},
          "30": {"x": 170, "y": 295},
          "31": {"x": 110, "y": 295},
          "32": {"x": 45, "y": 295},
          "33": {"x": 45, "y": 234},
          "34": {"x": 110, "y": 234},
          "35": {"x": 170, "y": 234},
          "36": {"x": 235, "y": 234},
          "37": {"x": 295, "y": 234},
          "38": {"x": 360, "y": 234},
          "39": {"x": 422, "y": 234},
          "40": {"x": 485, "y": 234},
          "41": {"x": 485, "y": 170},
          "42": {"x": 422, "y": 170},
          "43": {"x": 360, "y": 170},
          "44": {"x": 295, "y": 170},
          "45": {"x": 235, "y": 170},
          "46": {"x": 170, "y": 170},
          "47": {"x": 110, "y": 170},
          "48": {"x": 45, "y": 170},
          "49": {"x": 45, "y": 110},
          "50": {"x": 110, "y": 110},
          "51": {"x": 170, "y": 110},
          "52": {"x": 235, "y": 110},
          "53": {"x": 295, "y": 110},
          "54": {"x": 360, "y": 110},
          "55": {"x": 422, "y": 110},
          "56": {"x": 485, "y": 110},
          "57": {"x": 485, "y": 47},
          "58": {"x": 422, "y": 47},
          "59": {"x": 360, "y": 47},
          "60": {"x": 295, "y": 47},
          "61": {"x": 235, "y": 47},
          "62": {"x": 170, "y": 47},
          "63": {"x": 110, "y": 47},
          "64": {"x": 45, "y": 47}
          
      },
      "escaleras": {
          1: {"fin": 19},
          17: {"fin": 31},
          22: {"fin": 50},
          42: {"fin": 54},
          7: {"fin": 25},
          4: {"fin": 11}
      },
      "serpientes": {
          13: {"fin": 5},
          47: {"fin": 14},
          62: {"fin": 34},
          53: {"fin": 20},
          38: {"fin": 9},
          57: {"fin": 26}
      },
      "jugadores":{ 
          1: {"casilla": 1, "color": "red"},
          2: {"casilla": 1, "color": "blue"},
          3: {"casilla": 1, "color": "green"},
          4: {"casilla": 1, "color": "yellow"}
      }
      }),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name:'Juego 2',
      turn:2,
      winner:'None',
      status:'In-Progress',
      playerCounter:0,
      gameBoard:JSON.stringify({
        "tablero": {
          "1": {"x": 45, "y": 483},
          "2": {"x": 110, "y": 483},
          "3": {"x": 170, "y": 483},
          "4": {"x": 235, "y": 483},
          "5": {"x": 295, "y": 483},
          "6": {"x": 360, "y": 483},
          "7": {"x": 422, "y": 483},
          "8": {"x": 485, "y": 483},
          "9": {"x": 485, "y": 420},
          "10": {"x": 422, "y": 420},
          "11": {"x": 360, "y": 420},
          "12": {"x": 295, "y": 420},
          "13": {"x": 235, "y": 420},
          "14": {"x": 170, "y": 420},
          "15": {"x": 110, "y": 420},
          "16": {"x": 45, "y": 420},
          "17": {"x": 45, "y": 355},
          "18": {"x": 110, "y": 355},
          "19": {"x": 170, "y": 355},
          "20": {"x": 235, "y": 355},
          "21": {"x": 295, "y": 355},
          "22": {"x": 360, "y": 355},
          "23": {"x": 422, "y": 355},
          "24": {"x": 485, "y": 355},
          "25": {"x": 485, "y": 295},
          "26": {"x": 422, "y": 295},
          "27": {"x": 360, "y": 295},
          "28": {"x": 295, "y": 295},
          "29": {"x": 235, "y": 295},
          "30": {"x": 170, "y": 295},
          "31": {"x": 110, "y": 295},
          "32": {"x": 45, "y": 295},
          "33": {"x": 45, "y": 234},
          "34": {"x": 110, "y": 234},
          "35": {"x": 170, "y": 234},
          "36": {"x": 235, "y": 234},
          "37": {"x": 295, "y": 234},
          "38": {"x": 360, "y": 234},
          "39": {"x": 422, "y": 234},
          "40": {"x": 485, "y": 234},
          "41": {"x": 485, "y": 170},
          "42": {"x": 422, "y": 170},
          "43": {"x": 360, "y": 170},
          "44": {"x": 295, "y": 170},
          "45": {"x": 235, "y": 170},
          "46": {"x": 170, "y": 170},
          "47": {"x": 110, "y": 170},
          "48": {"x": 45, "y": 170},
          "49": {"x": 45, "y": 110},
          "50": {"x": 110, "y": 110},
          "51": {"x": 170, "y": 110},
          "52": {"x": 235, "y": 110},
          "53": {"x": 295, "y": 110},
          "54": {"x": 360, "y": 110},
          "55": {"x": 422, "y": 110},
          "56": {"x": 485, "y": 110},
          "57": {"x": 485, "y": 47},
          "58": {"x": 422, "y": 47},
          "59": {"x": 360, "y": 47},
          "60": {"x": 295, "y": 47},
          "61": {"x": 235, "y": 47},
          "62": {"x": 170, "y": 47},
          "63": {"x": 110, "y": 47},
          "64": {"x": 45, "y": 47}
          
      },
      "escaleras": {
          1: {"fin": 19},
          17: {"fin": 31},
          22: {"fin": 50},
          42: {"fin": 54},
          7: {"fin": 25},
          4: {"fin": 11}
      },
      "serpientes": {
          13: {"fin": 5},
          47: {"fin": 14},
          62: {"fin": 34},
          53: {"fin": 20},
          38: {"fin": 9},
          57: {"fin": 26}
      },
      "jugadores":{ 
          5: {"casilla": 1, "color": "red"},
          6: {"casilla": 1, "color": "blue"},
          7: {"casilla": 1, "color": "green"},
          8: {"casilla": 1, "color": "yellow"}
      },
      }),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Games', null, {}),
};