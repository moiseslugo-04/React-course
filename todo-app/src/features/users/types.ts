import type { ErrorType, LoadingType } from '@/types'

type UserId = string

interface User {
  name: string
  email: string
}
interface UserTypedState {
  users: UserWithId[]
  loading: LoadingType
  error: ErrorType
}
interface UserWithId extends User {
  id: UserId
}
export type { UserId, User, UserWithId, UserTypedState }
