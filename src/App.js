const App = () => {
  return (
    <div className="bg">
      <h1> Vision map </h1>
      <div className="vl-container">
        <h2> 2022 </h2>
        <div className="vl"></div>
        <div className="container">
          <div className="objective-right">
            <p className="objective-title-right">Objective title</p>
          </div>
          <p className="objective-points-right">Objective point</p>
          <p className="objective-points-right">Objective point</p>
          <p className="objective-points-right">Objective point</p>
        </div>
        <div className="container">
          <div className="objective-left">
            <p className="objective-title-left">Objective title</p>
          </div>
          <p className="objective-points-left">Objective point</p>
          <p className="objective-points-left">Objective point</p>
          <p className="objective-points-left">Objective point</p>
        </div>
      </div>
    </div>
  );
};

export default App;
