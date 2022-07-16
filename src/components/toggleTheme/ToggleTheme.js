import { ToggleThemeBtn } from "../style"
import sun from '../../assests/sun.png'
import moon from '../../assests/moon.png'
import { useSelector,useDispatch } from "react-redux"
import { themeActions } from "../../store/themeSlice"
const ToggleTheme = () => {
    const toggle = useSelector(state=>state.theme.theme)
    const dispatch = useDispatch();
    const toggleThemeHandler=()=>{
       dispatch(themeActions.toggleTheme())
    }
  return (
   <ToggleThemeBtn onClick={()=>toggleThemeHandler()}><img src={toggle?sun:moon} /></ToggleThemeBtn>
  )
}

export default ToggleTheme