import { del, get, patch, post } from '../utils/request'

export const getProductList = async () => {
  const result = get('api/v1/tours')
  return result
}

export const getProductListByCategory = async (slug) => {
  const result = get(`api/v1/tours/${slug}`)
  return result
}

export const createProduct = async (formData) => {
  const result = await post('api/v1/admin/tours/create', formData)
  return result
}

export const editProduct = async (id, formData) => {
  const result = await patch(`api/v1/admin/tours/edit/${id}`, formData)
  return result
}

export const deleteProduct = async (id) => {
  const result = del(`api/v1/admin/tours/delete/${id}`)
  return result
}
