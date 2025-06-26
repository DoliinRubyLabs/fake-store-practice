import NextLink from 'next/link'
import { type FC } from 'react'

import { Button, type ButtonProps } from '@heroui/button'
import { Divider } from '@heroui/divider'
import { Link } from '@heroui/link'
import { cn } from '@heroui/react'

import { type IActionField } from '@/app/entities/models/common.model'

// interface
interface IProps extends IActionField {
  prefetch?: boolean
  actionLinkVariant?: 'underline'
  radius?: ButtonProps['radius']
  className?: string
  onPress?: ButtonProps['onPress']
}

// component
const ActionComponent: FC<Readonly<IProps>> = (props) => {
  const {
    actionType,
    actionText,
    actionLinkUrl,
    actionButtonUrl,
    actionIconSvg,
    actionIconPosition,
    actionLinkColor,
    actionButtonColor,
    actionButtonVariant,
    actionOpenInNewTab,
    className,
    actionLinkVariant,
    radius,
    prefetch = true,
    onPress,
  } = props

  // return
  return (
    <>
      {(actionType === 'button' || actionType === 'buttonWithIcon' || actionType === 'buttonIconOnly') && (
        <>
          {!actionButtonUrl ? (
            <Button
              onPress={onPress}
              startContent={
                actionIconSvg &&
                actionIconPosition === 'left' &&
                actionType !== 'button' && (
                  <span className='[&_svg]:w-4' dangerouslySetInnerHTML={{ __html: actionIconSvg }} />
                )
              }
              endContent={
                actionIconSvg &&
                actionIconPosition === 'right' &&
                actionType !== 'button' && (
                  <span className='[&_svg]:w-4' dangerouslySetInnerHTML={{ __html: actionIconSvg }} />
                )
              }
              className={cn('hidden md:flex', className)}
              isIconOnly={actionType === 'buttonIconOnly'}
              radius={radius}
              variant={actionButtonVariant}
              color={actionButtonColor}
            >
              {actionText}
            </Button>
          ) : (
            <Button
              href={actionButtonUrl}
              as={NextLink}
              prefetch={prefetch}
              target={actionOpenInNewTab ? '_blank' : '_self'}
              onPress={onPress}
              startContent={
                actionIconSvg &&
                actionIconPosition === 'left' &&
                actionType !== 'button' && (
                  <span className='[&_svg]:w-[20px]' dangerouslySetInnerHTML={{ __html: actionIconSvg }} />
                )
              }
              endContent={
                actionIconSvg &&
                actionIconPosition === 'right' &&
                actionType !== 'button' && (
                  <span className='[&_svg]:w-[20px]' dangerouslySetInnerHTML={{ __html: actionIconSvg }} />
                )
              }
              className={cn(className)}
              isIconOnly={actionType === 'buttonIconOnly'}
              radius={radius}
              variant={actionButtonVariant}
              color={actionButtonColor}
            >
              {actionText}
            </Button>
          )}
        </>
      )}

      {(actionType === 'link' || actionType === 'linkWithIcon' || actionType === 'linkIconOnly') && (
        <Link
          href={actionLinkUrl ?? '/'}
          as={NextLink}
          prefetch={prefetch}
          target={actionOpenInNewTab ? '_blank' : '_self'}
          className={cn('group relative grid w-fit items-center gap-1 text-sm', className, {
            'grid-cols-[auto_1fr]': actionType === 'linkWithIcon' && actionIconPosition === 'left',
            'grid-cols-[1fr_auto]': actionType === 'linkWithIcon' && actionIconPosition === 'right',
          })}
          color={actionLinkColor || 'foreground'}
        >
          {actionIconSvg && actionType !== 'link' && actionIconPosition === 'left' && (
            <span className='[&_svg]:max-h-4 [&_svg]:max-w-4' dangerouslySetInnerHTML={{ __html: actionIconSvg }} />
          )}

          {actionType === 'linkIconOnly' ? null : actionText}

          {actionIconSvg && actionType !== 'link' && actionIconPosition === 'right' && (
            <span className='[&_svg]:h-4 [&_svg]:w-4' dangerouslySetInnerHTML={{ __html: actionIconSvg }} />
          )}

          {actionLinkVariant === 'underline' && (
            <Divider className='absolute bottom-0 left-0 right-0 -mb-1 bg-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
          )}
        </Link>
      )}
    </>
  )
}

export default ActionComponent
