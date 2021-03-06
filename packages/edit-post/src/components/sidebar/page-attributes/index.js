/**
 * External dependencies
 */
import { get, partial } from 'lodash';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PanelBody, PanelRow } from '@wordpress/components';
import { compose } from '@wordpress/compose';
import {
	PageAttributesCheck,
	PageAttributesOrder,
	PageAttributesParent,
	PageTemplate,
} from '@wordpress/editor';
import { withSelect, withDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { store as editPostStore } from '../../../store';

/**
 * Module Constants
 */
const PANEL_NAME = 'page-attributes';

export function PageAttributes( {
	isEnabled,
	isOpened,
	onTogglePanel,
	postType,
} ) {
	if ( ! isEnabled || ! postType ) {
		return null;
	}
	return (
		<PageAttributesCheck>
			<PanelBody
				title={ get(
					postType,
					[ 'labels', 'attributes' ],
					__( 'Page attributes' )
				) }
				opened={ isOpened }
				onToggle={ onTogglePanel }
			>
				<PageTemplate />
				<PageAttributesParent />
				<PanelRow>
					<PageAttributesOrder />
				</PanelRow>
			</PanelBody>
		</PageAttributesCheck>
	);
}

const applyWithSelect = withSelect( ( select ) => {
	const { getEditedPostAttribute } = select( 'core/editor' );
	const { isEditorPanelEnabled, isEditorPanelOpened } = select(
		editPostStore
	);
	const { getPostType } = select( 'core' );
	return {
		isEnabled: isEditorPanelEnabled( PANEL_NAME ),
		isOpened: isEditorPanelOpened( PANEL_NAME ),
		postType: getPostType( getEditedPostAttribute( 'type' ) ),
	};
} );

const applyWithDispatch = withDispatch( ( dispatch ) => {
	const { toggleEditorPanelOpened } = dispatch( editPostStore );

	return {
		onTogglePanel: partial( toggleEditorPanelOpened, PANEL_NAME ),
	};
} );

export default compose( applyWithSelect, applyWithDispatch )( PageAttributes );
