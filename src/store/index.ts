import { User } from '@/types/api'

import { create } from 'zustand'

export const useStore = create<{
  token: string
  userInfo: {
    userEmail: string
    userName: string
  }
  collapsed: boolean
  updateToken: (token: string) => void
  updateUserInfo: (userInfo: User.UserItem) => void
  updateCollapsed: () => void
}>(set => ({
  token: '',
  userInfo: {
    userEmail: '',
    userName: ''
  },
  collapsed: false,

  updateUserInfo(userInfo: User.UserItem) {
    set({
      userInfo
    })
  },
  updateToken: token => set({ token }),
  updateCollapsed: () => set(state => ({ collapsed: !state.collapsed }))
}))
