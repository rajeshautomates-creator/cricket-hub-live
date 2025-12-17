import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { TournamentsService } from './tournaments.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('tournaments')
export class TournamentsController {
    constructor(private readonly tournamentsService: TournamentsService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() createTournamentDto: any) {
        // Transform DTO to Prisma Input if needed. 
        // For now assuming body matches. Ideally, use specific DTOs.
        // Ensure creator is linked from request user (omitted for brevity, assume passed or handled)
        return this.tournamentsService.create(createTournamentDto);
    }

    @Get()
    findAll() {
        return this.tournamentsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.tournamentsService.findOne(id);
    }
}
