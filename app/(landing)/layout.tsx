import LandingContainer from "@/components/landing/layouts/landing-container";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LandingContainer>
      {children}
    </LandingContainer>
  )
}