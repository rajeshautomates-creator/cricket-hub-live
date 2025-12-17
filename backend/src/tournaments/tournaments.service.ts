import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TournamentsService {
    constructor(private prisma: PrismaService) { }

    create(data: Prisma.TournamentCreateInput) {
        return this.prisma.tournament.create({ data });
    }

    findAll() {
        return this.prisma.tournament.findMany({ include: { matches: true, teams: true } });
    }

    findOne(id: string) {
        return this.prisma.tournament.findUnique({ where: { id }, include: { matches: true, teams: true } });
    }
}
