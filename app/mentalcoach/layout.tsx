import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ayon - Personal Mental Coach',
};

export default function MentalCoachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

