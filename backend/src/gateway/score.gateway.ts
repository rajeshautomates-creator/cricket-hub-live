import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: { origin: '*' } })
export class ScoreGateway {
    @WebSocketServer()
    server: Server;

    @SubscribeMessage('score:update')
    handleScoreUpdate(@MessageBody() data: any): void {
        // Ideally, update DB here using a service
        // Then broadcast
        this.server.emit(`match:${data.matchId}:score`, data);
    }

    // Helper to emit events from other services
    sendScoreUpdate(matchId: string, data: any) {
        this.server.emit(`match:${matchId}:score`, data);
    }
}
