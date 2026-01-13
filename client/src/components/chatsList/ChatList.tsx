import { useCallback, useMemo, useState } from 'react';
import './chatBar.css'
import Search from '../search/Search';
import chatStore from '../../app/store/chatsStore'
import Chat from './Chat';
import userStore from '../../app/store/userStore';
import { useNavigate } from 'react-router';

function ChatList() {
   const {chats, noChat} = chatStore()
   const navigate = useNavigate()
   const {currentUser, sighOut } = userStore()
   const [chatsFil]= useState(chats)
       const [searchTerm, setSearchTerm] = useState('');
       const logOut = useCallback(()=> {
        sighOut()
        navigate('/auth')
        noChat()}, [])

       // Без мемоизации
      //  const logOut = () => {
      //   sighOut()
      //   navigate('/auth')
      //   noChat()
      //  }
      const filteredChats = useMemo(() => {
        if(!currentUser){
          return []
        }
           return chatsFil.filter(chat => chat.members.includes(currentUser.id))
          //  .filter(chat =>
          //     chat.companion.toLowerCase().includes(searchTerm.toLowerCase())
          //  ).filter(chat => chat.members.includes(currentUser.id))
       }, [chatsFil, searchTerm]);

  return (
   <>
    <div className="Chatsblock">
      <div className="seachBlock">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      </div>
      <div className="chatBar">
      {filteredChats.map((chat) => (<Chat chat={chat} key={chat.id}  />))}
      </div>
      <button onClick={logOut}>LOGOUT</button>
    </div>
   </>
  );
}

export default ChatList;