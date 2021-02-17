/**
 * Internal dependencies
 */
import { createComponent } from '../utils';
import { useHStack } from './hook';

/**
 * `HStack` (Horizontal Stack) arranges child elements in a horizontal line.
 *
 * `HStack` can render anything inside.
 *
 * @example
 * ```jsx
 * import { HStack, Text, View } from `@wp-g2/components`
 * import { ui } from `@wp-g2/styles`
 *
 * function Example() {
 *   return (
 *     <HStack>
 *       <View css={[ui.background.blue]}>
 *         <Text>Ana</Text>
 *       </View>
 *       <View css={[ui.background.blue]}>
 *         <Text>Elsa</Text>
 *       </View>
 *       <View css={[ui.background.blue]}>
 *         <Text>Olaf</Text>
 *       </View>
 *     </HStack>
 *   );
 * }
 * ```
 */
const HStack = createComponent( {
	as: 'div',
	useHook: useHStack,
	name: 'HStack',
} );

export default HStack;
