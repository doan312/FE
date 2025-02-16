import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import { TabType } from '../components/TabBar/TabBar'
import { CounselType } from '../components/home/MethodSelectionCard'

export const useTabStore = create(
    combine(
        {
            currentTab: 'home',
        },
        (set) => {
            return {
                setCurrentTab: (to: TabType) => {
                    set({
                        currentTab: to,
                    })
                },
            }
        }
    )
)

export const useHomeStore = create(
    combine(
        {
            counselType: 'inPerson',
            selectedChips: ['전체'],
        },
        (set) => {
            return {
                setCounselType: (switchTo: CounselType) => {
                    set({
                        counselType: switchTo,
                    })
                },
            }
        }
    )
)
