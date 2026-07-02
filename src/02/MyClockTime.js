function MyClockTime() {
  return (
    <div>
      <h1>My Clock Time</h1>
      <p>Current Time: {new Date().toLocaleTimeString()}</p>
    </div>
  );
}

export default MyClockTime;
