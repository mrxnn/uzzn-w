export const Badge = ({ text, classNames }) => {
  const classes =
    classNames +
    " rounded-lg font-semibold px-2 text-xs h-5 flex justify-center items-center ml-2 mt-1";
  return (
    <div className={classes}>
      <p>{text}</p>
    </div>
  );
};
