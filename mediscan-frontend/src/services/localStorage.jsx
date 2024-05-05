const storeToken = (value) => {
    if (value) {
      const { access, refresh, user_type } = value
      console.log('Storing tokens:', access, refresh);
      localStorage.setItem('accessToken', access)
      localStorage.setItem('refreshToken', refresh)
      localStorage.setItem('user_type', user_type)
      localStorage.setItem('username', username)

    }
  }

  const getToken = () => {
    let access_token = localStorage.getItem('accessToken')
    let refresh_token = localStorage.getItem('refreshToken')
    let user_type = localStorage.getItem('user_type')
    let username = localStorage.getItem('username')
    return { access_token, refresh_token, user_type, username }
  }

  const removeToken = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('user_type')
    localStorage.removeItem('username')
  }

  export { storeToken, getToken, removeToken, }