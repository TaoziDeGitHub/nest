/// <reference types="multer" />
import { Response } from 'express';
export declare class UploadController {
    uploadFile(file: Express.Multer.File, res: Response): Promise<void>;
}
