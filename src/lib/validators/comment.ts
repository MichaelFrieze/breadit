import { z } from 'zod';

export const CommentValidator = z.object({
  postId: z.string(),
  text: z
    .string()
    .min(3, {
      message: 'Comment must be at least 3 characters long',
    })
    .max(190, {
      message: 'Comment must be less than 190 characters long',
    }),
  replyToId: z.string().optional(),
});

export type CommentRequest = z.infer<typeof CommentValidator>;
