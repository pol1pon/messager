import { useNavigate } from "react-router"
import '../../app/styles/main.css'
import { useState, type FormEventHandler } from "react"
import userStore from "../../app/store/userStore"

const useAuth = () => {
    const {signin} = userStore()
    const navigate = useNavigate()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const handleSignIn = () => {
        if(login.trim() && password.trim()){
            const user = signin(login, password)
            if(user){
                navigate('/chats')
            }
        }
    }
    return {
        login,
        setLogin,
        password,
        setPassword,
        handleSignIn
    }
}

const AuthIn = () => {
    const navigate = useNavigate()
    const {login, password, setPassword, handleSignIn, setLogin} = useAuth()
    const onHandleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        handleSignIn()
    }

    return (
        <>
        <main>
            <div className="auth-div">
                <form action="" className="authForm" onSubmit={onHandleSubmit}>
                    <h1>Авторизация</h1>
                    <div className="inputDiv">
                        <input type="email" className="authinput" placeholder="Электронная почта" onChange={(e) => setLogin(e.target.value)} value={login}/>
                    </div>
                    <div className="inputDiv">
                        <input type="password" className="authinput" placeholder="Пароль"onChange={(e) => setPassword(e.target.value)} value={password}/>
                    </div>
                    <p onClick={() => (navigate('/'))} className="have__account">Нету аккаунта?</p>
                    <button className="submit__button" type="submit">Войти</button>
                </form>
            </div>
        </main>
        </>
    )
}

export default AuthIn