export default function Badge({ text, classNames }) {
  const classes =
    classNames +
    " bg-gray-400 rounded-lg font-semibold px-2 text-xs text-white h-5 flex justify-center items-center ml-2 mt-1";
  return (
    <div className={classes}>
      <p>{text}</p>
    </div>
  );
}
