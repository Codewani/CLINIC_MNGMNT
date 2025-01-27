import React, { useState } from 'react';
import service from '../services/clinic'

const AiRetrieval = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {

      const aiResponse = await service.create({ message: query }, "Ai/")

      setResults(aiResponse);
      setLoading(false);
    } catch (err) {
      console.error('OpenAI Error:', err);
      setError("An error occurred while processing your request. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-vh-100 py-5" style={{
      background: 'linear-gradient(to right, #f0f8ff, #e6f2ff)'
    }}>
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="text-primary fw-bold mb-2">AI Medical Data Retrieval</h1>
          <p className="text-muted">Enter your query to retrieve relevant medical information</p>
        </div>

        {/* Main Card */}
        <div className="card shadow-sm mb-4">
          <div className="card-header bg-white">
            <h5 className="card-title mb-0">Medical Query Interface</h5>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Enter your medical query here..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <button
                type="submit"
                disabled={loading || !query.trim()}
                className={`btn ${loading || !query.trim() ? 'btn-secondary' : 'btn-primary'} w-100`}
              >
                {loading ? (
                  <span>
                    <i className="bi bi-arrow-repeat me-2 spinner-border spinner-border-sm"></i>
                    Processing...
                  </span>
                ) : (
                  <span>
                    <i className="bi bi-search me-2"></i>
                    Analyze Query
                  </span>
                )}
              </button>
            </form>

            {/* Results Section */}
            {results && (
              <div className="mt-4 p-3 bg-light rounded">
                <h3 className="h5 mb-3">Patient Details</h3>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        {results.length > 0 && 
                          Object.keys(results[0]).map((key) => (
                            <th key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
                          ))
                        }
                      </tr>
                    </thead>
                    <tbody>
                      {results.map((patient, index) => (
                        <tr key={index}>
                          {Object.values(patient).map((value, valueIndex) => (
                            <td key={valueIndex}>{value}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
              </div>
            )}

            {/* Error Alert */}
            {error && (
              <div className="alert alert-danger mt-3" role="alert">
                {error}
              </div>
            )}
          </div>
        </div>

        {/* Information Cards */}
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <i className="bi bi-shield-check text-primary display-5 mb-3"></i>
                <h3 className="h5 mb-2">Secure Analysis</h3>
                <p className="text-muted small">Your medical data is processed with the highest security standards</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <i className="bi bi-lightning text-primary display-5 mb-3"></i>
                <h3 className="h5 mb-2">Fast Results</h3>
                <p className="text-muted small">Get instant analysis and recommendations</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <i className="bi bi-graph-up text-primary display-5 mb-3"></i>
                <h3 className="h5 mb-2">Accurate Insights</h3>
                <p className="text-muted small">Powered by advanced AI algorithms for precise analysis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiRetrieval;