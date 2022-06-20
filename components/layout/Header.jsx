import { Box, Button, Flex, HStack, useColorModeValue } from '@chakra-ui/react';
import { SiJirasoftware } from 'react-icons/si';
import Link from 'next/link';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

export const Header = () => {
	return (
		<>
			<Box>
				<HStack justifyContent='space-between' px='10' py='3'>
					<Flex
						gap={10}
						fontWeight='600'
						color={useColorModeValue('teal.500', 'white')}
					>
						<Link href='/'>
							<Flex gap={2}>
								<SiJirasoftware fontSize='20' />
								<a>Tickrr</a>
							</Flex>
						</Link>
						<Link href='/'>
							<a>Your work</a>
						</Link>
						<Link href='/'>
							<a>Projects</a>
						</Link>
					</Flex>
					<Box justifySelf='flex-end'>
						<Button colorScheme='teal' variant='outline'>
							Sign In
						</Button>
						<ColorModeSwitcher />
					</Box>
				</HStack>
			</Box>
		</>
	);
};
