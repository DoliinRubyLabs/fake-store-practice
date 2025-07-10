import { Star, StarHalf } from 'lucide-react'
import { type FC, Fragment } from 'react'

import { cn } from '@heroui/react'

import { EStarState } from './stars-rating.interface'
import { starsRatingService } from './stars-rating.service'

// interface
interface IProps {
  rating?: string
}

// component
const StarsRatingComponent: FC<Readonly<IProps>> = (props) => {
  const { rating } = props

  const thisService = starsRatingService()

  // return
  return (
    <div className='flex [&_svg]:h-5 [&_svg]:w-5 [&_svg]:stroke-1 [&_svg]:text-yellow-400'>
      {thisService.getStarStates(Number(rating))?.map((starType, index) => (
        <Fragment key={`${index}-star`}>
          {starType === EStarState.Half ? (
            <div className='relative'>
              <StarHalf className={cn('absolute fill-yellow-400')} />

              <Star />
            </div>
          ) : (
            <Star className={cn({ 'fill-yellow-400': starType === EStarState.Filled })} />
          )}
        </Fragment>
      ))}
    </div>
  )
}

export default StarsRatingComponent
