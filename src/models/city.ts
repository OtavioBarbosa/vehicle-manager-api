import {prisma} from '../prisma/client.js'
import { StateProps } from './state.js'

interface CityProps{
    id: number
    state_id: number
    city: string
    state: StateProps
}

const cities = async () => {
    return await prisma.city.findMany()
}

const city = async (id: number) => {
    return await prisma.city.findUnique({
        where: {
            id: id,
        },
    })
}

const createCity = async (city: CityProps) => {
    return await prisma.city.create({
        data: {
            city: city.city,
            state: {
                connectOrCreate: {
                    where: {
                        state: city.state.state,
                    },
                    create: {
                        state: city.state.state,
                        uf: city.state.uf
                    }
                }
            }
        }
    })
}

const updateCity = async (id: number, city: CityProps) => {
    return await prisma.city.update({
        where: {
            id
        },
        data: {
            city: city.city,
            state: {
                connectOrCreate: {
                    where: {
                        state: city.state.state
                    },
                    create: {
                        state: city.state.state,
                        uf: city.state.uf
                    }
                }
            }
        }
    })
}

const deleteCity = async (id: number) => {
    return await prisma.city.delete({
        where: {
            id
        }
    })
}

export{
    CityProps,
    cities,
    city,
    createCity,
    updateCity,
    deleteCity
}