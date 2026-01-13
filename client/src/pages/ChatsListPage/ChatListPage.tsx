import TopBar from "../../components/topBar/TopBar"
import ChatList from "../../components/chatsList/ChatList"
import ChatBlock from "../../components/chatBlock/ChatBlock"
import '../../app/styles/main.css'
import { useNavigate } from "react-router"
import userStore from "../../app/store/userStore"


const ChatsPage = () => {
  const navigate = useNavigate()
  const {currentUser} = userStore()
    return (
      <>
      {currentUser ? (<div className="Main">
    <TopBar/>
    <div className="ChatSector">
      <div className=""><ChatList/></div>
      <div className="MessagesChat"><ChatBlock/></div>
    </div>
</div>) : <button className="authButton" onClick={() => {navigate('/auth')}}>Sign in</button>}
</>
    )
}
export default ChatsPage