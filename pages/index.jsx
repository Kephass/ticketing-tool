import { Box, Container, Text } from '@chakra-ui/react';
import Head from 'next/head';

export default function Home() {
	return (
		<Container minH='70%'>
			<Head>
				<title>Tickrr | Powering Teams</title>
				<meta
					name='description'
					content='A project management tool for teams.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Box>
				<Text as='h1'>
					Welcome to <a href='https://nextjs.org'>Next.js!</a>
				</Text>

				<Text>
					Get started by editing <code>pages/index.js</code>
				</Text>
			</Box>
		</Container>
	);
}
