import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ayon - Personal Fitness Coach',
};

export default function FitnessCoachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

