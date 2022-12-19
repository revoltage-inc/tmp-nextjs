module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-prettier'],
  plugins: ['stylelint-order'],
  rules: {
    'at-rule-no-unknown': [true, { ignoreAtRules: ['extends', 'tailwind'] }],
    'function-no-unknown': [true, { ignoreFunctions: ['theme'] }],
    'block-no-empty': null,
    'font-family-no-missing-generic-family-keyword': null,
    'no-descending-specificity': null,
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-order': [
      {
        groupName: 'Flexbox',
        properties: [
          'display',
          'flex',
          'flex-flow',
          'flex-direction',
          'flex-wrap',
          'flex-grow',
          'flex-shrink',
          'flex-basis',
          'justify-content',
          'align-items',
          'gap',
          'flex-gap',
          'flex-row-gap',
          'flex-column-gap',
        ],
      },
      {
        groupName: 'Grid',
        properties: [
          'grid',
          'grid-auto-flow',
          'grid-template',
          'grid-template-columns',
          'grid-template-rows',
          'grid-row',
          'grid-row-start',
          'grid-row-end',
          'grid-column',
          'grid-column-start',
          'grid-column-end',
          'gap',
          'grid-gap',
          'grid-row-gap',
          'grid-column-gap',
        ],
      },
      {
        groupName: 'Font',
        properties: ['src', 'font-family', 'font-size', 'font-weight', 'font-display'],
      },
      {
        groupName: 'Text',
        properties: [
          'color',
          'opacity',
          'line-height',
          'letter-spacing',
          'white-space',
          'word-spacing',
          'word-break',
          'word-wrap',
          'writing-mode',
          'text-align',
          'text-overflow',
          'text-wrap',
          'user-select',
        ],
      },
      {
        groupName: 'Border',
        properties: [
          'border',
          'border-top',
          'border-right',
          'border-bottom',
          'border-left',
          'border-width',
          'border-top-width',
          'border-bottom-width',
          'border-left-width',
          'border-right-width',
          'border-radius',
          'border-top-left-radius',
          'border-top-right-radius',
          'border-bottom-left-radius',
          'border-bottom-right-radius',
        ],
      },
      {
        groupName: 'Background',
        properties: [
          'background',
          'background-color',
          'background-image',
          'background-repeat',
          'background-position',
          'background-position-x',
          'background-position-y',
          'background-size',
        ],
      },
      {
        groupName: 'Animation',
        properties: [
          'animation',
          'animation-name',
          'animation-duration',
          'transform',
          'transition',
        ],
      },
      {
        groupName: 'Position',
        properties: ['position', 'z-index', 'top', 'bottom', 'left', 'right'],
      },
      {
        groupName: 'Box',
        properties: [
          'overflow',
          'overflow-x',
          'overflow-y',
          '-webkit-box-orient',
          '-webkit-line-clamp',
          'box-sizing',
          'box-shadow',
          'cursor',
          'content',
          'direction',
          'width',
          'min-width',
          'max-width',
          'height',
          'min-height',
          'max-height',
          'margin',
          'margin-top',
          'margin-bottom',
          'margin-left',
          'margin-right',
          'padding',
          'padding-top',
          'padding-bottom',
          'padding-left',
          'padding-right',
        ],
      },
    ],
  },
}
