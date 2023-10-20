import {theme} from '../../../theme';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../util/Metrics';

import React from 'react';
import {StyleSheet, TextInput, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {loginSchema} from '../schema';
import * as yup from 'yup';
import {Button} from '../../../components/button';
import useLogin from '../hooks/useLogin';
import {TransparentOverlay} from '../../../components/overlay';

type FormData = yup.InferType<typeof loginSchema>;
export const LoginScreen = () => {
  const {login, loading} = useLogin();

  const handleLogin = (formData: FormData) => {
    const {email, password} = formData;
    login(email, password);
  };
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema),
  });

  return (
    <SafeAreaView
      edges={['top', 'left', 'right', 'bottom']}
      style={[styles.container]}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.keyboardConatiner}>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="email"
              placeholderTextColor="#000"
              style={styles.input}
              keyboardType="email-address"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />

        {errors.email && (
          <Text style={styles.errorText}>{errors.email.message}</Text>
        )}
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="password"
              placeholderTextColor="#000"
              secureTextEntry
              style={{...styles.input}}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />
        {errors.password && (
          <Text style={styles.errorText}>{errors.password.message}</Text>
        )}
        <Button
          title="Login"
          onPress={handleSubmit(handleLogin)}
          disabled={loading}
        />
      </KeyboardAwareScrollView>

      <TransparentOverlay visible={loading} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Colors.background,
    paddingHorizontal: horizontalScale(theme.Spaces.sm),
  },
  keyboardConatiner: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: theme.Colors.white,
    borderRadius: 8,
    paddingHorizontal: horizontalScale(theme.Spaces.sm),
    paddingVertical: verticalScale(theme.Spaces.sm),
    fontFamily: theme.fonts.medium,
    fontSize: moderateScale(theme.FontSizes.md),
    color: theme.Colors.text,
    marginBottom: verticalScale(theme.Spaces.xs),
  },

  errorText: {
    fontFamily: theme.fonts.regular,
    fontSize: moderateScale(theme.FontSizes.md),
    color: theme.Colors.error,
    padding: 4,
  },
});
