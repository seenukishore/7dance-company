import api from './axios'

export const getCollaborations = async () => {
  const response = await api.get('/collaborations')
  return response.data
}