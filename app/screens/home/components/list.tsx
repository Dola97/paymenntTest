import {SectionList, StyleSheet, Text} from 'react-native';
import React from 'react';

import {Item, ItemSeparator} from './item';
import {TransactionRecord} from '../../../types/transaction';
import {theme} from '../../../theme';
import {preprocessData} from '../../../util';

export const TransactionList: React.FC<{data: TransactionRecord[]}> = ({
  data,
}) => {
  const sections = preprocessData(data);

  return (
    <SectionList
      sections={sections}
      windowSize={10}
      keyExtractor={item => item.objectId}
      renderItem={({item}) => <Item item={item} />}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.sectionHeader}>{title}</Text>
      )}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    backgroundColor: '#ECECEC',
    padding: 10,
    fontFamily: theme.fonts.bold,
  },
  item: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  separator: {
    height: 1,
    backgroundColor: '#ECECEC',
    marginLeft: 10,
  },
});
