import { prisma } from '../../db.js';

export const getUsers = async(req, res) => {
    try {
        const users = await prisma.users.findMany();

        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: 'Error en el metodo GET', messagge: error.message });
    }
};

export const createUser = async(req, res) => {
    try {
        const { nombre, apellido, email, password } = req.body;

        const user = await prisma.create({
            data: {
                nombre,
                apellido,
                email,
                password
            };
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: 'Error en el metodo POST', message: error.message });
    }
};