import { create } from 'zustand'
import { v4 as uuid } from 'uuid'

export type User = {
    id: string;
    nickname: string;
    login: string;
    password: string;
    avatar?: string
}

type UserStore = {
    currentUser: User | null;
    users: User[];
    createNewUser(newUserData: Omit<User, 'id'>): void;
    sighOut():void;
    signin: (login: string, password: string) => User | undefined;
}

const userStore = create<UserStore>((set, get) => ({
    currentUser: null,
    users: [{
        id: 's',
        nickname: 'Biba',
        login: 'BibaBoba@mail.ru',
        password: "123@",
        avatar: 'https://play-lh.googleusercontent.com/wwXszsrPY2hCSXboog6zo8H2guVleoiT6BMSBTBSjSBBYP_-897wBPeusUoMuaF3MHo9=w240-h480-rw',
    },
    {
        id: 'a',
        nickname: 'Zalupa',
        login: 'Zalupa@mail.ru',
        password: "123@",
        avatar: 'https://media.istockphoto.com/id/1383234426/vector/anime-girl-with-bow-in-hair.jpg?s=612x612&w=0&k=20&c=DC-i6wUvHqfXdXzPo4HNrAYWaVTpe6Q-4Rrzne-l90Y=',
    },
],

    createNewUser:
        (userData) =>
            set((state) =>
                ({users: [...(state.users || [])
                , { ...userData, id: uuid() }]}
            )),
    sighOut: () => set(() => ({currentUser: null})),
    signin: (login, password) => {
        const user = get().users?.find(user => login === user.login)
        set((state) => {
            if(user && password === user.password){
               return ({...state, currentUser: {...user}})
            }
            return ({...state, currentUser: null})})
        return user
        }

}))

export default userStore