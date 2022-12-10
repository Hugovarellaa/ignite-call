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

const getById = async (id: number): Promise<ICustomer | Error> => {
  try {
    const { data } = await api.get(`/customers/${id}`)
    if (data) {
      return data
    }
    return new Error(`Error ao consulta o registro`)
  } catch (error) {
    return new Error(
      (error as { message: string }).message ||
        `Error ao consulta o registro:  ${error}`,
    )
  }
}

const create = async (
  customer: Omit<ICustomer, 'id'>,
): Promise<number | Error> => {
  try {
    const { data } = await api.post<ICustomer>(`/customers`, customer)

    if (data) {
      return data.id
    }

    return new Error(`Error ao Criar o registros`)
  } catch (error) {
    return new Error(
      (error as { message: string }).message ||
        `Error ao Cria os registros:  ${error}`,
    )
  }
}

const updateById = async (
  id: number,
  customer: ICustomer,
): Promise<void | Error> => {
  try {
    await api.put(`/customers/${id}`, customer)
  } catch (error) {
    return new Error(
      (error as { message: string }).message ||
        `Error ao Atualizar o registro:  ${error}`,
    )
  }
}

const deleteById = async (id: number): Promise<void | Error> => {
  try {
    await api.delete(`/customers/${id}`)
  } catch (error) {
    return new Error(
      (error as { message: string }).message ||
        `Error ao Apagar o registro:  ${error}`,
    )
  }
}
