import {auth, provider} from '../firebase'

export function signInAPI(){
    return (dispatch)=>{
        auth.signInWithPopup(provider).then()
    }
}