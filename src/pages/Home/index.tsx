import React, { Suspense } from 'react';
import { Text, FlatList } from 'react-native';
import { ErrorBoundary } from 'react-error-boundary';

import { useLazyLoadQuery, usePaginationFragment } from 'react-relay/hooks';

import { graphql } from 'react-relay';

import { useNavigation } from '@react-navigation/native';
import { Home_query$key } from './__generated__/Home_query.graphql';
import { HomePaginationQuery } from './__generated__/HomePaginationQuery.graphql';
import { HomeQuery } from './__generated__/HomeQuery.graphql';

import { Container, ListItem, CarBrandText } from './styles';

type Props = {
  query: Home_query$key;
};

function Home({ query }: Props) {
  const { data, loadNext } = usePaginationFragment<HomePaginationQuery, Home_query$key>(
    graphql`
      fragment Home_query on Query
      @argumentDefinitions(first: { type: Int, defaultValue: 5 }, after: { type: String })
      @refetchable(queryName: "HomePaginationQuery") {
        posts(first: $first, after: $after) @connection(key: "Home_posts") {
          edges {
            node {
              id
              title
              body
            }
          }
          pageInfo {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
        }
      }
    `,
    query
  )

  const navigation = useNavigation();

  const { posts } = data;

  return (
    <Container>
      <FlatList
        data={posts.edges}
        renderItem={({ item }) => (
          <ListItem key={item?.node?.id} onPress={() => navigation.navigate('PostDetails', { post: item })}>
            <CarBrandText>{item?.node?.title}</CarBrandText>
          </ListItem>
        )}
        keyExtractor={item => item.node.id}
        onEndReached={() => loadNext(5)}
        onEndReachedThreshold={0.1}
      />
    </Container>
  )
};

const HomeWrapper = () => {
  const query = useLazyLoadQuery<HomeQuery>(
    graphql`
      query HomeQuery {
        ...Home_query
      }
    `,
    {}
  );

  return (
    <ErrorBoundary fallbackRender={({ error }) => <Text>{error.message}</Text>}>
      <Suspense fallback={<Text>Loading</Text>}>
        <Home query={query} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default HomeWrapper;
