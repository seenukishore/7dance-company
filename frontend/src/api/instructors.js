import api from './axios'

export const getInstructors = async () => {
  const response = await api.get('/instructors')
  return response.data
}