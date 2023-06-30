import React from 'react';
import styled from 'styled-components';
import { MongoDBLogo } from './img/MongoDBLogo';

const Container = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 24px;
`;

const Cover = () => {
	return (
		<Container>
			<h1>Queries and Performance</h1>
			<MongoDBLogo height={140} />
			<h2>Ivan Levenhagen</h2>
		</Container>
	);
};

export default Cover;
