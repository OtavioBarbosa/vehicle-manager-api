import { GraphQLDateTime } from 'graphql-scalars';
import { StateProps, createState, deleteState, state, states, updateState } from "../models/state.js"
import { UserProps, users, user } from "../models/user.js"
import { VehicleProps, vehicles, vehicle, createVehicle, updateVehicle, vehicleTypes } from "../models/vehicle.js"
import { VehicleTypeProps, createVehicleType, updateVehicleType, vehicle_type, vehicles_types } from "../models/vehicle_type.js"

const resolvers = {
    DateTime: GraphQLDateTime,
    Query: {
      states: async () => await states(),
      state: async (parent: any, args: StateProps, contextValue: any, info: any) => await state(args.id),
    },
    Mutation: {
      createState: async (_: any, args: any) => await createState(args.fields),
      updateState: async (_: any, args: any) => await updateState(args.id, args.fields),
      deleteState: async (_: any, args: any) => await deleteState(args.id),
    },
    State: {

    },
    // Vehicle: {
    //   user: async (parent: VehicleProps, args: any, contextValue: any, info: any) => {
    //     return await user(parent.user_id)
    //   },
    //   vehicle_types: async (parent: VehicleProps, args: any, contextValue: any, info: any) => {
    //     return await vehicleTypes(parent.id)
    //   },
    // },
}

export{
    resolvers
}
