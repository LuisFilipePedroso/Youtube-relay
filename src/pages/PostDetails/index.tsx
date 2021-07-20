import React from 'react';
import { useFragment, useLazyLoadQuery } from 'react-relay/hooks';
import { graphql } from 'react-relay';

import { RouteProp } from '@react-navigation/native';

import { Container, Title } from './styles';

type RouteProps = {
  PostDetails: {
    post: any;
  }
}

type Props = {
  route: RouteProp<RouteProps, 'PostDetails'>;
}

function PostDetails({ route }: Props) {
  const post = route.params?.post;

  // const data = useLazyLoadQuery(graphql``, { post });

  // console.log('DATA: ', data, post);

  return (
    <Container>
      <Title>Post</Title>
    </Container>
  )
}

export default PostDetails;