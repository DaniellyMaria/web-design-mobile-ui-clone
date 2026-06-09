type ProfileHeaderProps = {
  image: string;
  name: string;
  phone: string;
  role: string;
};

function ProfileHeader({ image, name, phone, role }: ProfileHeaderProps) {
  return (
    <section className="profile-area">
      <img className="profile-image" src={image} alt={name} />

      <div>
        <h2>{name}</h2>
        <p>{phone}</p>
        <span>{role}</span>
      </div>
    </section>
  );
}

export default ProfileHeader;