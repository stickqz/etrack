import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const getAllRecords = async (_: Request, res: Response) => {
  const records = await prisma.record.findMany({ include: { bills: true } });
  res.json(records);
};


export const getRecordById = async (req: Request, res: Response) => {
  const record = await prisma.record.findUnique({
    where: { id: req.params.id },
    include: { bills: true },
  });
  if (!record) return res.status(404).json({ error: "Record not found" });
  res.json(record);
};


// export const createRecord = async (req: Request, res: Response) => {
//   const { title } = req.body;
//   const record = await prisma.record.create({
//     data: { title },
//   });
//   res.status(201).json(record);
// };


export const updateRecord = async (req: Request, res: Response) => {
  const { title } = req.body;
  const record = await prisma.record.update({
    where: { id: req.params.id },
    data: { title },
  });
  res.json(record);
};


export const deleteRecord = async (req: Request, res: Response) => {
  await prisma.record.delete({ where: { id: req.params.id } });
  res.status(204).send();
};
