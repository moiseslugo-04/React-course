interface UserProps {
  userName: string
  name: string
  isFollow: boolean
  id: string
}
interface FollowCardProps extends UserProps {
  onClick: (id: string) => void
}
export type { UserProps, FollowCardProps }
