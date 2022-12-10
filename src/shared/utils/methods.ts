import { api } from '../services/api/api'

interface ICustomer {
  id: number
  first_name: string
  last_name: string
  email: string
  password: string
}

interface ICustomerList {
  data: ICustomer[]
  totalCount: number
}

const getAll = async (
  page = 1,
  filter = '',
): Promise<ICustomerList | Error> => {
  try {
    const limit = 10
    const url = `/customers_${page}}1&_limit=${limit}&first_name=${filter}`

    const response = await api.get(url)

    const data = response.data
    const { headers } = response.data

    console.log(response)

    if (data) {
      return {
        data,
        totalCount: Number(headers['x-total-count'] || 10),
      }
    }
    return new Error(`Error ao lista os registros`)
  } catch (error) {
    return new Error(
      (error as { message: string }).message ||
        `Error ao lista os registros:  ${error}`,
    )
  }
}

const getById = async (): Promise<any> => {}
const create = async (): Promise<any> => {}
const updateById = async (): Promise<any> => {}
const deleteById = async (): Promise<any> => {}
