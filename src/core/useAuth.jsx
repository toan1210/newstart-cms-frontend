import { useContext } from "react";
import {Context} from '../App'
export default function useAuth()
{
    let {ipapi,iplink} =useContext(Context)
    return{ipapi,iplink}
}