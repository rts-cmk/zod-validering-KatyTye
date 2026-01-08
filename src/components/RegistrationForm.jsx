import validateScheme from "../helpers/validateForm"
import { useState } from "react"
import zod from "zod"

export default function RegistrationForm() {
	const [errors, setErrors] = useState({})

	const HandleSubmit = event => {
		event.preventDefault()

		const form = event.target
		const formData = new FormData(form)
		const formObject = Object.fromEntries(formData.entries())


		const result = validateScheme.safeParse(formObject)

		if (result.success) {
			setErrors({})
		} else {
			const errorObject = zod.treeifyError(result.error)
			setErrors(errorObject.properties)
		}
	}

	return (
		<form className="reg-form" onSubmit={HandleSubmit}>
			<h2 className="reg-form__title">
				Register Account
			</h2>

			<label htmlFor="username" className="reg-form__field">
				<span className="reg-form__field-text">Username:</span>
				<input type="text" name="username" id="username"
					className="reg-form__field-input" autoComplete={"false"} />
				<ul className="reg-form__field-errors">
					{errors.username?.errors.map(
						(err, index) => <li key={index}><span>
							{err}
						</span></li>
					)}
				</ul>
			</label>

			<label htmlFor="firstname" className="reg-form__field">
				<span className="reg-form__field-text">First name:</span>
				<input type="text" name="firstname" id="firstname"
					className="reg-form__field-input" autoComplete={"given-name"} />
				<ul className="reg-form__field-errors">
					{errors.firstname?.errors.map(
						(err, index) => <li key={index}><span>
							{err}
						</span></li>
					)}
				</ul>
			</label>

			<label htmlFor="lastname" className="reg-form__field">
				<span className="reg-form__field-text">Last name:</span>
				<input type="text" name="lastname" id="lastname"
					className="reg-form__field-input" autoComplete={"family-name"} />
				<ul className="reg-form__field-errors">
					{errors.lastname?.errors.map(
						(err, index) => <li key={index}><span>
							{err}
						</span></li>
					)}
				</ul>
			</label>

			<label htmlFor="email" className="reg-form__field">
				<span className="reg-form__field-text">E-Mail:</span>
				<input type="email" name="email" id="email"
					className="reg-form__field-input" autoComplete={"email"} />
				<ul className="reg-form__field-errors">
					{errors.email?.errors.map(
						(err, index) => <li key={index}><span>
							{err}
						</span></li>
					)}
				</ul>
			</label>

			<label htmlFor="password" className="reg-form__field">
				<span className="reg-form__field-text">Password:</span>
				<input type="password" name="password" id="password"
					className="reg-form__field-input" autoComplete={"new-password"} />
				<ul className="reg-form__field-errors">
					{errors.password?.errors.map(
						(err, index) => <li key={index}><span>
							{err}
						</span></li>
					)}
				</ul>
			</label>

			<label htmlFor="repeatedPassword" className="reg-form__field">
				<span className="reg-form__field-text">Repeated Password:</span>
				<input type="password" name="repeatedPassword" id="repeatedPassword"
					className="reg-form__field-input" autoComplete={"new-password"} />
				<ul className="reg-form__field-errors">
					{errors.repeatedPassword?.errors.map(
						(err, index) => <li key={index}><span>
							{err}
						</span></li>
					)}
				</ul>
			</label>

			<label htmlFor="birthday" className="reg-form__field">
				<span className="reg-form__field-text">Birthday:</span>
				<input type="date" name="birthday" id="birthday"
					className="reg-form__field-input" autoComplete={"bday-year"} />
				<ul className="reg-form__field-errors">
					{errors.birthday?.errors.map(
						(err, index) => <li key={index}><span>
							{err}
						</span></li>
					)}
				</ul>
			</label>

			<label htmlFor="phone" className="reg-form__field">
				<span className="reg-form__field-text">Phone Number:</span>
				<input type="tel" name="phone" id="phone"
					className="reg-form__field-input" autoComplete={"tel"} />
				<ul className="reg-form__field-errors">
					{errors.phone?.errors.map(
						(err, index) => <li key={index}><span>
							{err}
						</span></li>
					)}
				</ul>
			</label>

			<label htmlFor="newsletter" className="reg-form__field">
				<input type="checkbox" name="newsletter" id="newsletter"
					className="reg-form__field-input" autoComplete={"false"} />
				<span className="reg-form__field-text">I accept to recive newsletters every month.</span>
			</label>

			<button type="submit" className="reg-form__submit">Create Account</button>
		</form>
	)
}