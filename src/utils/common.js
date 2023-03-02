let getApiBase = function () {
  if (location.hostname === 'localhost') {
    return 'http://localhost:7009/api'
  } else {
    return 'Try later'
  }
}

function trim(str) {
  return str.replace(/^\s+/, '')
}

export {
  getApiBase,
  trim
}