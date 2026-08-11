const config = {
  multipass: true,
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          cleanupIds: false,
          removeHiddenElems: false,
          removeViewBox: false,
          // Every fill in the designer art relies on the default nonzero
          // fill-rule, so merging concentric subpaths turns rings into solid
          // discs and outlines into filled shapes.
          mergePaths: false,
        },
      },
    },
    {
      name: 'cleanupIds',
      params: {
        preserve: [
          'timeline-backdrop',
          'timeline-card-1',
          'timeline-card-2',
          'timeline-card-4',
          'timeline-card-5',
          'timeline-card-6',
          'timeline-card-8',
          'timeline-card-9',
        ],
      },
    },
  ],
};

export default config;
