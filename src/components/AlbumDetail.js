import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

type Props = {
    album: any,
}
const AlbumDetail = (props: Props) => (
  <Card>
    <CardSection>
      <Text>{props.album.title}</Text>
    </CardSection>
  </Card>
);

export default AlbumDetail;

