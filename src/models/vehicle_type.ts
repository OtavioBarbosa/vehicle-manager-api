import {prisma} from '../prisma/client.js'
import moment from 'moment'

interface VehicleTypeProps{
    id: number
    vehicle_type: string
    created_at: string
    updated_at: string
    deleted_at: string
}

const vehicles_types = async () => {
    return await prisma.vehicle_type.findMany()
}

const vehicle_type = async (id: number) => {
    return await prisma.vehicle_type.findUnique({
        where: {
            id: id,
        },
    })
}

const createVehicleType = async (vehicle_type: VehicleTypeProps) => {
    return await prisma.vehicle_type.create({
        data: {
            vehicle_type: vehicle_type.vehicle_type,
        }
    })
}

const updateVehicleType = async (id: number, vehicle_type: VehicleTypeProps) => {
    return await prisma.vehicle_type.update({
        where: {
            id
        },
        data: {
            vehicle_type: vehicle_type.vehicle_type,
            updated_at: moment().format()
        }
    })
}

export{
    VehicleTypeProps,
    vehicles_types,
    vehicle_type,
    createVehicleType,
    updateVehicleType
}