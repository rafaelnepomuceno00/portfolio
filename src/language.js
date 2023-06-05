import { useEffect, useState } from "react";

export default () => {
	const [language, setLanguage] = useState("ptbr");
	const toggleLanguage = () => {
		if (language !== "enus") {
			localStorage.setItem("language", "enus");
			setLanguage("enus");
		} else {
			localStorage.setItem("language", "ptbr");
			setLanguage("ptbr");
		}
	};

	useEffect(() => {
		const localLanguage = localStorage.getItem("language");
		if (localLanguage) {
			setLanguage(localLanguage);
		}
	}, {});

	return {
		language,
		toggleLanguage
	};
};
