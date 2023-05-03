import {prisma} from '../prisma/client.js'

interface UserProps{
    id: number
    user: string
}

const users = async () => {
    return await prisma.user.findMany()
}

const user = async (id: number) => {
    return await prisma.user.findUnique({
        where: {
            id: id,
        },
    })
}

export{
    UserProps,
    users,
    user
}