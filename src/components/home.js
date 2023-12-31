import React from 'react';

function Home() { 
  const userLoggedIn = localStorage.getItem('user');

  return (
    <section className="section">
      <div className="box">
        {userLoggedIn ? <h2 className="subtitle">In progress</h2> : null}
      </div>
    </section>
  );
}

export default Home;