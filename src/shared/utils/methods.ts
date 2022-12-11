import { api } from '../services/api/api'

export interface ICustomers {
  id: number
  firstName: string
  lastName: string
  email: string
  password: number
}

export type ICustomerList = {
  data: ICustomers[]
  totalCount: number
}

const getAll = async (
  page = 1,
  filter = '',
): Promise<ICustomerList | Error> => {
  try {
    const limit = 10
    const url = `/customers?_page=${page}&_limit=${limit}&firstName_like=${filter}`

    const { data, headers } = await api.get(url)

    if (data) {
      return {
        data,
        totalCount: Number(headers['x-total-count'] || limit),
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

const getById = async (id: number): Promise<ICustomers | Error> => {
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
  customer: Omit<ICustomers, 'id'>,
): Promise<number | Error> => {
  try {
    const { data } = await api.post<ICustomers>(`/customers`, customer)

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
  customer: ICustomers,
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

export const customerServices = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
