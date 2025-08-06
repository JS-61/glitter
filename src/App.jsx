import './App.css'
import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";
import {useState} from "react";
import {GlitterContext} from "./utils/context.js";

function App() {
const [user, setUser] = useState({
    name: "Monster",
    avatar: "https://gravatar.com/avatar/000?d=monsterid"
});

const [stats, setStsts] = useState({
    followers: 42,
    following: 33,
});

const changeAvatar = url => {
    setUser(prevState => ({...prevState, avatar: url || prevState.avatar}))
}
  return (

      <div className={'app'}>
          <GlitterContext value={{user, stats, changeAvatar}}>
          <Navigation />
          <Body/>
          </GlitterContext>
      </div>
  )
}

export default App
