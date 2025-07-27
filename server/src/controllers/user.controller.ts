import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


export const getUser = async (req: Request, res: Response) => {
    const user = await prisma.user.findUnique({
        where: { id: req.params.id },
        include: { records: true },
    });
    if (!user) return res.status(404).json({ error: "user not found" });
    res.json(user);
};


export const createUser = async (req: Request, res: Response) => {
    const { name, email } = req.body;

    const user = await prisma.user.create({
        data: { name, email },
    });

    console.log('User created:', user);

    res.status(201).json(user);
}


export const deleteUser = async (req: Request, res: Response) => {
    await prisma.user.delete({ where: { id: req.params.id } });
    res.status(204).send();
};
