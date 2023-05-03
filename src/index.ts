import {ApolloServer} from '@apollo/server'
import {startStandaloneServer} from '@apollo/server/standalone'
import {resolvers} from './apollo/resolvers.js'
import {typeDefs} from './apollo/typeDefs.js'

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
})
  
console.log(`🚀  Server ready at: ${url}`)