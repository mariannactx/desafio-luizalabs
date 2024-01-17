const fs = require('fs')
const { filterByDate, filterByOrderId } = require("./filter")

describe('filter', () => {
  it('handle invalid dates', async () => {
    const data = await fs.readFileSync(require.resolve('./data/data_0.txt'), { encoding: "utf8" })

    expect(filterByDate(data, '2021--12-01', '2021--12-01')).toBe("Invalid begin date and/or end date.")
    expect(filterByDate(data, '2020-12-01', '2020--12-01')).toBe("Invalid begin date and/or end date.")
    expect(filterByDate(data, '2020--12-01', '2020-12-01')).toBe("Invalid begin date and/or end date.")
  })

  it('filters by date and converts data to json', async () => {
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
      }]

    expect(filterByDate(data, '2021-12-01', '2021-12-03')).toEqual(expected)

  })
  it('filters by orderId and converts data to json', async () => {
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
      }]

    expect(filterByOrderId(data, '123')).toEqual(expected)

  })
})