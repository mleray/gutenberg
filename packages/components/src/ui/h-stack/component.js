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
 * import { HStack, Text, View } from `@wordpress/components/ui`
 *
 * function Example() {
 *   return (
 *     <HStack>
 *       <View>
 *         <Text>Ana</Text>
 *       </View>
 *       <View>
 *         <Text>Elsa</Text>
 *       </View>
 *       <View>
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
