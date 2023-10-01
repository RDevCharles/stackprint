const Loader = ({ loading }) => {
  return (
    <div className={`loader ${loading ? 'active' : ''}`}>
      <div className="paper">
              <div className="printing" />
              <p>printing...</p>
          </div>
         
    </div>
  );
};

export default Loader;
