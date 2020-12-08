import styles from '../styles/Home.module.css'
import HookCounter from '../components/classCounter'
import HookCounterTwo from '../components/hookCounterTwo'
import HookCounterThree from '../components/hookCounterThree'
import HookCounterFour from '../components/hookCounterFour'
import UseEffectHookCounter from '../components/useEffectHookCounterOne'
import DataFetching from '../components/dataFetching'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <HookCounter /> */}
      {/* <HookCounterTwo />
      <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <UseEffectHookCounter /> */}
      <DataFetching />
    </div>
  )
}
