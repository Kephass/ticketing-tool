import { Box, Flex, HStack, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

export const Header = () => {
	return (
		<>
			<Box>
				<HStack justifyContent='space-between' px='60' py='3'>
					<Flex
						gap='5'
						fontWeight='600'
						color={useColorModeValue('teal.500', 'white')}
					>
						<Link href='/'>
							<a>Tickrr</a>
						</Link>
					</Flex>
					<ColorModeSwitcher justifySelf='flex-end' />
				</HStack>
			</Box>
		</>
	);
};
