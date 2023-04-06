import React from "react"
import styles from "./styles/About.module.css"
import image from "../assets/me1.jpg"

export default function About() {
	// 	function handleClick() {
	// 		console.log("clicked see my work")
	// 	}

	return (
		<section className={styles.section} id="about">
			<div className={styles.imgContainer}>
				<img src={image} alt="my face" />
			</div>

			<div className={styles.aboutContainer}>
				<h1>
					Hello! My name <br />
					is Carlos Sosa. I am
					<br /> a Fullstack Web Developer.
				</h1>
				<p>
					As a software developer, I am passionate about creating innovative
					solutions that help to solve complex problems. With my technical
					background, I have honed my skills utilizing JavaScript, Node.js,
					MongoDB, React and more to create web applications. In addition to my
					technical skills, I am also a strategic thinker and problem solver. I
					enjoy exploring new technologies and tools to find the most effective
					and efficient ways to build software that meets end users needs.
				</p>
				<p>
					When I am not coding, I enjoy spending time weight-lifting, hiking,
					and going to concerts. I believe that having a well-rounded life
					outside of work is essential for maintaining creativity and motivation
					on the job. Overall, I am excited about the opportunities that
					software development offers and am committed to staying at the
					forefront of the field through ongoing learning and professional
					development. Let's connect!
				</p>
				{/* <button onClick={handleClick}>See my work</button> */}
			</div>
		</section>
	)
}
