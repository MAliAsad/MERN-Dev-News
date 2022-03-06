import haaderStyle from "../styles/Header.module.css";

const Header = () => {
  const x = 5;
  return (
    <div>
      <h1 className={haaderStyle.title}>
        <span>MERN Dev</span> News
      </h1>
      <p className={haaderStyle.description}>
        Stay up-to-date with MERN dev news.
      </p>
      {/* For conditional styling */}
      <style jsx>
        {`
          .title {
            color: ${x < 3 ? "red" : "blue"};
          }
        `}
      </style>
    </div>
  );
};

export default Header;
