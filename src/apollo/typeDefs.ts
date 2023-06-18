const typeDefs = `#graphql
    scalar DateTime

    type Address {
        id:          Int         
        city_id:     Int
        postal_code: String
        street:      String
        district:    String
        created_at:  DateTime               
        updated_at:  DateTime               
        deleted_at:  DateTime
        city:        City                   
        companies:   [CompanyHasAddress]
        customers:   [CustomerHasAddress]
    }
    
    type BodyType {
        id:         Int       
        body_type:  String    
        created_at: DateTime  
        updated_at: DateTime  
        deleted_at: DateTime
        vehicles:   [Vehicle]
    }
    
    type Brand {
        id:            Int                      
        brand:         String                   
        created_at:    DateTime                 
        updated_at:    DateTime                 
        deleted_at:    DateTime
        vehicle_types: [VehicleTypeHasBrand]
    }
    
    type City {
        id:         Int       
        state_id:   Int
        city:       String
        created_at: DateTime  
        updated_at: DateTime  
        deleted_at: DateTime
        state:      State     
        addresses:  [Address]
    }
    
    type Color {
        id:         Int       
        color:      String    
        created_at: DateTime  
        updated_at: DateTime  
        deleted_at: DateTime
        vehicles:   [Vehicle]
    }
    
    type Company {
        id:            Int                   
        social_reason: String                
        register:      String
        fantasy_name:  String
        created_at:    DateTime              
        updated_at:    DateTime              
        deleted_at:    DateTime
        vehicles:      [Vehicle]
        phones:        [CompanyHasPhone]
        addresses:     [CompanyHasAddress]
        users:         [CompanyHasUser]
    }
    
    type CompanyHasAddress {
        id:          Int       
        company_id:  Int
        address_id:  Int
        number:      String
        complement:  String
        description: String
        created_at:  DateTime  
        updated_at:  DateTime  
        deleted_at:  DateTime
        company:     Company   
        address:     Address   
    }
    
    type CompanyHasPhone {
        id:          Int       
        company_id:  Int
        phone_id:    Int
        description: String
        created_at:  DateTime  
        updated_at:  DateTime  
        deleted_at:  DateTime
        company:     Company   
        phone:       Phone     
    }
    
    type CompanyHasUser {
        id:         Int       
        company_id: Int
        user_id:    Int
        created_at: DateTime  
        updated_at: DateTime  
        deleted_at: DateTime
        company:    Company   
        user:       User      
    }
    
    type Customer {
        id:         Int
        name:       String                 
        register:   String                 
        created_at: DateTime               
        updated_at: DateTime               
        deleted_at: DateTime
        vehicles:   [Vehicle]
        phones:     [CustomerHasPhone]
        addresses:  [CustomerHasAddress]
        users:      [CustomerHasUser]
        sales:      [Sale]
    }
    
    type CustomerHasAddress {
        id:          Int       
        customer_id: Int
        address_id:  Int
        number:      String
        complement:  String
        description: String
        created_at:  DateTime  
        updated_at:  DateTime  
        deleted_at:  DateTime
        customer:    Customer  
        address:     Address   
    }
    
    type CustomerHasPhone {
        id:          Int       
        customer_id: Int
        phone_id:    Int
        description: String
        created_at:  DateTime  
        updated_at:  DateTime  
        deleted_at:  DateTime
        customer:    Customer  
        phone:       Phone     
    }
    
    type CustomerHasUser {
        id:          Int       
        customer_id: Int
        user_id:     Int
        created_at:  DateTime  
        updated_at:  DateTime  
        deleted_at:  DateTime
        customer:    Customer  
        user:        User      
    }
    
    type EngineCapacity {
        id:              Int       
        engine_capacity: Int       
        created_at:      DateTime  
        updated_at:      DateTime  
        deleted_at:      DateTime
        vehicles:        [Vehicle]
    }
    
    type FuelType {
        id:         Int       
        fuel_type:  String    
        created_at: DateTime  
        updated_at: DateTime  
        deleted_at: DateTime
        vehicles:   [Vehicle]
    }
    
    type Model {
        id:                        Int
        vehicle_type_has_brand_id: Int
        model:                     Int
        created_at:                DateTime               
        updated_at:                DateTime               
        deleted_at:                DateTime
        vehicle_type_has_brand:    VehicleTypeHasBrand 
        versions:                  [ModelVersion]
        vehicles:                  [Vehicle]
    }
    
    type ModelVersion {
        id:         Int       
        model_id:   Int
        version:    Int       
        created_at: DateTime  
        updated_at: DateTime  
        deleted_at: DateTime
        model:      Model     
        vehicles:   [Vehicle]
    }
    
    type Permission {
        id:         Int                   
        permission: String                
        created_at: DateTime              
        updated_at: DateTime              
        deleted_at: DateTime
        users:      [UserHasPermission]
    }
    
    type Phone {
        id:            Int                  
        phone_type_id: Int
        ddd:           String
        phone:         String               
        created_at:    DateTime             
        updated_at:    DateTime             
        deleted_at:    DateTime
        type:          PhoneType           
        companies:     [CompanyHasPhone]
        customers:     [CustomerHasPhone]
    }
    
    type PhoneType {
        id:         Int       
        phone_type: String    
        created_at: DateTime  
        updated_at: DateTime  
        deleted_at: DateTime
        phones:     [Phone]
    }
    
    type Sale {
        id:           Int       
        vehicle_id:   Int
        customer_id:  Int
        sale_type_id: Int
        created_at:   DateTime  
        updated_at:   DateTime  
        deleted_at:   DateTime
        vehicle:      Vehicle   
        customer:     Customer  
        sale_type:    SaleType 
    }
    
    type SaleType {
        id:         Int       
        sale_type:  String
        created_at: DateTime  
        updated_at: DateTime  
        deleted_at: DateTime
        sales:      [Sale]
    }
    
    type State {
        id:     Int    
        state:  String 
        uf:     String 
        cities: [City]
    }
    
    type Transmission {
        id:           Int       
        transmission: String    
        created_at:   DateTime  
        updated_at:   DateTime  
        deleted_at:   DateTime
        vehicles:     [Vehicle]
    }
    
    type User {
        id:          Int                   
        email:       String                
        password:    String
        created_at:  DateTime              
        updated_at:  DateTime              
        deleted_at:  DateTime
        vehicle:     [Vehicle]
        permissions: [UserHasPermission]
        companies:   [CompanyHasUser]
        customers:   [CustomerHasUser]
    }
    
    type UserHasPermission {
        id:            Int        
        user_id:       Int
        permission_id: Int
        created_at:    DateTime   
        updated_at:    DateTime   
        deleted_at:    DateTime
        user:          User       
        permission:    Permission 
    }
    
    type Vehicle {
        id:                      Int                                  
        company_id:              Int
        model_id:                Int
        fuel_type_id:            Int
        engine_capacity_id:      Int
        transmission_id:         Int
        color_id:                Int
        body_type_id:            Int
        user_id:                 Int
        customer_id:             Int
        model_version_id:        Int
        description:             String
        year:                    Int
        km:                      Int
        abs:                     Boolean
        quantity_owners:         Int
        cost_price:              Float
        selling_price:           Float
        plate:                   String
        quantity_doors:          Int
        created_at:              DateTime                             
        updated_at:              DateTime                             
        deleted_at:              DateTime
        user:                    User                                 
        model:                   Model                                
        company:                 Company                              
        fuel_type:               FuelType                            
        engine_capacity:         EngineCapacity                      
        transmission:            Transmission                         
        color:                   Color                                
        body_type:               BodyType                            
        customer:                Customer                            
        model_version:           ModelVersion                       
        vehicle_characteristics: [VehicleHasVehicleCharacteristic]
        vehicle_options:         [VehicleHasVehicleOption]
        sales:                   [Sale]
    }
    
    type VehicleCharacteristic {
        id:                     Int                                  
        vehicle_characteristic: String                               
        created_at:             DateTime                             
        updated_at:             DateTime                             
        deleted_at:             DateTime
        vehicles:               [VehicleHasVehicleCharacteristic]
    }
    
    type VehicleHasVehicleCharacteristic {
        id:                        Int
        vehicle_id:                Int
        vehicle_characteristic_id: Int
        created_at:                DateTime               
        updated_at:                DateTime               
        deleted_at:                DateTime
        vehicle:                   Vehicle                
        vehicle_characteristic:    VehicleCharacteristic 
    }
    
    type VehicleOption {
        id:             Int                          
        vehicle_option: String                       
        created_at:     DateTime                     
        updated_at:     DateTime                     
        deleted_at:     DateTime
        vehicles:       [VehicleHasVehicleOption]
    }
    
    type VehicleHasVehicleOption {
        id:                Int            
        vehicle_id:        Int
        vehicle_option_id: Int
        created_at:        DateTime       
        updated_at:        DateTime       
        deleted_at:        DateTime
        vehicle:           Vehicle        
        vehicle_option:    VehicleOption 
    }
    
    type VehicleType {
        id:           Int                      
        vehicle_type: String                   
        created_at:   DateTime                 
        updated_at:   DateTime                 
        deleted_at:   DateTime
        brands:       [VehicleTypeHasBrand]
    }
    
    type VehicleTypeHasBrand {
        id:              Int          
        vehicle_type_id: Int
        brand_id:        Int
        created_at:      DateTime     
        updated_at:      DateTime     
        deleted_at:      DateTime
        vehicle_type:    VehicleType 
        brand:           Brand        
        models:          [Model]
    }   
    
    input fieldsAddress {
        id:          Int         
        city_id:     Int
        postal_code: String
        street:      String
        district:    String
        created_at:  DateTime               
        updated_at:  DateTime               
        deleted_at:  DateTime
        city:        fieldsCity                   
        companies:   [fieldsCompanyHasAddress]
        customers:   [fieldsCustomerHasAddress]
    }
    
    input fieldsBodyType {
        id:         Int       
        body_type:  String    
        created_at: DateTime  
        updated_at: DateTime  
        deleted_at: DateTime
        vehicles:   [fieldsVehicle]
    }
    
    input fieldsBrand {
        id:            Int                      
        brand:         String                   
        created_at:    DateTime                 
        updated_at:    DateTime                 
        deleted_at:    DateTime
        vehicle_types: [fieldsVehicleTypeHasBrand]
    }
    
    input fieldsCity {
        id:         Int       
        state_id:   Int
        city:       String
        created_at: DateTime  
        updated_at: DateTime  
        deleted_at: DateTime
        state:      fieldsState     
        addresses:  [fieldsAddress]
    }
    
    input fieldsColor {
        id:         Int       
        color:      String    
        created_at: DateTime  
        updated_at: DateTime  
        deleted_at: DateTime
        vehicles:   [fieldsVehicle]
    }
    
    input fieldsCompany {
        id:            Int                   
        social_reason: String                
        register:      String
        fantasy_name:  String
        created_at:    DateTime              
        updated_at:    DateTime              
        deleted_at:    DateTime
        vehicles:      [fieldsVehicle]
        phones:        [fieldsCompanyHasPhone]
        addresses:     [fieldsCompanyHasAddress]
        users:         [fieldsCompanyHasUser]
    }
    
    input fieldsCompanyHasAddress {
        id:          Int       
        company_id:  Int
        address_id:  Int
        number:      String
        complement:  String
        description: String
        created_at:  DateTime  
        updated_at:  DateTime  
        deleted_at:  DateTime
        company:     fieldsCompany   
        address:     fieldsAddress   
    }
    
    input fieldsCompanyHasPhone {
        id:          Int       
        company_id:  Int
        phone_id:    Int
        description: String
        created_at:  DateTime  
        updated_at:  DateTime  
        deleted_at:  DateTime
        company:     fieldsCompany   
        phone:       fieldsPhone     
    }
    
    input fieldsCompanyHasUser {
        id:         Int       
        company_id: Int
        user_id:    Int
        created_at: DateTime  
        updated_at: DateTime  
        deleted_at: DateTime
        company:    fieldsCompany   
        user:       fieldsUser      
    }
    
    input fieldsCustomer {
        id:         Int
        name:       String                 
        register:   String                 
        created_at: DateTime               
        updated_at: DateTime               
        deleted_at: DateTime
        vehicles:   [fieldsVehicle]
        phones:     [fieldsCustomerHasPhone]
        addresses:  [fieldsCustomerHasAddress]
        users:      [fieldsCustomerHasUser]
        sales:      [fieldsSale]
    }
    
    input fieldsCustomerHasAddress {
        id:          Int       
        customer_id: Int
        address_id:  Int
        number:      String
        complement:  String
        description: String
        created_at:  DateTime  
        updated_at:  DateTime  
        deleted_at:  DateTime
        customer:    fieldsCustomer  
        address:     fieldsAddress   
    }
    
    input fieldsCustomerHasPhone {
        id:          Int       
        customer_id: Int
        phone_id:    Int
        description: String
        created_at:  DateTime  
        updated_at:  DateTime  
        deleted_at:  DateTime
        customer:    fieldsCustomer  
        phone:       fieldsPhone     
    }
    
    input fieldsCustomerHasUser {
        id:          Int       
        customer_id: Int
        user_id:     Int
        created_at:  DateTime  
        updated_at:  DateTime  
        deleted_at:  DateTime
        customer:    fieldsCustomer  
        user:        fieldsUser      
    }
    
    input fieldsEngineCapacity {
        id:              Int       
        engine_capacity: Int       
        created_at:      DateTime  
        updated_at:      DateTime  
        deleted_at:      DateTime
        vehicles:        [fieldsVehicle]
    }
    
    input fieldsFuelType {
        id:         Int       
        fuel_type:  String    
        created_at: DateTime  
        updated_at: DateTime  
        deleted_at: DateTime
        vehicles:   [fieldsVehicle]
    }
    
    input fieldsModel {
        id:                        Int
        vehicle_type_has_brand_id: Int
        model:                     Int
        created_at:                DateTime               
        updated_at:                DateTime               
        deleted_at:                DateTime
        vehicle_type_has_brand:    fieldsVehicleTypeHasBrand 
        versions:                  [fieldsModelVersion]
        vehicles:                  [fieldsVehicle]
    }
    
    input fieldsModelVersion {
        id:         Int       
        model_id:   Int
        version:    Int       
        created_at: DateTime  
        updated_at: DateTime  
        deleted_at: DateTime
        model:      fieldsModel     
        vehicles:   [fieldsVehicle]
    }
    
    input fieldsPermission {
        id:         Int                   
        permission: String                
        created_at: DateTime              
        updated_at: DateTime              
        deleted_at: DateTime
        users:      [fieldsUserHasPermission]
    }
    
    input fieldsPhone {
        id:            Int                  
        phone_type_id: Int
        ddd:           String
        phone:         String               
        created_at:    DateTime             
        updated_at:    DateTime             
        deleted_at:    DateTime
        type:          fieldsPhoneType           
        companies:     [fieldsCompanyHasPhone]
        customers:     [fieldsCustomerHasPhone]
    }
    
    input fieldsPhoneType {
        id:         Int       
        phone_type: String    
        created_at: DateTime  
        updated_at: DateTime  
        deleted_at: DateTime
        phones:     [fieldsPhone]
    }
    
    input fieldsSale {
        id:           Int       
        vehicle_id:   Int
        customer_id:  Int
        sale_type_id: Int
        created_at:   DateTime  
        updated_at:   DateTime  
        deleted_at:   DateTime
        vehicle:      fieldsVehicle   
        customer:     fieldsCustomer  
        sale_type:    fieldsSaleType 
    }
    
    input fieldsSaleType {
        id:         Int       
        sale_type:  String
        created_at: DateTime  
        updated_at: DateTime  
        deleted_at: DateTime
        sales:      [fieldsSale]
    }
    
    input fieldsState {
        id:     Int    
        state:  String 
        uf:     String 
        cities: [fieldsCity]
    }
    
    input fieldsTransmission {
        id:           Int       
        transmission: String    
        created_at:   DateTime  
        updated_at:   DateTime  
        deleted_at:   DateTime
        vehicles:     [fieldsVehicle]
    }
    
    input fieldsUser {
        id:          Int                   
        email:       String                
        password:    String
        created_at:  DateTime              
        updated_at:  DateTime              
        deleted_at:  DateTime
        vehicle:     [fieldsVehicle]
        permissions: [fieldsUserHasPermission]
        companies:   [fieldsCompanyHasUser]
        customers:   [fieldsCustomerHasUser]
    }
    
    input fieldsUserHasPermission {
        id:            Int        
        user_id:       Int
        permission_id: Int
        created_at:    DateTime   
        updated_at:    DateTime   
        deleted_at:    DateTime
        user:          fieldsUser       
        permission:    fieldsPermission 
    }
    
    input fieldsVehicle {
        id:                      Int                                  
        company_id:              Int
        model_id:                Int
        fuel_type_id:            Int
        engine_capacity_id:      Int
        transmission_id:         Int
        color_id:                Int
        body_type_id:            Int
        user_id:                 Int
        customer_id:             Int
        model_version_id:        Int
        description:             String
        year:                    Int
        km:                      Int
        abs:                     Boolean
        quantity_owners:         Int
        cost_price:              Float
        selling_price:           Float
        plate:                   String
        quantity_doors:          Int
        created_at:              DateTime                             
        updated_at:              DateTime                             
        deleted_at:              DateTime
        user:                    fieldsUser                                 
        model:                   fieldsModel                                
        company:                 fieldsCompany                              
        fuel_type:               fieldsFuelType                            
        engine_capacity:         fieldsEngineCapacity                      
        transmission:            fieldsTransmission                         
        color:                   fieldsColor                                
        body_type:               fieldsBodyType                            
        customer:                fieldsCustomer                            
        model_version:           fieldsModelVersion                       
        vehicle_characteristics: [fieldsVehicleHasVehicleCharacteristic]
        vehicle_options:         [fieldsVehicleHasVehicleOption]
        sales:                   [fieldsSale]
    }
    
    input fieldsVehicleCharacteristic {
        id:                     Int                                  
        vehicle_characteristic: String                               
        created_at:             DateTime                             
        updated_at:             DateTime                             
        deleted_at:             DateTime
        vehicles:               [fieldsVehicleHasVehicleCharacteristic]
    }
    
    input fieldsVehicleHasVehicleCharacteristic {
        id:                        Int
        vehicle_id:                Int
        vehicle_characteristic_id: Int
        created_at:                DateTime               
        updated_at:                DateTime               
        deleted_at:                DateTime
        vehicle:                   fieldsVehicle                
        vehicle_characteristic:    fieldsVehicleCharacteristic 
    }
    
    input fieldsVehicleOption {
        id:             Int                          
        vehicle_option: String                       
        created_at:     DateTime                     
        updated_at:     DateTime                     
        deleted_at:     DateTime
        vehicles:       [fieldsVehicleHasVehicleOption]
    }
    
    input fieldsVehicleHasVehicleOption {
        id:                Int            
        vehicle_id:        Int
        vehicle_option_id: Int
        created_at:        DateTime       
        updated_at:        DateTime       
        deleted_at:        DateTime
        vehicle:           fieldsVehicle        
        vehicle_option:    fieldsVehicleOption 
    }
    
    input fieldsVehicleType {
        id:           Int                      
        vehicle_type: String                   
        created_at:   DateTime                 
        updated_at:   DateTime                 
        deleted_at:   DateTime
        brands:       [fieldsVehicleTypeHasBrand]
    }
    
    input fieldsVehicleTypeHasBrand {
        id:              Int          
        vehicle_type_id: Int
        brand_id:        Int
        created_at:      DateTime     
        updated_at:      DateTime     
        deleted_at:      DateTime
        vehicle_type:    fieldsVehicleType 
        brand:           fieldsBrand        
        models:          [fieldsModel]
    } 

    type Query {
        cities: [City]
        city(id: Int!): City
        states: [State]
        state(id: Int!): State
    }
    
    type Mutation {
        createAddress(
            fields: fieldsAddress
        ): Address
        updateAddress(
            id: Int!
            fields: fieldsAddress
        ): Address
        deleteAddress(id: Int!): Address

        createBodyType(
            fields: fieldsBodyType
        ): BodyType
        updateBodyType(
            id: Int!
            fields: fieldsBodyType
        ): BodyType
        deleteBodyType(id: Int!): BodyType

        createBrand(
            fields: fieldsBrand
        ): Brand
        updateBrand(
            id: Int!
            fields: fieldsBrand
        ): Brand
        deleteBrand(id: Int!): Brand

        createCity(
            fields: fieldsCity
        ): City
        updateCity(
            id: Int!
            fields: fieldsCity
        ): City
        deleteCity(id: Int!): City

        createColor(
            fields: fieldsColor
        ): Color
        updateColor(
            id: Int!
            fields: fieldsColor
        ): Color
        deleteColor(id: Int!): Color

        createCompany(
            fields: fieldsCompany
        ): Company
        updateCompany(
            id: Int!
            fields: fieldsCompany
        ): Company
        deleteCompany(id: Int!): Company

        createCompanyHasAddress(
            fields: fieldsCompanyHasAddress
        ): CompanyHasAddress
        updateCompanyHasAddress(
            id: Int!
            fields: fieldsCompanyHasAddress
        ): CompanyHasAddress
        deleteCompanyHasAddress(id: Int!): CompanyHasAddress

        createCompanyHasPhone(
            fields: fieldsCompanyHasPhone
        ): CompanyHasPhone
        updateCompanyHasPhone(
            id: Int!
            fields: fieldsCompanyHasPhone
        ): CompanyHasPhone
        deleteCompanyHasPhone(id: Int!): CompanyHasPhone

        createCompanyHasUser(
            fields: fieldsCompanyHasUser
        ): CompanyHasUser
        updateCompanyHasUser(
            id: Int!
            fields: fieldsCompanyHasUser
        ): CompanyHasUser
        deleteCompanyHasUser(id: Int!): CompanyHasUser

        createCustomer(
            fields: fieldsCustomer
        ): Customer
        updateCustomer(
            id: Int!
            fields: fieldsCustomer
        ): Customer
        deleteCustomer(id: Int!): Customer

        createCustomerHasAddress(
            fields: fieldsCustomerHasAddress
        ): CustomerHasAddress
        updateCustomerHasAddress(
            id: Int!
            fields: fieldsCustomerHasAddress
        ): CustomerHasAddress
        deleteCustomerHasAddress(id: Int!): CustomerHasAddress

        createCustomerHasPhone(
            fields: fieldsCustomerHasPhone
        ): CustomerHasPhone
        updateCustomerHasPhone(
            id: Int!
            fields: fieldsCustomerHasPhone
        ): CustomerHasPhone
        deleteCustomerHasPhone(id: Int!): CustomerHasPhone

        createCustomerHasUser(
            fields: fieldsCustomerHasUser
        ): CustomerHasUser
        updateCustomerHasUser(
            id: Int!
            fields: fieldsCustomerHasUser
        ): CustomerHasUser
        deleteCustomerHasUser(id: Int!): CustomerHasUser

        createEngineCapacity(
            fields: fieldsEngineCapacity
        ): EngineCapacity
        updateEngineCapacity(
            id: Int!
            fields: fieldsEngineCapacity
        ): EngineCapacity
        deleteEngineCapacity(id: Int!): EngineCapacity

        createFuelType(
            fields: fieldsFuelType
        ): FuelType
        updateFuelType(
            id: Int!
            fields: fieldsFuelType
        ): FuelType
        deleteFuelType(id: Int!): FuelType

        createModel(
            fields: fieldsModel
        ): Model
        updateModel(
            id: Int!
            fields: fieldsModel
        ): Model
        deleteModel(id: Int!): Model

        createModelVersion(
            fields: fieldsModelVersion
        ): ModelVersion
        updateModelVersion(
            id: Int!
            fields: fieldsModelVersion
        ): ModelVersion
        deleteModelVersion(id: Int!): ModelVersion

        createPermission(
            fields: fieldsPermission
        ): Permission
        updatePermission(
            id: Int!
            fields: fieldsPermission
        ): Permission
        deletePermission(id: Int!): Permission

        createPhone(
            fields: fieldsPhone
        ): Phone
        updatePhone(
            id: Int!
            fields: fieldsPhone
        ): Phone
        deletePhone(id: Int!): Phone

        createPhoneType(
            fields: fieldsPhoneType
        ): PhoneType
        updatePhoneType(
            id: Int!
            fields: fieldsPhoneType
        ): PhoneType
        deletePhoneType(id: Int!): PhoneType

        createSale(
            fields: fieldsSale
        ): Sale
        updateSale(
            id: Int!
            fields: fieldsSale
        ): Sale
        deleteSale(id: Int!): Sale

        createSaleType(
            fields: fieldsSaleType
        ): SaleType
        updateSaleType(
            id: Int!
            fields: fieldsSaleType
        ): SaleType
        deleteSaleType(id: Int!): SaleType

        createState(
            fields: fieldsState
        ): State
        updateState(
            id: Int!
            fields: fieldsState
        ): State
        deleteState(id: Int!): State

        createTransmission(
            fields: fieldsTransmission
        ): Transmission
        updateTransmission(
            id: Int!
            fields: fieldsTransmission
        ): Transmission
        deleteTransmission(id: Int!): Transmission

        createUser(
            fields: fieldsUser
        ): User
        updateUser(
            id: Int!
            fields: fieldsUser
        ): User
        deleteUser(id: Int!): User

        createUserHasPermission(
            fields: fieldsUserHasPermission
        ): UserHasPermission
        updateUserHasPermission(
            id: Int!
            fields: fieldsUserHasPermission
        ): UserHasPermission
        deleteUserHasPermission(id: Int!): UserHasPermission

        createVehicle(
            fields: fieldsVehicle
        ): Vehicle
        updateVehicle(
            id: Int!
            fields: fieldsVehicle
        ): Vehicle
        deleteVehicle(id: Int!): Vehicle

        createVehicleCharacteristic(
            fields: fieldsVehicleCharacteristic
        ): VehicleCharacteristic
        updateVehicleCharacteristic(
            id: Int!
            fields: fieldsVehicleCharacteristic
        ): VehicleCharacteristic
        deleteVehicleCharacteristic(id: Int!): VehicleCharacteristic

        createVehicleHasVehicleCharacteristic(
            fields: fieldsVehicleHasVehicleCharacteristic
        ): VehicleHasVehicleCharacteristic
        updateVehicleHasVehicleCharacteristic(
            id: Int!
            fields: fieldsVehicleHasVehicleCharacteristic
        ): VehicleHasVehicleCharacteristic
        deleteVehicleHasVehicleCharacteristic(id: Int!): VehicleHasVehicleCharacteristic

        createVehicleOption(
            fields: fieldsVehicleOption
        ): VehicleOption
        updateVehicleOption(
            id: Int!
            fields: fieldsVehicleOption
        ): VehicleOption
        deleteVehicleOption(id: Int!): VehicleOption

        createVehicleHasVehicleOption(
            fields: fieldsVehicleHasVehicleOption
        ): VehicleHasVehicleOption
        updateVehicleHasVehicleOption(
            id: Int!
            fields: fieldsVehicleHasVehicleOption
        ): VehicleHasVehicleOption
        deleteVehicleHasVehicleOption(id: Int!): VehicleHasVehicleOption

        createVehicleType(
            fields: fieldsVehicleType
        ): VehicleType
        updateVehicleType(
            id: Int!
            fields: fieldsVehicleType
        ): VehicleType
        deleteVehicleType(id: Int!): VehicleType

        createVehicleTypeHasBrand(
            fields: fieldsVehicleTypeHasBrand
        ): VehicleTypeHasBrand
        updateVehicleTypeHasBrand(
            id: Int!
            fields: fieldsVehicleTypeHasBrand
        ): VehicleTypeHasBrand
        deleteVehicleTypeHasBrand(id: Int!): VehicleTypeHasBrand

    }
`

export{
    typeDefs
}