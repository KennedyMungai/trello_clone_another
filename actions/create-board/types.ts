import { ActionState } from '@/lib/create-safe-action'
import { Board } from '@prisma/client'
import { z } from 'zod'
import { createBoard } from './schema'

export type InputType = z.infer<typeof createBoard>
export type ReturnType = ActionState<InputType, Board>
