export const REGISTER_MUTATION = `
Register($username:String!, $password: String!) {
    register(options: {username: $username, password: $password}) {
      errors {
        field
        message
      }
      user {
        username
        id
        createdAt
      }
    }
  }
`;
