import { Controller, Get, Post, Body, Param, Patch, UseGuards } from '@nestjs/common';
import { MatchesService } from './matches.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('matches')
export class MatchesController {
    constructor(private readonly matchesService: MatchesService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() createMatchDto: any) {
        return this.matchesService.create(createMatchDto);
    }

    @Get()
    findAll() {
        return this.matchesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.matchesService.findOne(id);
    }
}
