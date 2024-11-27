function Home() {
  return (
    <div className="hospital-bg" style={styles.hospitalBg}>
      <div className="container" style={styles.container}>
        <div className="card-container" style={styles.cardContainer}>
          <div>
            <h1 className="display-4">Welcome to Our Hospital</h1>
            <p className="lead">Your trusted healthcare partner.</p>
          </div>
          <div className="text-center">
            <a href="/patient/" className="btn btn-primary btn-lg btn-link" style={styles.btnLink}>
              Enter Patients
            </a>
            <a href="/viewpatients/" className="btn btn-success btn-lg btn-link" style={styles.btnLink}>
              View Patients
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  hospitalBg: {
    backgroundImage: "url('https://images.unsplash.com/photo-1574684752239-7606e8247679?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0OXwwfDF8c2VhY3JhfDJ8fGhpY2h8ZW58MHx8fHwxNjg1NzA5MzA&ixlib=rb-1.2.1&q=80&w=1080')", // Working healthcare background image from Unsplash
    backgroundSize: 'cover', // Ensure it covers the whole screen
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    width: '100%', // Ensure the background image spans the full width of the viewport
  },
  container: {
    paddingTop: '20px',
  },
  cardContainer: {
    background: 'rgba(255, 255, 255, 0.7)', // Slightly opaque for better contrast
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    margin: '20% auto',
    maxWidth: '400px',
  },
  btnLink: {
    margin: '10px',
    color: 'white',
  },
};

export default Home;
