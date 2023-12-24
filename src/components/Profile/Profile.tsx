import ProfileStyled from "./ProfileStyled";

const Profile = (): React.ReactElement => {
  return (
    <ProfileStyled className="profile">
      <h1 className="profile__name">Camino Losada</h1>
      <img
        className="profile__photo"
        alt="camino losada alonso"
        width="240"
        height="240"
        src="/Camino 2.svg"
      />
      <h2 className="profile__role">Full Stack Developer</h2>
      <h3 className="profile__ubication">Based in Barcelona</h3>
      <p className="profile__about">
        I&apos;m specialized in MERN stack, with a strong focus on best
        practices, clean code, and Agile ecosystems.
      </p>
    </ProfileStyled>
  );
};

export default Profile;
