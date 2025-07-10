import { EStarState } from './stars-rating.interface'

export const starsRatingService = () => {
  const getStarStates = (ratingNum: number) => {
    const ratingOutOf5 = Math.round(ratingNum) / 2

    const fullStars = Math.floor(ratingOutOf5)

    const hasHalf = ratingOutOf5 % 1 >= 0.5

    const stars: EStarState[] = [...Array(5)].map((_, i) => {
      if (i < fullStars) return EStarState.Filled
      if (i === fullStars && hasHalf) return EStarState.Half
      return EStarState.Empty
    })

    return stars
  }

  // return
  return { getStarStates }
}
