import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	*, 
	*::before, 
	*::after {
	box-sizing:border-box;
	margin: 0;
	padding: 0;
	}

	body {
		font-family: Inter, sans-serif;
		padding: 50px;
		min-height: 100vh;
	}
`