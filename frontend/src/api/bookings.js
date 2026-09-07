import api from './axios'

export const submitTrialBooking = async (data) => {
  const response = await api.post('/bookings/trial', data)
  return response.data
}