import ListHeader from "./components/ListHeader"
import Auth from "./components/Auth"
import ListItem from "./components/ListItem"
import {useEffect, useState} from 'react'
import { useCookies } from "react-cookie"

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const authToken = cookies.AuthToken
  const userEmail = cookies.Email
  const [tasks, setTasks] = useState(null)
 

  const getData = async() =>{
    try{
      const response = await fetch(`http://localhost:8000/mydrama/${userEmail} `)
      const json = await response.json()
      console.log(json)
      setTasks(json)

    }catch(err)
    {
      console.error(err)
    }
  }

  useEffect(() => {
    if (authToken){
      getData()
    }
  } , [authToken])
  console.log(tasks)

  const sortedTasks = tasks?.sort((a,b) => new Date(a.release_year) - new Date(b.release_year))

  return (
    <div className="app">

      {!authToken && <Auth/>}
      {authToken &&
      <>
      <ListHeader listName={'📺 MY DRAMA LIST'} getData={getData}/>
      <p className="user-email">Welcome back {userEmail}</p>
      {sortedTasks?.map((task) => <ListItem key={task.id} task={task} getData={getData}/>)}</>}
      <p className="copyright">© Fun coding OTU</p>
    </div>
  )
}

export default App;
