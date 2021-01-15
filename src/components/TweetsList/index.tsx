import React from 'react';
import {FlatList} from 'react-native';

// eslint-disable-next-line import/no-duplicates
import {formatDistance} from 'date-fns';
// eslint-disable-next-line import/no-duplicates
import {ptBR} from 'date-fns/locale';

import {useMutation} from 'relay-hooks';
import {TweetsQueryResponse} from '../../modules/relay/__generated__/TweetsQuery.graphql';

import {
  Content,
  Header,
  LikesButton,
  LikesIcon,
  SubText,
  Text,
  TweetContainer,
} from './styles';

type Props = {
  data: TweetsQueryResponse | null | undefined;
};

const TweetsList = ({data}: Props) => {
  // const [] = useMutation();

  return (
    <FlatList
      data={data?.tweets?.tweets}
      renderItem={({item}) => {
        const formattedDate = `à ${formatDistance(
          new Date(item.createdAt as Date),
          new Date(),
          {locale: ptBR},
        )}`;

        return (
          <TweetContainer>
            <Header>
              <Text bold>{item.author}</Text>
              <SubText>{formattedDate}</SubText>
            </Header>
            {item.description?.length > 0 && (
              <Content>
                <Text>{item.description}</Text>
              </Content>
            )}
            <LikesButton onPress={() => {}}>
              <LikesIcon />
              <SubText>{item.likes}</SubText>
            </LikesButton>
          </TweetContainer>
        );
      }}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default TweetsList;
