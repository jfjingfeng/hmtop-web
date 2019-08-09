export const setUser = (user) => {
  window.localStorage.set('user', JSON.stringify(user))
}
export const getUser = () => {
  return JSON.parse(window.localStorage.getItem('user'))
}
export const removeUser = () => {
  return window.localStorage.removeItem
}
