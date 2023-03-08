import React from "react"
import styles from "./styles/Header.module.css"
import { Link } from "react-scroll"
import { Link as Linked } from "react-router-dom"

export default function Header() {
	return (
		<header>
			<div className={styles.headerContainer}>
				<h4>Carlos Sosa</h4>
				<nav>
					<ul className={styles.listContainer}>
						<li>
							<Link
								to="about"
								spy={true}
								smooth={true}
								offset={-100}
								duration={500}>
								About
							</Link>
						</li>
						<li>
							<Link
								to="work"
								spy={true}
								smooth={true}
								offset={-30}
								duration={500}>
								Work
							</Link>
						</li>
						<li>
							<Linked
								to="https://docs.google.com/document/d/1KjlMUWPDP5moamoDSvltPjz_wSJVQyR7/edit?usp=sharing&ouid=113127337887002359493&rtpof=true&sd=true"
								target="_blank">
								Resume
							</Linked>
						</li>
						<li>
							<Link
								to="contact"
								spy={true}
								smooth={true}
								offset={50}
								duration={500}>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}
