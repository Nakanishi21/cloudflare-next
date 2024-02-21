'use client'

import { Card, CardHeader, CardBody, CardFooter, Text, SimpleGrid, Heading, Button } from '@chakra-ui/react'

export default function Home() {
  return (
	<SimpleGrid spacing={4} columns={3} maxH='200px'>
			<Card>
				<CardHeader>
					<Heading size='md'> Sample dashboard</Heading>
				</CardHeader>
				<CardBody>
					<Text>View a summary of all your customers over the last month.</Text>
				</CardBody>
				<CardFooter>
					<Button>View here</Button>
				</CardFooter>
			</Card>
			<Card>
				<CardHeader>
					<Heading size='md'> Sample dashboard</Heading>
				</CardHeader>
				<CardBody>
					<Text>View a summary of all your customers over the last month.</Text>
				</CardBody>
				<CardFooter>
					<Button>View here</Button>
				</CardFooter>
			</Card>
			<Card>
				<CardHeader>
					<Heading size='md'> Sample dashboard</Heading>
				</CardHeader>
				<CardBody>
					<Text>View a summary of all your customers over the last month.</Text>
				</CardBody>
				<CardFooter>
					<Button>View here</Button>
				</CardFooter>
			</Card>
	</SimpleGrid>
  )
}