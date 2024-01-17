const moment = require('moment')
const { arrayToJson } = require("./convert")

function filterByOrderId(data, filterOrderId) {
  const numberRegex = /^0*/
  const entries = data.split("\n").filter(entry => {
    const entryOrderId = entry.slice(55, 65).replace(numberRegex, '')
    return entryOrderId == filterOrderId
  })

  return arrayToJson(entries)
}

function filterByDate(data, filterBeginDate, filterEndDate) {
  const beginDate = moment(filterBeginDate, 'YYYY-MM-DD', true)
  const endDate = moment(filterEndDate, 'YYYY-MM-DD', true)

  if (!beginDate.isValid() || !endDate.isValid()) {
    return 'Invalid begin date and/or end date.'
  }

  const entries = data.split("\n").filter(entry => {
    const date = moment(entry.slice(87, 95))
    return date.isSame(beginDate) || date.isSame(endDate) || (date.isAfter(beginDate) && date.isBefore(endDate))
  })

  return arrayToJson(entries)

}

module.exports = { filterByOrderId, filterByDate }