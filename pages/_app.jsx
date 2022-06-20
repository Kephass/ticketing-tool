import { ChakraProvider } from '@chakra-ui/react';
import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';

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
