import { gql } from 'apollo-boost'

export const GET_INDIVIDUAL_POST = gql`
	query getIndividualPost($id: ID) {
		post(where: { id: $id }) {
			id
			title
			description
		}
	}
`
