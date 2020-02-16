import { gql } from 'apollo-boost'

export const GET_HOME = gql`
	{
		pages(where: { id: "ck1dg16v6eucz0b49d60a6cja" }) {
			title
			content
		}
	}
`
