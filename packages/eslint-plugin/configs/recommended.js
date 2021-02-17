/**
 * External dependencies
 */
const { cosmiconfigSync } = require( 'cosmiconfig' );

/**
 * WordPress dependencies
 */
const defaultPrettierConfig = require( '@wordpress/prettier-config' );

const { config: localPrettierConfig } =
	cosmiconfigSync( 'prettier' ).search() || {};
const prettierConfig = { ...defaultPrettierConfig, ...localPrettierConfig };

module.exports = {
	settings: {
		'import/resolver': {
			node: {
				"extensions": [".js", ".jsx", ".ts", ".tsx"]
			}
		}
	},
	parser: '@typescript-eslint/parser',
	extends: [
		require.resolve( './recommended-with-formatting.js' ),
		'plugin:prettier/recommended',
		'prettier/react',
		'plugin:@typescript-eslint/eslint-recommended',
	],
	rules: {
		'prettier/prettier': [ 'error', prettierConfig ],
	},
	overrides: [
		{
			// Don't require redundant JSDoc types in TypeScript files.
			files: [ '**/*.ts', '**/*.tsx' ],
			rules: {
				'jsdoc/require-param-type': 'off',
				'jsdoc/require-returns-type': 'off',
			},
		},
	],
};
