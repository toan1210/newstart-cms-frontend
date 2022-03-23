import { useContext } from "react";
import {Context} from '../App'
export default function useAuth()
{
    let {ipapi,iplink,domain} =useContext(Context)
    return{ipapi,iplink,domain}
}