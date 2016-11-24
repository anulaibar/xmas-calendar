const queryParams = () => {
  let params = {}
  location.search.substr(1).split('&').forEach((item) => {
    params[item.split('=')[0]] = item.split('=')[1]
  })
  return params
}
export default queryParams
