import { gql } from 'apollo-boost'

export const GET_CONTACT = gql`
	{
		pages(where: { id: "ck1emnuq7jd590b856v8g56kq" }) {
			id
			title
			content
		}
	}
`
