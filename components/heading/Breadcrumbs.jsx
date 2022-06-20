import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import React from 'react';

export const Breadcrumbs = () => {
	return (
		<Breadcrumb fontWeight='medium' fontSize='sm'>
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
