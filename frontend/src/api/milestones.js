import api from './axios'

export const getMilestones = async () => {
  const response = await api.get('/milestones')
  return response.data
}