import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import { Request, Response, NextFunction } from 'express';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // app.use((req: Request, res: Response, next: NextFunction) => {
    //     // Permitir Electron (origin file:// o undefined)
    //     if (!req.headers.origin || req.headers.origin.startsWith('file://')) {
    //         return next();
    //     }
    //     // Permitir Android si envía el header correcto
    //     if (req.headers['x-app-origin'] === 'siaacom-android') {
    //         return next();
    //     }
    //     // Si no cumple, rechazar
    //     res.status(403).json({ error: 'No autorizado por CORS' });
    // });

    // app.enableCors({
    //     origin: (origin, callback) => {
    //         // Permitir Electron (origin file:// o undefined)
    //         if (!origin || origin.startsWith('file://')) {
    //             return callback(null, true);
    //         }
    //         // Permitir Android si el origin es null (fetch nativo) y header personalizado está presente
    //         callback(new Error('No permitido por CORS'));
    //     },
    //     credentials: true,
    // });

    app.enableCors({
        origin: '*', // CAMBIAR LO ANTES POSIBLE
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    });

    // Aumentar límite para manejar múltiples imágenes base64
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    await app.listen(3000);
}
bootstrap();
