import * as types from './mutations'

// export default {
//   decreaseAge: ({ commit }) => {
//     commit(types.DECREASE_AGE)
//   }, increaseAge: ({ commit }) => {
//     commit(types.INCREASE_AGE)
//   },
//   updateToken: ({ commit }, payload) => {
//     commit(types.UPDATE_TOKEN, payload)
//   },
//   updateUserName: ({ commit }, userName) => {
//     commit(types.UPDATE_USER_NAME, userName)
//   }
// }
export function decreaseAge({ commit }) {
  commit(types.default.DECREASE_AGE)
}
export function increaseAge({ commit }) {
  commit(types.default.INCREASE_AGE)
}
export function updateToken({ commit }, payload) {
  commit(types.default.UPDATE_TOKEN, payload)
}
export function updateUserName({ commit }, userName) {
  commit(types.default.UPDATE_USER_NAME, userName)
}