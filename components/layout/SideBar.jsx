import {
	FiHome,
	FiTrendingUp,
	FiCompass,
	FiStar,
	FiSettings,
	FiCpu,
} from 'react-icons/fi';
import {
	Box,
	Flex,
	Icon,
	useColorModeValue,
	Link,
	Text,
} from '@chakra-ui/react';

const LinkItems = [
	{ name: 'Home', icon: FiHome },
	{ name: 'Trending', icon: FiTrendingUp },
	{ name: 'Explore', icon: FiCompass },
	{ name: 'Favourites', icon: FiStar },
	{ name: 'Settings', icon: FiSettings },
];

export const Sidebar = ({ children }) => {
	return (
		<Box minH='100%'>
			<SidebarContent />

			<Box ml={{ base: 0, md: 60 }} p='4'>
				{children}
			</Box>
		</Box>
	);
};

const SidebarContent = (...rest) => {
	return (
		<Box
			borderRight='1px'
			borderRightColor={useColorModeValue('gray.200', 'gray.700')}
			w={{ base: 'full', md: 60 }}
			pos='fixed'
			h='full'
			{...rest}
		>
			<Flex h='20' alignItems='center' gap={4}>
				<FiCpu color='teal' />
				<Text fontSize='xl' fontFamily='monospace' fontWeight='bold'>
					Team Rocket
				</Text>
			</Flex>
			{LinkItems.map((link) => (
				<NavItem key={link.name} icon={link.icon}>
					{link.name}
				</NavItem>
			))}
		</Box>
	);
};

const NavItem = ({ icon, children, ...rest }) => {
	return (
		<Link
			href='#'
			style={{ textDecoration: 'none' }}
			_focus={{ boxShadow: 'none' }}
		>
			<Flex
				align='center'
				pr='4'
				py='4'
				mr='4'
				borderRadius='lg'
				role='group'
				cursor='pointer'
				_hover={{
					bg: 'teal.400',
					color: 'white',
				}}
				fontSize='14px'
				{...rest}
			>
				{icon && (
					<Icon
						mr='4'
						fontSize='16'
						_groupHover={{
							color: 'white',
						}}
						as={icon}
					/>
				)}
				{children}
			</Flex>
		</Link>
	);
};
