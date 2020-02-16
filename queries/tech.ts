import { gql } from 'apollo-boost'

export const GET_TECHSTACK = gql`
	{
		pages(where: { id: "ck1f131bgbeno0b71b5dlzplf" }) {
			title
			content
		}
	}
`
