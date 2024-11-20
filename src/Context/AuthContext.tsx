import { createContext, useState, useReducer, useEffect } from "react";

type State = { 
    isAuthenticated: boolean 
    username:string
    id:string
    token:string
}

const initialState: State = {
    isAuthenticated: false,
    username:'Guest',
    id:'',
    token:''
}
export const AuthContext = createContext<{
    state: State
    dispatch: React.Dispatch<Action>
}>({
    state: initialState,
    dispatch: () => null,
})
type Action = { type: 'TOGGLE_AUTH'; payload: State }


const authReducer = (state: State, action: Action): State => {
    const { type, payload } = action
    switch (type) {
        case 'TOGGLE_AUTH':
            return payload

        default:
            return state
    }
}

const AuthContextProvider = ({ children }: { children: any }) => {
    // useEffect(()=>{
    //     let localState=JSON.parse(localStorage.getItem('endframe-2.0')|| '')
    //     if(!localState || !localState.Username){
    //         localState={
    //             isAuthenticated:false,
    //             username:"Guest",
    //             id:"",
    //             token:"",
    //         }
    //         authReducer(initialState,{ type: 'TOGGLE_AUTH', payload: localState })
    //     }else{
    //         authReducer(initialState,{ type: 'TOGGLE_AUTH', payload: localState })
    //     }
    // },[])
    // let localState=JSON.parse(localStorage.getItem('endframe-2.0')|| '')
    // if(!localState || !localState.Username){
    //     localState={
    //         isAuthenticated:false,
    //         username:"Guest",
    //         id:"",
    //         token:"",
    //     }
    //     authReducer(initialState,{ type: 'TOGGLE_AUTH', payload: localState })
    // }else{
    //     authReducer(initialState,{ type: 'TOGGLE_AUTH', payload: localState })
    // }
    const [state, dispatch] = useReducer(authReducer, initialState)
    // const [appState,setAppState]=useState<State>({
    //     isAuthenticated:localState.isAuthenticated,
    //     username:localState.username,
    //     id:localState.id,
    //     token:localState.token,
    // })
    // const updateState=(loggedIn:boolean,name:string,id:string,Token:string)=>{
    //     setAppState({isAuthenticated:loggedIn,username:name,id:id,token:Token})
    //     if(loggedIn){
    //         localStorage.setItem("authApp",JSON.stringify({isAuthenticated:loggedIn,username:name,id:id,token:Token}))
    //     }
    //     else{localStorage.removeItem("authApp")}
    // }
    return ( 
        <AuthContext.Provider value={{ state, dispatch}}>
        {children}
        </AuthContext.Provider>
    );
}
export default AuthContextProvider