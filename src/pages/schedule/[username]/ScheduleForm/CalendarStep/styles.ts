import { CalendarContainer } from '@/components/Calendar/styled'
import { Box, Text, styled } from '@ignite-ui/react'

export const TimePicker = styled('div', {
  borderLeft: '1px solid $gray600',
  padding: '$6 $6 0',
  overflowY: 'scroll',

  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  width: 280,

  '&::-webkit-scrollbar': {
    width: 8,
    padding: 2,
  },

  '&::-webkit-scrollbar-track': {
    backgroundColor: '$gray600',
    borderRadius: '$lg',
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$gray500',
    borderRadius: '$full',
  },
})

export const TimePickerHeader = styled(Text, {
  fontWeight: '$medium',

  span: {
    color: '$gray200',
  },
})

export const Container = styled(Box, {
  margin: '$6 auto 0',
  padding: 0,
  display: 'grid',
  maxWidth: '100%',
  position: 'relative',

  variants: {
    isTimePickerOpen: {
      true: {
        gridTemplateColumns: '1fr 280px',

        '@media(max-width: 900px)': {
          display: 'flex',
          flexDirection: 'column',
          gap: 10,

          [`> ${CalendarContainer}`]: {
            borderBottom: '1px solid $colors$gray600',
          },

          [`> ${TimePicker}`]: {
            position: 'relative',
            width: '100%',
            paddingTop: '$2',
            maxHeight: 420,
            textAlign: 'center',

            [`> ${TimePickerHeader}`]: {
              position: 'sticky',
              top: -10,
              backgroundColor: '$colors$gray800',
              paddingBottom: '$2',
            },
          },
        },
      },
      false: {
        width: 540,
        gridTemplateColumns: '1fr',
      },
    },
  },
})

export const TimePickerList = styled('div', {
  marginTop: '$3',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$2',

  '@media(max-width: 900px)': {
    gridTemplateColumns: '2fr',
  },
})

export const TimePickerItem = styled('button', {
  border: 0,
  backgroundColor: '$gray600',
  padding: '$2 0',
  cursor: 'pointer',
  color: '$gray100',
  borderRadius: '$sm',

  fontSize: '$sm',
  lineHeight: '$base',

  '&:last-child': {
    marginBottom: '$6',
  },

  '&:disabled': {
    background: 'transparent',
    cursor: 'default',
    opacity: 0.4,
  },

  '&:not(:disabled):hover': {
    background: '$gray500',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },
})
