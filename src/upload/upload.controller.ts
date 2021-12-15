import {
  // Body,
  Controller,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { createWriteStream } from 'fs';
import { join } from 'node:path';

@Controller('upload')
export class UploadController {
  @Post('img')
  @UseInterceptors(FileInterceptor('image'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Res() res: Response,
  ): Promise<void> {
    console.log(file);
    // const imgname = `${file.originalname.split('.')[0]}-${Date.now()}.${
    //   file.originalname.split('.')[1]
    // }`;
    const imgname = file.originalname;
    const writeImage = createWriteStream(
      join(__dirname, '..', '../public/upload', `${imgname}`),
    );
    await writeImage.write(file.buffer);
    res.send({
      code: 666,
      data: {
        msg: 'ok',
        imgurl: `/upload/${imgname}`,
      },
    });
  }
}
