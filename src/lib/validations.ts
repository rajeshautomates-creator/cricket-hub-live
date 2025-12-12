import { z } from 'zod';

export const emailSchema = z
  .string()
  .min(1, 'Email is required')
  .email('Please enter a valid email address');

export const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number');

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, 'Password is required'),
});

export const signupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: emailSchema,
  password: passwordSchema,
});

export const tournamentSchema = z.object({
  name: z.string().min(2, 'Tournament name must be at least 2 characters'),
  description: z.string().optional(),
  venue: z.string().min(2, 'Venue must be at least 2 characters'),
  startDate: z.string().min(1, 'Start date is required'),
  endDate: z.string().min(1, 'End date is required'),
  oversFormat: z.number().min(1, 'Overs must be at least 1').max(50, 'Overs cannot exceed 50'),
});

export const teamSchema = z.object({
  name: z.string().min(2, 'Team name must be at least 2 characters'),
  shortName: z.string().min(1, 'Short name is required').max(5, 'Short name must be 5 characters or less'),
  captain: z.string().optional(),
  coach: z.string().optional(),
});

export const playerSchema = z.object({
  name: z.string().min(2, 'Player name must be at least 2 characters'),
  jerseyNumber: z.number().min(0, 'Jersey number must be positive').max(999, 'Jersey number too large').optional(),
  role: z.string().optional(),
  battingStyle: z.string().optional(),
  bowlingStyle: z.string().optional(),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type SignupFormData = z.infer<typeof signupSchema>;
export type TournamentFormData = z.infer<typeof tournamentSchema>;
export type TeamFormData = z.infer<typeof teamSchema>;
export type PlayerFormData = z.infer<typeof playerSchema>;
