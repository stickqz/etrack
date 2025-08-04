import { Request, Response, NextFunction } from "express";


export function logger(req: Request, res: Response, next: NextFunction) {
    const remoteAddr = req.ip || req.socket.remoteAddress;

    res.on('finish', () => {
        const lg = `${remoteAddr} - - ` +
        `${new Date().toLocaleString()} ` +
        `${req.method} ${req.originalUrl} HTTP/${req.httpVersion} ` +
        `${res.statusCode} ${res.get('Content-Length') || '-'} ` +
        `${req.get('referer') || '-'} ` +
        `${req.get('user-agent') || '-'}`;

        console.log(lg);
    });

    next();
}
