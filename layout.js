import Header from '../components/header';
import Footer from '../components/footer';
import Head from 'next/head';

const Layout = (props) => (
	<div>
		<Head>
			<title>Portal Berita - paling update</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="stylesheet" href="/css/style.css"/>
		</Head>
		<Header />
		{props.children}
		<Footer />
	</div>
)

export default Layout;