import React from 'react'
import styles from '../styles/Home.module.css'
// import HookCounter from '../components/classCounter'
// import HookCounterTwo from '../components/hookCounterTwo'
// import HookCounterThree from '../components/hookCounterThree'
// import HookCounterFour from '../components/hookCounterFour'
// import UseEffectHookCounter from '../components/useEffectHookCounterOne'
// import DataFetching from '../components/dataFetching'
import ComponentC from '../components/componentC'
 
// passing props to in nested component (single value)
export const UserContext = React.createContext()

// passing props to in nested component (multiple value)
export const ChannelContext = React.createContext

export default function Home() {
  return (
    <div className={styles.container}>
      <UserContext.Provider value={'Vishwas'}>
        <ChannelContext.Provider value={'codevolution'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  )
}
