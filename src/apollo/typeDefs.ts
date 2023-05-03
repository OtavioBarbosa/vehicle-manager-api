const typeDefs = `#graphql
    input fieldsVehicle {
        vehicle: String!
        user_id: Int!
        vehicle_types: [fieldsVehicleType]
    }

    type Vehicle {
        id: Int
        vehicle: String
        user_id: Int
        created_at: String
        updated_at: String
        deleted_at: String
        user: User
        vehicle_types: [VehicleType]
    }
    
    input fieldsVehicleType {
        vehicle_type: String!
    }

    type VehicleType {
        id: Int
        vehicle_type: String
        created_at: String
        updated_at: String
        deleted_at: String
    }

    input fieldsUser {
        user: String!
    }

    type User {
        id: Int
        user: String
    }

    type Query {
        vehicles: [Vehicle]
        users: [User]
        vehicle(id: Int!): Vehicle
        vehicles_types: [VehicleType]
        vehicle_type(id: Int!): VehicleType
    }
    
    type Mutation {
        createVehicle(
            fields: fieldsVehicle
        ): Vehicle
        updateVehicle(
            id: Int!
            fields: fieldsVehicle
        ): Vehicle
        deleteVehicle(id: Int!): Vehicle
        createVehicleType(
            fields: fieldsVehicleType
        ): VehicleType
        updateVehicleType(
            id: Int!
            fields: fieldsVehicleType
        ): VehicleType
        deleteVehicleType(id: Int!): VehicleType
    }
`

export{
    typeDefs
}