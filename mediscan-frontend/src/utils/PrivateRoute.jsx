import {Outlet, Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { getToken } from '../services/localStorage'

const PrivateRoutes = () => {
    const {username} = getToken()
    // const user = useSelector(state => state.user_info.username)
  return (
    username  ? <Outlet /> : <Navigate to="/login" />
  )
}

export default PrivateRoutes;