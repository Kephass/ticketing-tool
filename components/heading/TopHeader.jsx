import {
	Box,
	Button,
	HStack,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Select,
	Text,
} from '@chakra-ui/react';

import {
	AiOutlineThunderbolt,
	AiOutlineStar,
	AiOutlineShareAlt,
	AiOutlineEllipsis,
} from 'react-icons/ai';

export const TopHeader = () => {
	return (
		<HStack justifyContent='space-between'>
			<Box>
				<Text fontSize='2xl' fontWeight='bold'>
					Kanban board
				</Text>
			</Box>
			<Box fontSize='20'>
				<HStack gap={4}>
					<AiOutlineThunderbolt />
					<Select
						placeholder='Release'
						disabled
						width={110}
						borderWidth={0}
						backgroundColor='gray.100'
						fontSize={15}
					></Select>
					<AiOutlineStar />
					<AiOutlineShareAlt />

					<Menu borderWidth={0}>
						<MenuButton
							as={Button}
							variant={'link'}
							cursor={'pointer'}
							minW={0}
						>
							<AiOutlineEllipsis />
						</MenuButton>
						<MenuList>
							<MenuItem>Link 1</MenuItem>
							<MenuItem>Link 2</MenuItem>
							<MenuItem>Link 3</MenuItem>
						</MenuList>
					</Menu>
				</HStack>
			</Box>
		</HStack>
	);
};
