import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

function Feature() {
	return (
		<FeatureContainer>
			<h1>Vuoi ordinare la tua pizza da asporto?</h1>
			<p>Scarica la nostra app e ordina la tua pizza preferita, i nostri fritti e i dolci.</p>
			<FeatureButton>Ordina ora</FeatureButton>
		</FeatureContainer>
	);
}

export default Feature;
