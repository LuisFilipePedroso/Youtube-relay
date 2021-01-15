import {graphql} from 'relay-hooks';

export default graphql`
  query TweetsQuery($page: Float!, $pageSize: Float!) {
    tweets(page: $page, pageSize: $pageSize) {
      tweets {
        ...TweetsFragment
      }
    }
  }
`;
