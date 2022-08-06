import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'https://api.coincap.io/v2',
})

export const get = (endpoint: string) => {
  return axiosClient.get(endpoint).then((res) => res.data)
}
