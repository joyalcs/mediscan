import {Outlet, Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { getToken } from '../services/localStorage'

const PrivateRoutes = () => {
    const {access_token} = useSelector(state => state.auth)
    // const user = useSelector(state => state.user_info.username)
  return (
    access_token  ? <Outlet /> : <Navigate to="/login" />
  )
}

export default PrivateRoutes;