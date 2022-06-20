import { ChakraProvider } from '@chakra-ui/react';
import { Header, Footer } from '../components/layout/';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</ChakraProvider>
	);
}

export default MyApp;
