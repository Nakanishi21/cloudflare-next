import {
    Box,
    Flex,
    Heading,
} from '@chakra-ui/react';
import NextLink from "next/link";
import { FC } from 'react';

const TopHeader: FC = () => {    
	return (
		<Flex color='black'>
			<Box flex='1' bgColor="gray.100" h="60px">
				<NextLink href="/" passHref>
					<Heading as='h1' fontSize="3xl" cursor="pointer">
						my header
					</Heading>
				</NextLink>
			</Box>
		</Flex>
	)
};

export default TopHeader;