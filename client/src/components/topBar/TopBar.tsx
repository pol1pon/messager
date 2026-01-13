import './topBar.css'
import logo from '../../logo/logo.png'
// import userStore from '../../app/store/userStore';

// const [active, setActive] = useState(false)

function TopBar({}) {
  // const {users} = userStore()
  return (
   <>
   <div className='Bar'>
    <div className="logo">
      <img className='logoIcon' src={logo}/>
    </div>
    <div className="avatarBlock">
      {/* <img className='avatar' src={users.avatar}/> */}
    </div>
    {/* <ModalWindow active={active} setActive={setActive}/>
    <ModalWindow/> */}
   </div>
   </>
  );
}

export default TopBar;