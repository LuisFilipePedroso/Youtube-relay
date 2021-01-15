import {graphql} from 'relay-hooks';

export default graphql`
  fragment TweetsFragment on Tweet {
    _id
    author
    description
    likes
    createdAt
  }
`;
