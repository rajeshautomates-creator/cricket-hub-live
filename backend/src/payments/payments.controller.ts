import { Controller, Post, Body, Headers, UseGuards, Request } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('payments')
export class PaymentsController {
    constructor(private readonly paymentsService: PaymentsService) { }

    @UseGuards(JwtAuthGuard)
    @Post('subscribe')
    createSubscription(@Request() req) {
        return this.paymentsService.createSubscription(req.user.userId);
    }

    @Post('webhook')
    handleWebhook(@Headers('x-razorpay-signature') signature: string, @Body() payload: any) {
        return this.paymentsService.handleWebhook(signature, payload);
    }
}
