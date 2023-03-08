import About from "./components/About"
import ContactForm from "./components/ContactForm"
import Container from "./components/Container"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Projects from "./components/Projects"

function App() {
	return (
		<>
			<Container>
				<Header />
				<About />
				<Projects />
				<ContactForm />
			</Container>
			<Footer />
		</>
	)
}

export default App
