import api from './axios'

export const getCourses = async (category) => {
  const params = category && category !== 'All' ? `?category=${encodeURIComponent(category)}` : ''
  const response = await api.get(`/courses${params}`)
  return response.data
}