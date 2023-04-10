import React from "react"
import styles from "./styles/Projects.module.css"
import workoutAppImg from "../assets/WorkoutApp.png"
import { Link as Linked } from "react-router-dom"

export default function Projects() {
	return (
		<section className={styles.section} id="work">
			<h2>Projects</h2>

			<div className={styles.projectsContainer}>
				<div className={styles.descriptionContainer}>
					<h3>Workout Tracker</h3>
					<p>
						Never forget how much weight you lifted, how many sets you
						accomplished and how many reps you worked for. To get started,
						easily register/login, and start adding each workout you did that
						day. You can view all your past workouts with timestamps and see how
						you stack up against yourself overtime.
					</p>

					<div className={styles.techContainer}>
						<span>JavaScript</span>
						<span>Node.js</span>
						<span>MongoDB</span>
						<span>React</span>
						<span>CSS3</span>
						<span>JWT</span>
					</div>
				</div>

				<div className={styles.projectImg}>
					<Linked
						to="https://workouttrackerapp-production.up.railway.app/"
						target="_blank"
					>
						<img src={workoutAppImg} alt="workout app" />
					</Linked>
					<Linked
						to="https://github.com/icantcode5/workoutTrackerApp"
						target="_blank"
						className={styles.codeLink}
					>
						View Code
					</Linked>
					<Linked
						to="https://workouttrackerapp-production.up.railway.app/"
						target="_blank"
						className={styles.codeLink}
					>
						View App
					</Linked>
				</div>
			</div>

			<div className={styles.projectsContainer}>
				<div className={styles.descriptionContainer}>
					<h3>TechReal</h3>
					<p>
						A Fullstack E-commerce application where users can buy products
						ranging from older to the latest and greatest tech. You can browse
						all products with the user friendly interface to view product
						details, add products to your cart and select the quantity. Finally,
						you can checkout with the integrated Strip API to complete your
						order.
					</p>

					<div className={styles.techContainer}>
						<span>JavaScript</span>
						<span>Node.js</span>
						<span>postgreSQL</span>
						<span>React</span>
						<span>CSS3</span>
						<span>JWT</span>
					</div>
				</div>

				<div className={styles.projectImg}>
					<Linked to="https://ecommerceapp-w6n9.onrender.com" target="_blank">
						<img src={workoutAppImg} alt="workout app" />
					</Linked>
					<Linked
						to="https://github.com/icantcode5/ecommerceApp"
						target="_blank"
						className={styles.codeLink}
					>
						View Code
					</Linked>
					<Linked
						to="https://ecommerceapp-w6n9.onrender.com"
						className={styles.codeLink}
					>
						View App
					</Linked>
				</div>
			</div>

			<div className={styles.projectsContainer}>
				<div className={styles.descriptionContainer}>
					<h3>React Trivia Game</h3>
					<p>
						Test your Tech knowledge with this fun and quick trivia game. Select
						your answers, and update them before submitting. See which ones you
						got right, which ones you answered incorrectly and if you didn't
						select an answer, view the correct answer regardless
					</p>

					<div className={styles.techContainer}>
						<span>JavaScript</span>
						<span>React</span>
						<span>CSS3</span>
					</div>
				</div>

				<div className={styles.projectImg}>
					<Linked to="https://5questiontrivia.netlify.app/" target="_blank">
						<img src={workoutAppImg} alt="workout app" />
					</Linked>
					<Linked
						to="https://github.com/icantcode5/Quizzical"
						target="_blank"
						className={styles.codeLink}
					>
						View Code
					</Linked>
					<Linked
						to="https://5questiontrivia.netlify.app/"
						target="_blank"
						className={styles.codeLink}
					>
						View App
					</Linked>
				</div>
			</div>
		</section>
	)
}
