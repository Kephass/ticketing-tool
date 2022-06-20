//chakra imports
import {
	Box,
	Container,
	Divider,
	Stat,
	StatHelpText,
	StatLabel,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
//next imports
import Head from 'next/head';
import NextLink from 'next/link';

export default function Home() {
	const color = useColorModeValue('#000', '#fff');
	return (
		<Container minHeight='70vh' maxW='100%' px='10'>
			<Head>
				<title>Tickrr | Powering Teams</title>
				<meta
					name='description'
					content='A project management tool for teams.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Box>
				<Text color={color} fontSize='2xl' fontWeight='bold'>
					Your work
				</Text>
			</Box>
			<NextLink href='/projects'>
				<Box
					w='300px'
					p={5}
					my={3}
					borderWidth='1px'
					rounded='lg'
					fontSize='sm'
				>
					<Stat>
						<StatLabel fontSize='md' fontWeight='bold'>
							Team Rocket
						</StatLabel>
						<StatHelpText>Company-managed software</StatHelpText>
						<StatHelpText>My open issues</StatHelpText>
						<StatHelpText>Done issues</StatHelpText>
						<Divider my={5}></Divider>
						<StatHelpText>1 board</StatHelpText>
					</Stat>
				</Box>
			</NextLink>
		</Container>
	);
}
