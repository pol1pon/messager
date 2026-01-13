import { useNavigate } from "react-router"
import '../../app/styles/main.css'
import { useState, type FormEvent} from "react"
// import Error from "../error"
import userStore, {type User} from "../../app/store/userStore"


const Registration = () => {
    const navigate = useNavigate()
    const {createNewUser} = userStore()
    const [nickname, setNickname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')
    const [error, setError] = useState('')
    const onHadleCreateUser  = (e: FormEvent) => {
        e.preventDefault()
        if(nickname.length < 3)
        {
            setError('Ник не соответвует')
            return
        }
        if(!email || !password || !nickname || !passwordRepeat){
            setError('Не хватает данных')
            return
        }
        if(password.trim() === passwordRepeat.trim()){
            const newUser: Omit<User, 'id'> = {
                nickname: nickname,
                login: email,
                password: password,
            }
            createNewUser(newUser)
            setNickname('')
            setEmail('')
            setPassword('')
            setPasswordRepeat('')
            navigate('/auth')
        }
        console.log(error);
    }
    return (
        <>
        <main>
            <div className="auth-div">
                <form action="" className="authForm" onSubmit={onHadleCreateUser}>
                    <h1>Регистрация</h1>
                    <div className="inputDiv">
                        <input
                        type="text"
                        className="authinput"
                        placeholder="Никнейм"
                        value={nickname}
                        onChange={(e)=>{setNickname(e.target.value)}}
                        />
                    </div>
                    <div className="inputDiv">
                        <input
                        type="email"
                        className="authinput"
                        placeholder="Электронная почта"
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        />
                    </div>
                    <div className="inputDiv">
                        <input
                        type="password"
                        className="authinput"
                        placeholder="Пароль"
                        onChange={(e)=>{setPassword(e.target.value)}}
                        value={password} />
                    </div>
                    <div className="inputDiv">
                        <input
                        type="password"
                        className="authinput"
                        placeholder="Повторите пароль"
                        onChange={(e)=>{setPasswordRepeat(e.target.value)}}
                        value={passwordRepeat}/>
                    </div>
                    <p onClick={() => (navigate('/auth'))} className="have__account">У меня есть аккаунт</p>
                    <button className="submit__button" type="submit" >Зарегистрироваться</button>
                </form >
            </div>
        </main>
        </>
    )
}

export default Registration