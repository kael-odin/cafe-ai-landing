export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#05070b',
      color: 'white',
      fontFamily: 'system-ui, sans-serif',
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
      <p style={{ fontSize: '1.25rem', opacity: 0.6 }}>Page not found</p>
      <a 
        href="/"
        style={{
          marginTop: '2rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: 'white',
          color: '#0a0d12',
          borderRadius: '0.75rem',
          textDecoration: 'none',
          fontWeight: 600,
        }}
      >
        Go Home
      </a>
    </div>
  );
}
