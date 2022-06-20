//chakra imports
import { Box, Container } from '@chakra-ui/react';
//next imports
import Head from 'next/head';
//core imports
import { Breadcrumbs } from '../components/heading';

export default function Home() {
	return (
		<Container minHeight='70%' maxW='100%' px='10'>
			<Head>
				<title>Tickrr | Powering Teams</title>
				<meta
					name='description'
					content='A project management tool for teams.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Box>
				<Breadcrumbs />
			</Box>
		</Container>
	);
}
