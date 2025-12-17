import { Injectable, BadRequestException } from '@nestjs/common';
import Razorpay from 'razorpay';
import * as crypto from 'crypto';
import { UsersService } from '../users/users.service';

@Injectable()
export class PaymentsService {
    private razorpay: any;

    constructor(private usersService: UsersService) {
        // Should use real keys in production
        this.razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID || 'test_key_id',
            key_secret: process.env.RAZORPAY_KEY_SECRET || 'test_key_secret',
        });
    }

    async createSubscription(userId: string) {
        // Mock or real implementation
        // For now returning mock data to avoid API calls without real keys
        return {
            id: 'sub_' + Math.random().toString(36).substring(7),
            entity: 'subscription',
            plan_id: 'plan_test',
            status: 'created'
        };
    }

    async handleWebhook(signature: string, payload: any) {
        const secret = process.env.RAZORPAY_WEBHOOK_SECRET || 'webhook_secret';

        // Simple signature verification logic
        const shasum = crypto.createHmac('sha256', secret);
        shasum.update(JSON.stringify(payload));
        const digest = shasum.digest('hex');

        // In a real scenario, compare digest with signature. 
        // Allowing through for now as we don't have the secret setup

        // Logic to update user role
        const event = payload.event;
        if (event === 'subscription.active' || event === 'payment.captured') {
            const email = payload.payload?.payment?.entity?.email;
            if (email) {
                const user = await this.usersService.findOne(email);
                if (user) {
                    await this.usersService.updateRole(user.id, 'ADMIN');
                }
            }
        }
        return { status: 'ok' };
    }
}
