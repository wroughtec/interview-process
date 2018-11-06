const Stylelint = {
  plugins: [
    'stylelint-order',
    'stylelint-no-unsupported-browser-features',
    './node_modules/stylelint-no-browser-hacks/lib'
  ],
  ignoreFiles: ['**/*.js', '**/*.jsx'],

  extends: ['stylelint-config-prettier'],

  'order/order': ['custom-properties', 'dollar-variables', 'declarations', 'at-rules', 'rules'],

  rules: {
    'order/properties-order': [
      {
        emptyLineBefore: 'always',
        properties: ['position', 'top', 'right', 'bottom', 'left', 'z-index']
      },
      {
        emptyLineBefore: 'always',
        properties: [
          'box-sizing',
          'display',
          'float',
          'width',
          'min-width',
          'max-width',
          'height',
          'min-height',
          'max-height',
          'appearance',
          'padding',
          'padding-top',
          'padding-right',
          'padding-bottom',
          'padding-left',
          'margin',
          'margin-top',
          'margin-right',
          'margin-bottom',
          'margin-left',
          'overflow',
          'overflow-x',
          'overflow-y',
          'clip',
          'clear'
        ]
      },
      {
        emptyLineBefore: 'always',
        properties: [
          'flex-flow',
          'flex-direction',
          'flex-wrap',
          'justify-content',
          'align-items',
          'align-content',
          'order',
          'flex',
          'flex-grow',
          'flex-shrink',
          'flex-basis',
          'align-self'
        ]
      },
      {
        emptyLineBefore: 'always',
        properties: [
          'font',
          'font-family',
          'font-size',
          'font-style',
          'font-weight',
          'font-variant',
          'font-size-adjust',
          'font-stretch',
          'font-effect',
          'font-emphasize',
          'font-emphasize-position',
          'font-emphasize-style',
          'font-smooth',
          'line-height',
          'color',
          'text-align',
          'text-align-last',
          'text-emphasis',
          'text-emphasis-color',
          'text-emphasis-style',
          'text-emphasis-position',
          'text-decoration',
          'text-indent',
          'text-justify',
          'text-outline',
          'text-overflow',
          'text-overflow-ellipsis',
          'text-overflow-mode',
          'text-shadow',
          'text-transform',
          'text-wrap',
          'text-size-adjust',
          'letter-spacing',
          'word-break',
          'word-spacing',
          'word-wrap',
          'tab-size',
          'white-space',
          'vertical-align',
          'list-style',
          'list-style-position',
          'list-style-type',
          'list-style-image'
        ]
      },
      {
        emptyLineBefore: 'always',
        properties: ['pointer-events', 'touch-action', 'cursor', 'visibility', 'zoom']
      },
      {
        emptyLineBefore: 'always',
        properties: ['table-layout', 'empty-cells', 'caption-side', 'border-spacing', 'border-collapse']
      },
      {
        emptyLineBefore: 'always',
        properties: ['content', 'quotes', 'counter-reset', 'counter-increment']
      },
      {
        emptyLineBefore: 'always',
        properties: ['resize', 'user-select', 'nav-index', 'nav-up', 'nav-right', 'nav-down', 'nav-left']
      },
      {
        emptyLineBefore: 'always',
        properties: [
          'background',
          'background-color',
          'background-image',
          'filter',
          'background-repeat',
          'background-attachment',
          'background-position',
          'background-position-x',
          'background-position-y',
          'background-clip',
          'background-origin',
          'background-size',
          'border',
          'border-color',
          'border-style',
          'border-width',
          'border-top',
          'border-top-color',
          'border-top-style',
          'border-top-width',
          'border-right',
          'border-right-color',
          'border-right-style',
          'border-right-width',
          'border-bottom',
          'border-bottom-color',
          'border-bottom-style',
          'border-bottom-width',
          'border-left',
          'border-left-color',
          'border-left-style',
          'border-left-width',
          'border-radius',
          'border-top-left-radius',
          'border-top-right-radius',
          'border-bottom-right-radius',
          'border-bottom-left-radius',
          'border-image',
          'border-image-source',
          'border-image-slice',
          'border-image-width',
          'border-image-outset',
          'border-image-repeat',
          'outline',
          'outline-color',
          'outline-offset',
          'outline-style',
          'outline-width',
          'box-shadow'
        ]
      },
      {
        emptyLineBefore: 'always',
        properties: [
          'opacity',
          '-ms-interpolation-mode',
          'transition',
          'transition-delay',
          'transition-timing-function',
          'transition-duration',
          'transition-property',
          'transform',
          'transform-origin',
          'animation',
          'animation-name',
          'animation-duration',
          'animation-play-state',
          'animation-timing-function',
          'animation-delay',
          'animation-iteration-count',
          'animation-direction'
        ]
      }
    ],

    'plugin/no-unsupported-browser-features': [
      true,
      {
        severity: 'warning'
      }
    ],

    'plugin/no-browser-hacks': [
      true,
      {
        severity: 'warning'
      }
    ],

    /* Possible errors */
    'color-no-invalid-hex': true,
    'font-family-no-duplicate-names': true,
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'string-no-newline': true,
    'unit-no-unknown': true,
    'property-no-unknown': true,
    'keyframe-declaration-no-important': true,
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates-with-different-values']
      }
    ],
    'declaration-block-no-shorthand-property-overrides': true,
    'block-no-empty': true,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': true,
    'media-feature-name-no-unknown': true,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'include',
          'extend',
          'at-root',
          'if',
          'else',
          'mixin',
          'return',
          'function',
          'each',
          'warn',
          'debug',
          'error',
          'content',
          'for'
        ]
      }
    ],
    'comment-no-empty': true,
    'max-nesting-depth': [
      4,
      {
        ignore: ['blockless-at-rules']
      }
    ],
    'no-descending-specificity': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,
    'no-unknown-animations': true,

    /* Limit Language features */
    'color-named': 'never',
    /* IE & Edge truncate after 2 decimal places */
    'number-max-precision': 2,
    'declaration-no-important': [true, { severity: 'warning' }],
    'declaration-block-single-line-max-declarations': 1,
    'selector-max-empty-lines': 0,

    /* Stylistic issues */
    'color-hex-case': 'lower',
    'font-family-name-quotes': 'always-where-required',
    'font-weight-notation': 'numeric',
    'function-comma-newline-after': 'always-multi-line',
    'function-comma-space-after': 'always-single-line',
    'function-comma-space-before': 'never',
    'function-max-empty-lines': 0,
    'function-parentheses-space-inside': 'never',
    'function-url-quotes': 'always',
    'function-whitespace-after': 'always',
    'number-leading-zero': 'never',
    'number-no-trailing-zeros': true,
    'string-quotes': 'single',
    'length-zero-no-unit': true,
    'unit-case': 'lower',
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',
    'value-list-max-empty-lines': 0,
    'property-case': 'lower',
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always',
    'block-opening-brace-newline-after': 'always',
    'block-opening-brace-space-before': 'always',
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'always',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-type-case': 'lower',
    'selector-list-comma-newline-after': 'always',
    'selector-list-comma-space-after': 'always-single-line',
    'selector-list-comma-space-before': 'never',
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested']
      }
    ],
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'media-query-list-comma-newline-after': 'always-multi-line',
    'media-query-list-comma-space-after': 'always-single-line',
    'media-query-list-comma-space-before': 'never',
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-blockless', 'first-nested'],
        ignore: ['after-comment']
      }
    ],
    'at-rule-name-case': 'lower',
    'at-rule-name-space-after': 'always-single-line',
    'at-rule-semicolon-newline-after': 'always',
    'at-rule-semicolon-space-before': 'never',
    'comment-empty-line-before': 'always',
    'comment-whitespace-inside': 'always',
    indentation: 2,
    'max-empty-lines': [
      1,
      {
        ignore: ['comments']
      }
    ],
    'max-line-length': 120,
    'no-eol-whitespace': true,
    'no-missing-end-of-source-newline': true
  }
};

module.exports = Stylelint;
