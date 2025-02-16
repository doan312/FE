import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import { TabType } from '../components/TabBar/TabBar'

export const useTabStore = create(
    combine(
        {
            currentTab: 'home',
        },
        (set) => {
            return {
                setCurrentTab: (to: TabType) => {
                    set(() => ({
                        currentTab: to,
                    }))
                },
            }
        }
    )
)
