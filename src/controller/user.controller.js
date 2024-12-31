import { prisma } from '../../db.js';

export const getUsers = async(req, res) => {
    try {
        const users = await prisma.users.findMany();

        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: 'Error en el metodo GET', messagge: error.message });
    }
};