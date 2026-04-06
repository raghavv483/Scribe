import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { publicProcedure, router } from '.';
import { TRPCError } from '@trpc/server';
import { db } from '@/db';

export const appRouter = router({
    authCallback: publicProcedure.query(async () => {
        const { getUser } = getKindeServerSession()
        const user = await getUser()

        if (!user || !user.id || !user.email)
            throw new TRPCError({ code: 'UNAUTHORIZED' })

        const dbUser = await db.user.findFirst({
            where: {
                id: user.id  // ← was 'is', should be 'id'
            }
        })

        if (!dbUser) {
            await db.user.create({
                data: {
                    id: user.id,
                    email: user.email!,
                }
            })
        }  // ← closing brace was missing

        return { success: true }  // ← moved outside if block
    }),
})

export type AppRouter = typeof appRouter;