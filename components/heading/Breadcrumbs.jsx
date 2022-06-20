import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	useColorMode,
} from '@chakra-ui/react';

export const Breadcrumbs = () => {
	return (
		<Breadcrumb
			fontWeight='medium'
			fontSize='sm'
			color={useColorMode[('gray.300', 'white')]}
		>
			<BreadcrumbItem>
				<BreadcrumbLink href='#'>Projects</BreadcrumbLink>
			</BreadcrumbItem>

			<BreadcrumbItem>
				<BreadcrumbLink href='#'>Team Rocket</BreadcrumbLink>
			</BreadcrumbItem>

			<BreadcrumbItem isCurrentPage>
				<BreadcrumbLink href='#'>TR board</BreadcrumbLink>
			</BreadcrumbItem>
		</Breadcrumb>
	);
};
