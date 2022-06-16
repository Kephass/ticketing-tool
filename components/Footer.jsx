import { Box, Divider, Text } from '@chakra-ui/react';

export const Footer = () => {
	return (
		<Box textAlign='center' alignSelf='flex-end' marginTop='100px'>
			<Divider></Divider>
			<Text padding='3'>
				<Text as={'span'} fontWeight='bold' color={'teal.300'}>
					Tickrr.
				</Text>{' '}
				All Rights Reserved. Created by{' '}
				<Text as={'span'} fontWeight='bold' color={'teal.400'}>
					<a
						href='https://github.com/Kephass/'
						rel='noreferrer'
						target='_blank'
					>
						Felix Oduro
					</a>
				</Text>
			</Text>
		</Box>
	);
};
