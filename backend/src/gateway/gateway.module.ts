import { Module, Global } from '@nestjs/common';
import { ScoreGateway } from './score.gateway';

@Global()
@Module({
    providers: [ScoreGateway],
    exports: [ScoreGateway],
})
export class GatewayModule { }
