import axios from 'axios'

const USER_DEFAULT = '1c139a29-fb42-4026-a22b-c86ce78996f0'
const URL_API_USER = 'https://1gty4psi70.execute-api.us-west-2.amazonaws.com/user/'
const URL_API_TWITTER = 'http://107.20.141.60/tweets/'

export const getDataUser = async userId => {
  try {
    return await axios.get(`${URL_API_USER}${userId !== undefined ? userId : USER_DEFAULT}`)
  } catch (error) {
    console.error(error)
  }
}

export const updateUser = async (data, userId) => {
  try {
    return await axios.put(`${URL_API_USER}${userId !== undefined ? userId : USER_DEFAULT}`, {
      description: data.experience_summary
      // name: data.name
    })
  } catch (error) {
    console.error(error)
  }
}

export const getDataUserTwitter = async twitterUserName => {
  try {
    return await axios.get(`${URL_API_TWITTER}${twitterUserName}`)
  } catch (error) {
    console.error(error)
  }
}
