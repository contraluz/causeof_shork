
import * as types from './mutation_types'

export default {
  // 减少用户年龄
  [types.DECREASE_AGE](state) {
    state.userAge--;
  },
  // 增加用户年龄
  [types.INCREASE_AGE](state) {
    state.userAge++;
  },
  [types.UPDATE_TOKEN](state, payload) {
    state.token = payload;
  },
  [types.UPDATE_USER_NAME](state, payload) {
    state.userName = payload;
  }
}
