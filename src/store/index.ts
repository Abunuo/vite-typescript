/**
 * [store entry]
 * 
 */
import { createStore, createLogger } from 'vuex'
import type { ActionContext } from 'vuex';

import getters from './getters'
import actions from './actions'
import user, { State as UserState } from './modules/user'

const store = createStore({
  getters,
  actions,
  modules: {
    user
  },
  plugins: process.env.NODE_ENV !== 'production'
    ? [createLogger()]
    : []
})

export default store

export interface RootState {
  user: UserState
}
export type Context<S = RootState> = ActionContext<S, RootState>