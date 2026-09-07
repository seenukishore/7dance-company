import api from './axios'

export const getEventShowcases = async () => {
  const response = await api.get('/events/showcases')
  return response.data
}

export const submitEventEnquiry = async (data) => {
  const response = await api.post('/events/enquiry', data)
  return response.data
}