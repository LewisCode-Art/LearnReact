import React from 'react'
import styles from '../styles/Home.module.css'
import Greet from '../components/greet'
import Welcome from '../components/welcome'
import Hello from '../components/hello'
import Propy from '../components/propy'
import Message from '../components/message'
import Counter from '../components/counter'
import DestructuringPropy from '../components/destructuringPropy'
import DestructuringClassPropy from '../components/destructuringClassPropy'
import FunctionClick from '../components/functionClick'
import ClassClick from '../components/classClick'
import EventBind from '../components/eventBind'
import ParentComponent from '../components/ParentComponent'
import UserGreeting from '../components/userGreeting'
import NameList from '../components/nameList'

// Thanks Vishwas (codeevolution) you are awesome <3

export default function Home() {
  return (
    <div className={styles.container}>

      {/* Using functional & fat arrow components */}
      <Greet />

      {/* Using class components */}
      <Welcome />

      {/* Using Jsx */}
      <Hello />

      {/* Using Props */}
      <Propy name="Lewis" heroName="Jesus best friend">
        <p>children props can be written here as well</p>
      </Propy>

      <Propy name="CodeArt" heroName="Yeshua best friend">
        <button>Action</button>
      </Propy>
      <Propy name="CodeDisrupt" heroName="Emmanuel best friend" />

      {/* Using props in class components */}
      <Welcome name="Zeky" heroName="Jesus best friend" />
      <Welcome name="Zeky" heroName="Yeshua best friend" />
      <Welcome name="Zeky" heroName="Emmanuel best friend" />

      {/* Props are pass to the children */}
      {/* States are managed within the components */}
      <Message />

      {/* Using states in functional components */}
      <Counter />

      {/* Destructuring functional component props */}
      <DestructuringPropy name="CodeArt" heroName="Yeshua best friend" />

      {/* Destructuring class component props */}
      <DestructuringClassPropy name="Zeky" heroName="Emmanuel best friend" />

      {/* Learning event handlers in funtional components */}
      <FunctionClick />

      {/* Learning event handlers in class components */}
      <ClassClick />

      {/* Learning Event Handling */}
      <EventBind />

      {/* Learning Nested Event Handling */}
      <ParentComponent />

      {/* Learning conditional rendering */}
      <UserGreeting />

      {/* Learning Lists */}
      <NameList />

    </div>
  )
}