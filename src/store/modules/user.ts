/**
 * [state description] 用户相关的 store
 */

import * as types from '../mutation-types'
import { Context } from '../index'

interface User {
  name: string | number,
  user_id: number,
}
export interface State {
  user: User,
  token: string | number
}

const state: State = {
  user: {
    name: '',
    user_id: 0
  },
  token: ''
}

const getters = {
  user_id: (state: State) => state.user.user_id
}

const mutations = {
  [types.SET_USER](state: State, userInfo: User) {
    state.user = userInfo;
  }
}

const actions = {
  setUserInfo(context: Context<State>): void {
    const userInfo = {
      name: '小明',
      user_id: 887
    }
    context.commit(types.SET_USER, userInfo)
  },
}

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations,
}


