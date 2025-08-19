import type { FollowCardProps } from '../types'
export function FollowCard({
  name,
  isFollow,
  userName,
  id,
  onClick,
}: FollowCardProps) {
  const handleClick = () => {
    onClick(id)
  }
  const buttonClassName = isFollow
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'
  const text = isFollow ? 'Following' : 'Follow'
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt='El avatar de midudev'
          src={`https://unavatar.io/${userName}`}
        />
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Stop Following</span>
        </button>
      </aside>
    </article>
  )
}
