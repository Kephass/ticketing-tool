import { Box, Container, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import { Breadcrumbs, TopHeader } from '../components/heading';
import { Sidebar } from '../components/layout';

const projects = () => {
	return (
		<Container minHeight='80vh' minW='100%' maxW='100%' px='10'>
			<Head>
				<title>Projects | TR Board</title>
				<meta name='Projects' content='Team Rockets projects board' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Flex>
				<Sidebar />
				<Box width='fill-available' px={2}>
					<Breadcrumbs />
					<TopHeader />
				</Box>
			</Flex>
		</Container>
	);
};

export default projects;
