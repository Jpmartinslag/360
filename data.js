var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada",
      "name": "entrada",
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
          "yaw": -0.2810369599566407,
          "pitch": 0.03199107307248639,
          "rotation": 5.497787143782138,
          "target": "1-partes_disjuntores"
        },
        {
          "yaw": -0.04392204973095559,
          "pitch": 0.039910389187280515,
          "rotation": 0,
          "target": "5-parte_entrada_casadecomando"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.5238498071647157,
          "pitch": -0.29395893964864683,
          "title": "SE ALTO ALEGRE DO MARANHÃO&nbsp;",
          "text": "SE abaixadora de 69/13.8 kV"
        },
        {
          "yaw": -0.3921709609437105,
          "pitch": -0.10736758812304181,
          "title": "William bonner",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-partes_disjuntores",
      "name": "partes_disjuntores",
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
          "yaw": -0.8995602039089015,
          "pitch": 0.014453224454266334,
          "rotation": 7.0685834705770345,
          "target": "2-partes_tsa"
        },
        {
          "yaw": 1.8574933694399371,
          "pitch": 0.12300671288264198,
          "rotation": 0.7853981633974483,
          "target": "0-entrada"
        },
        {
          "yaw": 1.1702807879902473,
          "pitch": 0.07536106096960538,
          "rotation": 17.27875959474387,
          "target": "5-parte_entrada_casadecomando"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6656842213553418,
          "pitch": -0.14641370416416777,
          "title": "11C3",
          "text": "Disjuntor ABB 2024"
        },
        {
          "yaw": -0.005973735240640821,
          "pitch": -0.1738155026740138,
          "title": "11C2",
          "text": "Disjuntor ABB 2024"
        },
        {
          "yaw": 0.6648348826341479,
          "pitch": -0.14214837020648297,
          "title": "11C1",
          "text": "Disjuntor ABB 2024"
        },
        {
          "yaw": -0.6394372812526044,
          "pitch": -0.8123103612506775,
          "title": "Alimentador 3",
          "text": "Atualmente o disjuntor está apenas conectados, mas desenergizados.&nbsp;"
        },
        {
          "yaw": -0.015890317596399584,
          "pitch": -0.9161208448785683,
          "title": "Alimentador 2",
          "text": "Desconectado"
        },
        {
          "yaw": 0.6714606849614988,
          "pitch": -0.7921153748871212,
          "title": "Alimentador 1",
          "text": "Desconectado&nbsp;"
        },
        {
          "yaw": 0.4197663176883708,
          "pitch": -0.07783822465071921,
          "title": "11B1",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-partes_tsa",
      "name": "partes_tsa",
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
          "yaw": 0.777192542282922,
          "pitch": 0.10195439007049956,
          "rotation": 11.780972450961727,
          "target": "1-partes_disjuntores"
        },
        {
          "yaw": 3.01255320782744,
          "pitch": 0.00988986404502512,
          "rotation": 0.7853981633974483,
          "target": "3-parte_trafo"
        },
        {
          "yaw": -1.1590314599406941,
          "pitch": 0.03359303119873047,
          "rotation": 1.5707963267948966,
          "target": "0-entrada"
        },
        {
          "yaw": -2.012048452774092,
          "pitch": 0.029046750681347433,
          "rotation": 10.995574287564278,
          "target": "5-parte_entrada_casadecomando"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.3050791315486361,
          "pitch": -0.36967367265874884,
          "title": "TSA",
          "text": "01T1"
        },
        {
          "yaw": 0.1993621592626571,
          "pitch": -0.03324817676403846,
          "title": "<span style=\"font-size: 13px; background-color: rgba(58, 68, 84, 0.8);\">71C3</span>",
          "text": "<br>"
        },
        {
          "yaw": -0.2561456368973598,
          "pitch": -0.045404210867349803,
          "title": "71C2",
          "text": "Text"
        },
        {
          "yaw": -0.6110120897796847,
          "pitch": -0.03361648070438683,
          "title": "71C1",
          "text": "Text"
        },
        {
          "yaw": -0.9426667881232511,
          "pitch": 0.003604684108292844,
          "title": "71B1",
          "text": "Text"
        },
        {
          "yaw": -2.560229505739839,
          "pitch": -0.12596908555877917,
          "title": "02T1",
          "text": "Dyn1"
        }
      ]
    },
    {
      "id": "3-parte_trafo",
      "name": "parte_trafo",
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
          "yaw": 1.8016275489381322,
          "pitch": 0.13212066828915958,
          "rotation": 12.566370614359176,
          "target": "2-partes_tsa"
        },
        {
          "yaw": 0.9682982481737046,
          "pitch": 0.028319908277856243,
          "rotation": 7.0685834705770345,
          "target": "0-entrada"
        },
        {
          "yaw": -1.1298813594385813,
          "pitch": 0.12778810762648618,
          "rotation": 7.853981633974483,
          "target": "4-parte_trafo_2"
        },
        {
          "yaw": -1.5137650621989884,
          "pitch": 0.10693467159765646,
          "rotation": 0,
          "target": "6-parte_linha_distribuicao_ladocasadecomando"
        },
        {
          "yaw": 0.6403659855198214,
          "pitch": 0.05445592521131104,
          "rotation": 4.71238898038469,
          "target": "5-parte_entrada_casadecomando"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.31152967892692196,
          "pitch": -0.027350697552378733,
          "title": "TM1",
          "text": "Text"
        },
        {
          "yaw": 0.2107720143258085,
          "pitch": 0.056929409489583804,
          "title": "Rele 2414",
          "text": "A foto próxima, será adicionada na V2"
        },
        {
          "yaw": 0.24538243496999534,
          "pitch": -0.11030157734064083,
          "title": "02T1",
          "text": "Placa do trafo, será adicionada na V2"
        }
      ]
    },
    {
      "id": "4-parte_trafo_2",
      "name": "parte_trafo_2",
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
          "yaw": 2.285338595698496,
          "pitch": 0.16562145967726316,
          "rotation": 5.497787143782138,
          "target": "3-parte_trafo"
        },
        {
          "yaw": -2.2911513462892543,
          "pitch": 0.16235551187904385,
          "rotation": 0.7853981633974483,
          "target": "6-parte_linha_distribuicao_ladocasadecomando"
        },
        {
          "yaw": 0.04232709367932408,
          "pitch": 0.20486163688802783,
          "rotation": 0,
          "target": "5-parte_entrada_casadecomando"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7267503719107324,
          "pitch": -0.3799634868233479,
          "title": "12T1",
          "text": "Fabricante GE"
        },
        {
          "yaw": -0.8223981931521447,
          "pitch": 0.05000704147587065,
          "title": "72L1",
          "text": "TC de 69 kV"
        },
        {
          "yaw": -2.286110155152958,
          "pitch": -0.12815270717018556,
          "title": "Para raio",
          "text": "Text"
        },
        {
          "yaw": 1.037769376809944,
          "pitch": 0.03690969509333186,
          "title": "72T1",
          "text": "TC de 69 kV"
        }
      ]
    },
    {
      "id": "5-parte_entrada_casadecomando",
      "name": "parte_entrada_casadecomando",
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
          "yaw": -1.6192167036432288,
          "pitch": 0.09275066858928227,
          "rotation": 0,
          "target": "7-casa_decomando"
        },
        {
          "yaw": 1.5278545704321953,
          "pitch": -0.026271938839064646,
          "rotation": 0,
          "target": "0-entrada"
        },
        {
          "yaw": 1.721813888341961,
          "pitch": 0.052821315127623336,
          "rotation": 0.7853981633974483,
          "target": "2-partes_tsa"
        },
        {
          "yaw": -3.095462075387017,
          "pitch": 0.28734355253219945,
          "rotation": 0,
          "target": "4-parte_trafo_2"
        },
        {
          "yaw": 2.9612846929654264,
          "pitch": -0.02207981887108268,
          "rotation": 4.71238898038469,
          "target": "3-parte_trafo"
        },
        {
          "yaw": -2.9273289247732937,
          "pitch": -0.00696607826335871,
          "rotation": 7.853981633974483,
          "target": "6-parte_linha_distribuicao_ladocasadecomando"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.19689165096106187,
          "pitch": -0.019818417056487903,
          "title": "82B1",
          "text": "Text"
        }
      ]
    },
    {
      "id": "6-parte_linha_distribuicao_ladocasadecomando",
      "name": "parte_linha_distribuicao_ladocasadecomando",
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
          "yaw": 0.836080365299722,
          "pitch": 0.1618936958639008,
          "rotation": 5.497787143782138,
          "target": "4-parte_trafo_2"
        },
        {
          "yaw": -0.8573814593583187,
          "pitch": 0.13850356397184704,
          "rotation": 0.7853981633974483,
          "target": "5-parte_entrada_casadecomando"
        },
        {
          "yaw": -1.1456718126046983,
          "pitch": 0.15932600553695409,
          "rotation": 11.780972450961727,
          "target": "7-casa_decomando"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.4924705664191791,
          "pitch": -0.2821971455830692,
          "title": "92L1",
          "text": "Paraios"
        },
        {
          "yaw": -0.29070629239371826,
          "pitch": -0.1978130015982167,
          "title": "12L1",
          "text": "Text"
        },
        {
          "yaw": 0.8910414806512055,
          "pitch": -0.22429397937010975,
          "title": "92L2",
          "text": "Text"
        },
        {
          "yaw": 2.8132627864960345,
          "pitch": -0.6713780187899197,
          "title": "Linha de distr",
          "text": "Text"
        }
      ]
    },
    {
      "id": "7-casa_decomando",
      "name": "casa_decomando",
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
          "yaw": 1.4836357060252467,
          "pitch": 0.3960553428761866,
          "rotation": 0,
          "target": "5-parte_entrada_casadecomando"
        },
        {
          "yaw": -1.5242288955495944,
          "pitch": 0.6220648418189043,
          "rotation": 6.283185307179586,
          "target": "8-casa_decomando2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.244040615843744,
          "pitch": -0.5101962625876375,
          "title": "QPC2",
          "text": "Vagos UCP 10 , 12 , 14-16"
        },
        {
          "yaw": 3.034919776790624,
          "pitch": -0.7204385716070654,
          "title": "QPC1",
          "text": "Espaços vagos são para UCP 05,06 e 07"
        },
        {
          "yaw": -2.2988464078852235,
          "pitch": -0.5760012328653943,
          "title": "UTR",
          "text": "Possui a UTR , O SW1 com portas livres (18-22 e 16) , O SW2 com portas livres (18-23 e 16), para a V2 terá as imagens, mas acredito que um pequeno texto relatório é suficiente para colocar nesse espaço somente o que é interessante para o grupo de automação."
        },
        {
          "yaw": -0.7065711741366822,
          "pitch": -0.6278086068566964,
          "title": "Painel CA1",
          "text": "Text"
        },
        {
          "yaw": 0.03572350942375735,
          "pitch": -0.81861204003539,
          "title": "Painel CC1",
          "text": "Circuitos livres (48 à 17)&nbsp;"
        },
        {
          "yaw": 0.8210549909163376,
          "pitch": -0.6602525943799424,
          "title": "PM 1",
          "text": "Vagos 06, 07 e 08"
        },
        {
          "yaw": -1.5092547034290025,
          "pitch": -0.06203493437215002,
          "title": "Banco de Baterias",
          "text": "60 celulas"
        }
      ]
    },
    {
      "id": "8-casa_decomando2",
      "name": "casa_decomando2",
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
          "yaw": 0.03241553104350814,
          "pitch": 0.8285361543711023,
          "rotation": 0,
          "target": "7-casa_decomando"
        },
        {
          "yaw": -0.006976498582609736,
          "pitch": 0.10426872355475858,
          "rotation": 0,
          "target": "5-parte_entrada_casadecomando"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.5461728977959872,
          "pitch": -0.25466068874366243,
          "title": "Retificador",
          "text": "Text"
        },
        {
          "yaw": 0.493571287797657,
          "pitch": -0.32407997635302443,
          "title": "Painel TI",
          "text": "Text"
        },
        {
          "yaw": 2.7675190577699436,
          "pitch": -0.1409797674818094,
          "title": "Banco de bateiras",
          "text": "Aqui no v2 pode ter uma transcrição da placa do banco ou uma foto"
        }
      ]
    }
  ],
  "name": "SE_ALTO_ALEGRE_DO_MARANHAO_V1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
