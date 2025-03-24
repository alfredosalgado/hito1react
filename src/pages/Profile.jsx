const Profile = () => {
  const userEmail = "test@test.com"; // Simulación de usuario

  return (
    <div className="text-center mt-5">
      <h2 className="text-white">Perfil de Usuario</h2>
      <p className="text-white">Email: {userEmail}</p>
      <button className="btn btn-warning">Cerrar sesión</button>
    </div>
  );
};

export default Profile;
