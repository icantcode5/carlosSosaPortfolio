import React from "react"
import styles from "./styles/Header.module.css"
import { Link } from "react-scroll"

export default function Header() {
	return (
		<header>
			<div className={styles.headerContainer}>
				<h4>Carlos Sosa</h4>
				<nav>
					<ul className={styles.listContainer}>
						<li>
							<Link to="/" spy={true} smooth={true} offset={50} duration={500}>
								Work
							</Link>
						</li>
						<li>
							<Link to="/" spy={true} smooth={true} offset={50} duration={500}>
								Resume
							</Link>
						</li>
						<li>
							<Link to="/" spy={true} smooth={true} offset={50} duration={500}>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}
