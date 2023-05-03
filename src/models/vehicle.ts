import {prisma} from '../prisma/client.js'
import moment from 'moment'
import { VehicleTypeProps } from './vehicle_type.js'

interface VehicleProps{
    id: number
    vehicle: string
    user_id: number
    vehicle_types: VehicleTypeProps[]
}

const vehicles = async () => {
    return await prisma.vehicle.findMany({
        where: {
            deleted_at: null
        }
    })
}

const vehicle = async (id: number) => {
    return await prisma.vehicle.findUnique({
        where: {
            id: id,
        },
    })
}

const createVehicle = async (vehicle: VehicleProps) => {
    return await prisma.vehicle.create({
        data: {
            vehicle: vehicle.vehicle,
            user_id: vehicle.user_id,
            types: {
                create: vehicle.vehicle_types.map(type => {
                    return {
                        vehicle_type: {
                            connectOrCreate: {
                                where: {
                                    vehicle_type: type.vehicle_type
                                },
                                create: {
                                    vehicle_type: type.vehicle_type
                                }
                            }
                        }
                    }
                })
            }
        }
    })
}

const updateVehicle = async (id: number, vehicle: VehicleProps) => {
    return await prisma.vehicle.update({
        where: {
            id
        },
        data: {
            vehicle: vehicle.vehicle,
            user_id: vehicle.user_id,
            updated_at: moment().format()
        }
    })
}

const vehicleTypes = async (id: number) => {
    return await prisma.vehicle_type.findMany({
        where: {
            vehicles: {
                some:{
                    vehicle_id: id
                }
            }
        }
    })
}

export{
    VehicleProps,
    vehicles,
    vehicle,
    createVehicle,
    updateVehicle,
    vehicleTypes
}