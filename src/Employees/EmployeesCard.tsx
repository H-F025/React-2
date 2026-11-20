export type EmployeesCardProps = {
  name: string;
  post: string;
  emailAddress: string;
  img: string;
};

function EmployeesCard({ name, post, emailAddress, img }: EmployeesCardProps) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={img} alt={`${name}の画像`} />
      </div>

      <div className="card-info">
        <p className="card-name">{name}</p>
        <p className="card-post">{post}</p>
        <p className="card-email">{emailAddress}</p>
      </div>
    </div>
  );
}

export default EmployeesCard;
