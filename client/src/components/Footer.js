import React from "react"
import styles from "./styles/Footer.module.css"
import { FaTwitterSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa"
import { Link as Linked } from "react-router-dom"

function Footer() {
	const style = {
		width: "40px",
		height: "40px",
	}

	return (
		<footer className={styles.footer}>
			<div className={styles.flexContainer}>
				<Linked to="https://twitter.com/Xiluxz" target="_blank" title="twitter">
					<FaTwitterSquare style={style} />
				</Linked>
				<Linked
					to="https://www.linkedin.com/in/carlos-sosa-39862b194/"
					target="_blank"
					title="linkedin">
					<FaLinkedin style={style} />
				</Linked>
				<Linked
					to="https://github.com/icantcode5"
					target="_blank"
					title="github">
					<FaGithubSquare style={style} />
				</Linked>
			</div>
		</footer>
	)
}

export default Footer
