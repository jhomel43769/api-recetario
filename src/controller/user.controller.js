import { prisma } from '../../db.js';

export const getUsers = async(req, res) => {
    try {
        const users = await prisma.user.findMany();

        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: 'Error en el metodo GET', messagge: error.message });
    }
};

export const createUser = async(req, res) => {
    try {
        const { nombre, apellido, email, password } = req.body;

        const user = await prisma.user.create({
            data: {
                nombre,
                apellido,
                email,
                password
            }
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: 'Error en el metodo POST', message: error.message });
    }
};

export const updateUser = async(req, res) => {
    try {
        const { id } = req.params;
        const { nombre, apellido, email, password } = req.body;
        const existingUser = await prisma.user.findUnique({
            where: { id }
        });
        if (!existingUser) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        const updatedUser = await prisma.user.update({
            where: { id },
            data: {
                nombre,
                apellido,
                email,
                password
            }

        });
        res.status(200).json(updatedUser);
    } catch { error } {
        res.status(400).json({ error: 'Error en el metodo PUT', message: error.message });
    }
};

export const deleteUser = async(req, res) => {
    try {
        const { id } = req.params;

        const existeUser = await prisma.user.findUnique({
            where: { id },
        });
        if (!existeUser) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        const deleteUser = await prisma.user.delete({
            where: { id },
        });
        res.status(200).json({ message: "Usuario borrado con exito", user: deleteUser });
    } catch { error } {
        res.status(400).json({ error: 'Error en el metodo DELETE', message: error.message });
    }
};