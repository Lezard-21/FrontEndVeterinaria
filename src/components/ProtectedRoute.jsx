import { useState, useEffect} from 'react'
import PropTypes from 'prop-types'

import { getTokenLocalStorage } from '../utils/localStorage'
import AccesoDenegado from './AccesoDenegado'

const ProtectedRoute = ({ children }) => {
    const [loading, setLoading] = useState(true)

    const token = getTokenLocalStorage('token')

    useEffect(() => {
        const checkToken = async () => {
            console.log(token)
            if (!token) return (<AccesoDenegado/>)
            setLoading(false)
        }
        checkToken()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])

    return loading ? (<AccesoDenegado />) : (children)
}

ProtectedRoute.propTypes = {
    children: PropTypes.node
}

export default ProtectedRoute
