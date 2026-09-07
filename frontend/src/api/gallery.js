import api from './axios'

export const getGalleryItems = async (category) => {
  const params = category && category !== 'All' ? `?category=${encodeURIComponent(category)}` : ''
  const response = await api.get(`/gallery${params}`)
  return response.data
}