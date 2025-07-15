import './globals.css';

export const metadata = {
  title: 'Food App',
  description: 'Food delivery made simple',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main style={{ marginTop: '4rem' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
