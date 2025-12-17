import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class MatchesService {
    constructor(private prisma: PrismaService) { }

    create(data: Prisma.MatchCreateInput) {
        return this.prisma.match.create({ data });
    }

    findAll() {
        return this.prisma.match.findMany({ include: { homeTeam: true, awayTeam: true, score: true } });
    }

    findOne(id: string) {
        return this.prisma.match.findUnique({ where: { id }, include: { homeTeam: true, awayTeam: true, score: true } });
    }

    async updateStatus(id: string, status: any) {
        return this.prisma.match.update({
            where: { id },
            data: { status }
        });
    }
}
