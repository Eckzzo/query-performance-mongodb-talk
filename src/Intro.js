import React from 'react';
import styled from 'styled-components';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import { WooviLogo } from './img/WooviLogo';

const Img = styled.img`
	width: 160px;
	border: 6px solid #fff;
	border-radius: 50%;
`;

const Socials = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 24px;
`;

const Social = styled.a`
	text-decoration: none;
	color: #fff;
	display: flex;
	align-items: center;
	gap: 8px;

	&:hover {
		text-decoration: underline;
	}
`;

const Stack = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 12px;
`;

const Title = styled.h1`
	margin: 0;
	font-size: 48px;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 36px;
`;

const Intro = () => {
	return (
		<Container>
			<WooviLogo width="240px" fillColor="#fff" />
			<Img src="./img/avatar.gif" />
			<Stack>
				<Title>Ivan Levenhagen</Title>
				<Socials>
					<Social href="https://twitter.com/eckzzo" target="_blank">
						<FaTwitter size="22px" />
						<a>eckzzo</a>
					</Social>
					<Social href="https://github.com/Eckzzo" target="_blank">
						<FaGithub size="22px" />
						<a>eckzzo</a>
					</Social>
				</Socials>
			</Stack>
		</Container>
	);
};

export default Intro;
