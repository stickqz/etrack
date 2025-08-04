import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


export const getAllBills = async (_: Request, res: Response) => {
    const bills = await prisma.bill.findMany();

    res.json(bills);
};


export const getBillById = async (req: Request, res: Response) => {
    const id = req.params.id;

    const bill = await prisma.bill.findUnique({ where: { id } });

    if (!bill)
        return res.status(404).json({ error: "Bill not found" });

    res.json(bill);
};


export const createBill = async (req: Request, res: Response) => {
    const { name, amount, description, date, recordId } = req.body;

    const bill = await prisma.bill.create({
        data: { name, amount, description, recordId },
    });


    await prisma.record.update({
        where: { id: recordId },
        data: {
            netAmount: {
                increment: amount,
            },
            lastEdited: date
        },
    });

    res.status(201).json(bill);
};


export const deleteBill = async (req: Request, res: Response) => {
    await prisma.bill.delete({ where: { id: req.params.id } });
    res.status(204).send();
};
