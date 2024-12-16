var APP_DATA = {
  "scenes": [
    {
      "id": "0-casa-1",
      "name": "casa 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.050415960289317496,
          "pitch": 0.34651063077964395,
          "rotation": 0,
          "target": "1-intermediaria"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-intermediaria",
      "name": "intermediaria",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": 1.2692512753109657,
          "pitch": -0.03264357862523859,
          "rotation": 0,
          "target": "0-casa-1"
        },
        {
          "yaw": 3.0067087010795674,
          "pitch": -0.05631725682198585,
          "rotation": 0,
          "target": "3-casa-3"
        },
        {
          "yaw": -1.6406706450695197,
          "pitch": 0.040845688961397286,
          "rotation": 0,
          "target": "2-casa-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.37241961813830926,
          "pitch": -0.6322014743312607,
          "title": "Ceu",
          "text": "Apenas para testes&nbsp;"
        },
        {
          "yaw": 1.2846726021631767,
          "pitch": -0.3219526512588704,
          "title": "Casa de comando",
          "text": "Controle das bombas"
        },
        {
          "yaw": -1.6345308728526309,
          "pitch": -0.39352989629653123,
          "title": "Agua industrial",
          "text": "Local onde é distribuida a agua industrial&nbsp;"
        }
      ]
    },
    {
      "id": "2-casa-2",
      "name": "casa 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.962177985152942,
          "pitch": 0.3699241969493716,
          "rotation": 0,
          "target": "1-intermediaria"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.0523633157310712,
          "pitch": -0.018526486675400022,
          "title": "Agua não tratada",
          "text": "Agua que ainda não passou pelo devido tratamento"
        },
        {
          "yaw": -0.23294093234939872,
          "pitch": 0.02884732518851507,
          "title": "balão volumetrico",
          "text": "Visa pressurizar a tubulação"
        },
        {
          "yaw": 0.9593082730349476,
          "pitch": -0.04864527231047333,
          "title": "cabos",
          "text": "Pretos para a comunicação , sizas de baixa bitola para a alimentação"
        },
        {
          "yaw": 3.072566972777814,
          "pitch": -0.5957201693532284,
          "title": "Mine guindaste",
          "text": "Text"
        }
      ]
    },
    {
      "id": "3-casa-3",
      "name": "casa 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.141171976114684,
          "pitch": 0.017017414479184367,
          "rotation": 0,
          "target": "1-intermediaria"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.2010483519115045,
          "pitch": -0.13151503573922163,
          "title": "sensores do cofre ANDREA",
          "text": "Text"
        },
        {
          "yaw": 1.8260251773442997,
          "pitch": -0.12334578520867723,
          "title": "BSR",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Test-project",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
