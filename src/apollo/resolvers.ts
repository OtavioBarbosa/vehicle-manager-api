import { UserProps, users, user } from "../models/user.js"
import { VehicleProps, vehicles, vehicle, createVehicle, updateVehicle, vehicleTypes } from "../models/vehicle.js"
import { VehicleTypeProps, createVehicleType, updateVehicleType, vehicle_type, vehicles_types } from "../models/vehicle_type.js"

const resolvers = {
    Query: {
        vehicles: async () => await vehicles(),
        vehicle: async (parent: any, args: VehicleProps, contextValue: any, info: any) => await vehicle(args.id),
        users: async () => await users(),
        vehicles_types: async () => await vehicles_types(),
        vehicle_type: async (parent: any, args: VehicleTypeProps, contextValue: any, info: any) => await vehicle_type(args.id),
    },
    Mutation: {
        createVehicle: async (_: any, args: any) => await createVehicle(args.fields),
        updateVehicle: async (_: any, args: any) => await updateVehicle(args.id, args.fields),
        createVehicleType: async (_: any, args: any) => await createVehicleType(args.fields),
        updateVehicleType: async (_: any, args: any) => await updateVehicleType(args.id, args.fields),
    },
    Vehicle: {
      user: async (parent: VehicleProps, args: any, contextValue: any, info: any) => {
        return await user(parent.user_id)
      },
      vehicle_types: async (parent: VehicleProps, args: any, contextValue: any, info: any) => {
        return await vehicleTypes(parent.id)
      },
    },
}

export{
    resolvers
}
