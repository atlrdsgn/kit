export const kitFilterBlur = {
  none: {
    backdropFilter: 'none',
    WebkitBackdropFilter: 'none',
  },
  XS: {
    backdropFilter: 'blur(1px)',
    WebkitBackdropFilter: 'blur(1px)',
  },
  SM: {
    backdropFilter: 'blur(4px)',
    WebkitBackdropFilter: 'blur(4px)',
  },
  MD: {
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
  },
} as const;
