import { useNavigate } from "react-router"
import { useEffect } from "react"

export default function Thanks({ data }) {
	const navigate = useNavigate()

	useEffect(() => {
		if (data.length === 0) {
			navigate("/")
		}
	}, [])

	return (
		<main className="thanks-page">
			<h1 className="thanks-page__title">Thanks for registering</h1>
			<p className="thanks-page__disclaimer">the data was not saved!</p>

			{(!!data.firstname) && <ol className="thanks-page__list">
				<li className="thanks-page__list-item">
					<p className="thanks-page__list-item-title">{data["0"].name}</p>
					<p className="thanks-page__list-item-text">{data["0"].value}</p>
				</li>
				<li className="thanks-page__list-item">
					<p className="thanks-page__list-item-title">{data["1"].name}</p>
					<p className="thanks-page__list-item-text">{data["1"].value}</p>
				</li>
				<li className="thanks-page__list-item">
					<p className="thanks-page__list-item-title">{data["2"].name}</p>
					<p className="thanks-page__list-item-text">{data["2"].value}</p>
				</li>
				<li className="thanks-page__list-item">
					<p className="thanks-page__list-item-title">{data["3"].name}</p>
					<p className="thanks-page__list-item-text">{data["3"].value}</p>
				</li>
				<li className="thanks-page__list-item">
					<p className="thanks-page__list-item-title">{data["4"].name}</p>
					<p className="thanks-page__list-item-text">{data["4"].value}</p>
				</li>
				<li className="thanks-page__list-item">
					<p className="thanks-page__list-item-title">{data["5"].name}</p>
					<p className="thanks-page__list-item-text">{data["5"].value}</p>
				</li>
				<li className="thanks-page__list-item">
					<p className="thanks-page__list-item-title">{data["6"].name}</p>
					<p className="thanks-page__list-item-text">{data["6"].value}</p>
				</li>
				<li className="thanks-page__list-item">
					<p className="thanks-page__list-item-title">{data["7"].name}</p>
					<p className="thanks-page__list-item-text">{data["7"].value}</p>
				</li>

				<li className="thanks-page__list-item">
					<p className="thanks-page__list-item-title">{data["8"].name}</p>
					<p className="thanks-page__list-item-text">{
						(data["8"].value === "on") && "Didn't accept" || "Accepted"}</p>
				</li>
			</ol>}

		</main>
	)
}