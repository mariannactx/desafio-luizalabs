const moment = require('moment')

function convert(data) {
  const entriesArray = data.split("\n")

  return arrayToJson(entriesArray)
}

function arrayToJson(array) {
  const purchases = {}

  const numberRegex = /^0*/
  const stringRegex = /^ */

  array.forEach(entry => {
    if (entry.length) {
      const userId = entry.slice(0, 10).replace(numberRegex, '')
      const userName = entry.slice(10, 55).replace(stringRegex, '')
      const orderId = entry.slice(55, 65).replace(numberRegex, '')
      const productId = entry.slice(65, 75).replace(numberRegex, '')
      const value = entry.slice(75, 87).replace(stringRegex, '')
      const date = entry.slice(87, 95)

      const product = {
        product_id: productId.length ? parseInt(productId) : 0,
        value
      }

      if (!purchases[userId]) {
        purchases[userId] = {
          name: userName,
          orders: {}
        }
      }

      if (!purchases[userId]['orders'][orderId]) {
        purchases[userId]['orders'][orderId] = {
          products: [product],
          date: moment(date).format("YYYY-MM-DD"),
          total: parseFloat(value)
        }
      } else {
        purchases[userId]['orders'][orderId]['products'].push(product)
        purchases[userId]['orders'][orderId]['total'] += parseFloat(value)
      }

    }
  })

  const json = []

  for (let userId in purchases) {
    const user = purchases[userId]

    let orders = []
    for (let orderId in user.orders) {
      const { date, products, total } = user.orders[orderId]

      orders.push({
        date,
        products,
        order_id: parseInt(orderId),
        total: `${total.toFixed(2)}`
      })
    }

    json.push({
      name: user.name,
      user_id: parseInt(userId),
      orders
    })
  }

  return json.sort((a, b) => { a.user_id - b.user_id })
}

module.exports = {
  convert, arrayToJson
}