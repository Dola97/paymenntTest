import {useNavigation} from '@react-navigation/native';
import {TransactionRecord, TransactionStatus} from '../../../types/transaction';
import {getTimeFromTimestamp} from '../../../util';
import React, {memo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppParamsList} from '../../../navigations/paramslist';

import {horizontalScale, verticalScale} from '../../../util/Metrics';
import {theme} from '../../../theme';

import CancelledIcon from '../../../assets/svgs/cancel_black_24dp.svg';
import ApprovedIcon from '../../../assets/svgs/done_all_black_24dp.svg';
import InReviewIcon from '../../../assets/svgs/remove_red_eye_black_24dp.svg';
import PendingIcon from '../../../assets/svgs/pending_black_24dp.svg';

const getStatusIcon = (status: TransactionStatus) => {
  let IconComponent, fill;

  switch (status) {
    case 'APPROVED':
      IconComponent = ApprovedIcon;
      fill = theme.Colors.primary;
      break;
    case 'CANCELLED':
    case 'DECLINED':
      IconComponent = CancelledIcon;
      fill = theme.Colors.error;
      break;
    case 'IN_REVIEW':
      IconComponent = InReviewIcon;
      fill = theme.Colors.text;
      break;
    default:
      IconComponent = PendingIcon;
      fill = theme.Colors.secondary;
  }

  return (
    <IconComponent
      fill={fill}
      width={horizontalScale(15)}
      height={verticalScale(15)}
    />
  );
};
export const Item: React.FC<{item: TransactionRecord}> = memo(({item}) => {
  const time = getTimeFromTimestamp(item.timestamp);
  const navigation =
    useNavigation<
      StackNavigationProp<AppParamsList, 'Error' | 'DetailsOne' | 'DetailsTwo'>
    >();

  const handlePress = (transaction: TransactionRecord) => {
    if (item.status === 'DECLINED' || item.status === 'CANCELLED') {
      navigation.navigate('Error', {item: transaction});
    } else if (
      item.details.origin === 'IN_PERSON' ||
      item.details.origin === 'ATM_MACHINE'
    ) {
      navigation.navigate('DetailsOne', {item: transaction});
    } else {
      navigation.navigate('DetailsTwo', {item: transaction});
    }
  };

  return (
    <TouchableOpacity onPress={() => handlePress(item)}>
      <View style={styles.item}>
        <View style={styles.iconInfoWrapper}>
          {getStatusIcon(item.status)}
          <View style={{gap: 5}}>
            <Text style={styles.typeTxt}>{item.objectType}</Text>
            <Text style={styles.statusTxt}>{item.status}</Text>
            <Text style={styles.statusTxt}>{item.details.origin}</Text>
          </View>
        </View>
        <Text style={styles.typeTxt}>{time}</Text>
      </View>
    </TouchableOpacity>
  );
});
export const ItemSeparator: React.FC = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconInfoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(10),
  },
  separator: {
    height: 1,
    backgroundColor: '#ECECEC',
    marginLeft: 10,
  },
  typeTxt: {
    fontFamily: theme.fonts.bold,
    color: theme.Colors.text,
    fontSize: theme.FontSizes.lg,
  },
  statusTxt: {
    fontFamily: theme.fonts.regular,
    color: theme.Colors.text,
    fontSize: theme.FontSizes.md,
  },
});
