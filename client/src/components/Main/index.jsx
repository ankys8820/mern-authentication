import style from "./style.module.css";
const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <>
      <div className={style.main_container}>
        <nav className={style.navbar}>
          <h1>Fakebook</h1>
          <button className={style.white_btn} onClick={handleLogout}>
            Log Out
          </button>
        </nav>
      </div>
    </>
  );
};
export default Main;
