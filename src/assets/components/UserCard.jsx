const UserCard = ({ user }) => {
  return (
    <div className="card mb-3 shadow-sm" style={{ maxWidth: "500px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={user.picture.medium}
            className="img-fluid rounded-start h-100 w-100"
            alt={user.name.first}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              {user.name.first} {user.name.last}
            </h5>
            <p className="card-text">
              <span className="fw-bold">Gender:</span> {user.gender}
            </p>
            <p className="card-text">
              <span className="fw-bold">Age:</span> {user.dob.age}
            </p>
            <p className="card-text">
              <small className="text-muted">Email: {user.email}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
