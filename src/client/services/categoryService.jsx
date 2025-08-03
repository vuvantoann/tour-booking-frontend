import { get } from '../../utils/request'

export const getCategory = async () => {
  const result = get('api/v1/categories')
  return result
}
