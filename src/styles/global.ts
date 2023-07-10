import { globalCss } from '@ignite-ui/react'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '--webkit-font-smoothing': 'antialiased',

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
  },
})
