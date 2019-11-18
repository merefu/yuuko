import { Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { MediaService} from './media.service';

@Controller('media')
export class MediaController {
    constructor(private readonly mediaService: MediaService) {}

    @Get()
    async getAll(): Promise<string> {
        return 'all media';
    }

    @Get(':id')
    async get(@Param('id', new ParseIntPipe()) id: number): Promise<string> {
        return 'Get ' + id.toString();
    }

    @Put(':id')
    async update(@Param('id', new ParseIntPipe()) id: number): Promise<string> {
        return 'Update ' + id.toString();
    }

    @Post()
    async create(): Promise<string> {
        return 'Create';
    }
}
