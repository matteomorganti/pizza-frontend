import React, { useState } from 'react';
import {
	HeroContainer,
	HeroContent,
	HeroItems,
	HeroH1,
	HeroP,
	HeroBtn,
} from './HeroElements';
import { Link } from "react-router-dom";

function Hero() {
	return (
		<HeroContainer>
			<HeroContent>
				<HeroItems>
					<HeroH1>Rouge et Noir</HeroH1>
					<HeroP>Sforniamo felicità</HeroP>
					<HeroBtn><Link to="/reservation" style={{color:"white"}}>Prenota un tavolo</Link></HeroBtn>
				</HeroItems>
			</HeroContent>
		</HeroContainer>
	);
}

export default Hero;
