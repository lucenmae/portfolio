export default function CustomHead() {
  return (
    <>
      <link rel="canonical" href="https://lucymaetan.com" />
      <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
    </>
  );
} 