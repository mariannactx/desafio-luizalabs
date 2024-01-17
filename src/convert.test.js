const fs = require('fs')
const convert = require('./convert')

describe("convert", () => {
  it("should convert data with 1 order per user", async () => {
    const data = await fs.readFileSync(require.resolve('./data/data_0.txt'), { encoding: "utf8" })

    const expected = [
      {
        "user_id": 1,
        "name": "Zarelli",
        "orders": [
          {
            "order_id": 123,
            "total": "1024.48",
            "date": "2021-12-01",
            "products": [
              {
                "product_id": 111,
                "value": "512.24"
              },
              {
                "product_id": 122,
                "value": "512.24"
              }
            ]
          }
        ]
      },
      {
        "user_id": 2,
        "name": "Medeiros",
        "orders": [
          {
            "order_id": 12345,
            "total": "512.48",
            "date": "2020-12-01",
            "products": [
              {
                "product_id": 111,
                "value": "256.24"
              },
              {
                "product_id": 122,
                "value": "256.24"
              }
            ]
          }
        ]
      }
    ]

    expect(convert(data)).toEqual(expected)

  })

  it("should convert data with multiple orders per user", async () => {
    const data = await fs.readFileSync(require.resolve('./data/data_1.txt'), { encoding: "utf8" })

    const expected = {
      "name": "Sammie Baumbach",
      "user_id": 1,
      "orders": [
        {
          "date": "2021-10-28",
          "order_id": 2,
          "products": [
            {
              "product_id": 2,
              "value": "798.03"
            },
            {
              "product_id": 5,
              "value": "1567.0"
            },
            {
              "product_id": 2,
              "value": "601.43"
            }
          ],
          "total": "2966.46"
        },
        {
          "date": "2021-09-10",
          "order_id": 3,
          "products": [
            {
              "product_id": 4,
              "value": "895.87"
            },
            {
              "product_id": 2,
              "value": "873.12"
            },
            {
              "product_id": 3,
              "value": "1740.63"
            }
          ],
          "total": "3509.62"
        },
        {
          "date": "2021-06-21",
          "order_id": 4,
          "products": [
            {
              "product_id": 3,
              "value": "1596.36"
            },
            {
              "product_id": 4,
              "value": "297.09"
            },
            {
              "product_id": 4,
              "value": "1681.79"
            }
          ],
          "total": "3575.24"
        },
        {
          "date": "2021-03-18",
          "order_id": 5,
          "products": [
            {
              "product_id": 3,
              "value": "667.08"
            },
            {
              "product_id": 2,
              "value": "177.6"
            },
            {
              "product_id": 1,
              "value": "1318.24"
            }
          ],
          "total": "2162.92"
        },
        {
          "date": "2021-05-19",
          "order_id": 6,
          "products": [
            {
              "product_id": 3,
              "value": "479.04"
            },
            {
              "product_id": 3,
              "value": "549.65"
            },
            {
              "product_id": 1,
              "value": "1930.72"
            }
          ],
          "total": "2959.41"
        },
        {
          "date": "2021-05-28",
          "order_id": 7,
          "products": [
            {
              "product_id": 2,
              "value": "96.47"
            },
            {
              "product_id": 2,
              "value": "1951.68"
            },
            {
              "product_id": 5,
              "value": "348.4"
            }
          ],
          "total": "2396.55"
        },
        {
          "date": "2021-10-12",
          "order_id": 8,
          "products": [
            {
              "product_id": 2,
              "value": "92.61"
            },
            {
              "product_id": 3,
              "value": "374.71"
            },
            {
              "product_id": 5,
              "value": "332.43"
            }
          ],
          "total": "799.75"
        },
        {
          "date": "2021-04-14",
          "order_id": 9,
          "products": [
            {
              "product_id": 1,
              "value": "1465.3"
            },
            {
              "product_id": 1,
              "value": "973.27"
            },
            {
              "product_id": 2,
              "value": "725.86"
            }
          ],
          "total": "3164.43"
        },
        {
          "date": "2021-06-23",
          "order_id": 10,
          "products": [
            {
              "product_id": 4,
              "value": "590.04"
            },
            {
              "product_id": 3,
              "value": "499.87"
            },
            {
              "product_id": 3,
              "value": "1649.86"
            }
          ],
          "total": "2739.77"
        },
        {
          "date": "2021-03-24",
          "order_id": 11,
          "products": [
            {
              "product_id": 2,
              "value": "1547.7"
            },
            {
              "product_id": 6,
              "value": "1724.04"
            },
            {
              "product_id": 3,
              "value": "634.4"
            }
          ],
          "total": "3906.14"
        },
        {
          "date": "2021-12-03",
          "order_id": 12,
          "products": [
            {
              "product_id": 2,
              "value": "51.77"
            },
            {
              "product_id": 3,
              "value": "901.19"
            },
            {
              "product_id": 2,
              "value": "598.03"
            }
          ],
          "total": "1550.99"
        },
        {
          "date": "2021-10-08",
          "order_id": 13,
          "products": [
            {
              "product_id": 3,
              "value": "856.44"
            },
            {
              "product_id": 5,
              "value": "1506.72"
            },
            {
              "product_id": 4,
              "value": "1148.51"
            }
          ],
          "total": "3511.67"
        },
        {
          "date": "2021-09-08",
          "order_id": 14,
          "products": [
            {
              "product_id": 4,
              "value": "1915.86"
            },
            {
              "product_id": 3,
              "value": "1121.58"
            },
            {
              "product_id": 0,
              "value": "137.8"
            }
          ],
          "total": "3175.24"
        },
        {
          "date": "2021-09-21",
          "order_id": 15,
          "products": [
            {
              "product_id": 2,
              "value": "1813.9"
            },
            {
              "product_id": 1,
              "value": "1158.09"
            },
            {
              "product_id": 3,
              "value": "1358.17"
            }
          ],
          "total": "4330.16"
        },
        {
          "date": "2021-04-09",
          "order_id": 16,
          "products": [
            {
              "product_id": 4,
              "value": "1499.44"
            },
            {
              "product_id": 2,
              "value": "1567.99"
            },
            {
              "product_id": 5,
              "value": "62.27"
            }
          ],
          "total": "3129.70"
        }
      ]
    }

    expect(convert(data)[0]).toEqual(expected)
  })
})