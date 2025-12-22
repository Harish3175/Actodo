import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Card from '../components/Card'
import TodoContainer from '../components/TodoContainer'



const Landing = () => {

  const data = useLocation()

  return (
    <div className="bg-black p-16">
      <div className="bg-white p-10 border rounded-md">
        {/*Header*/}
        <Header username={data.state.user} />
        {/*Card*/}
        <div className="flex justify-between gap-7 my-5 flex-wrap">
          <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
          <Card bgcolor={"#FD6663"} title={"December"} subtitle={"19:30"} />
          <Card bgcolor={"#FCA201"} title={"Build using"} subtitle={"React"} />
        </div>
        {/*TodoContainer*/}
        <TodoContainer />
      </div>
    </div>
  )
}

export default Landing
