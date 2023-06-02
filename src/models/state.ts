import {prisma} from '../prisma/client.js'

interface StateProps{
    id: number
    state: string
    uf: string
}

const states = async () => {
    return await prisma.state.findMany()
}

const state = async (id: number) => {
    return await prisma.state.findUnique({
        where: {
            id: id,
        },
    })
}

const createState = async (state: StateProps) => {
    return await prisma.state.create({
        data: {
            state: state.state,
            uf: state.uf,
        }
    })
}

const updateState = async (id: number, state: StateProps) => {
    return await prisma.state.update({
        where: {
            id
        },
        data: {
            state: state.state,
            uf: state.uf
        }
    })
}

const deleteState = async (id: number) => {
    return await prisma.state.delete({
        where: {
            id
        }
    })
}

export{
    StateProps,
    states,
    state,
    createState,
    updateState,
    deleteState
}