import React from 'react';
import {FlatList} from 'react-native';

import {useLazyLoadQuery, useQuery} from 'relay-hooks';

import TweetsQuery from '../../modules/relay/TweetsQuery';
import {TweetsQuery as TweetsQueryType} from '../../modules/relay/__generated__/TweetsQuery.graphql';

import {Container, Button, PlusIcon} from './styles';
import TweetsList from '../../components/TweetsList';

const Home = () => {
  const {data, error, isLoading} = useQuery<TweetsQueryType>(TweetsQuery, {
    page: 0,
    pageSize: 999,
  });

  console.log('DATA: ', data);

  return (
    <Container>
      {/* <TweetsList data={data} /> */}
      <Button onPress={() => console.log('Ola')}>
        <PlusIcon />
      </Button>
    </Container>
  );
};

export default Home;
