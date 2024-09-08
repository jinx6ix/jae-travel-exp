import { Metadata } from 'next';
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph';

export const generateMetadata: () => Metadata = () => ({
  title: 'Reset Password',
  description: 'Enter a new password.',
  openGraph: mergeOpenGraph({
    title: 'Reset Password',
    url: '/reset-password',
  }),
});
