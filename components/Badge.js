export default function Badge({ text, classNames }) {
  const isNumeric = !isNaN(text); // TRUE, if text is 123 or '123'

  const classes =
    classNames +
    (isNumeric ? " text-xs" : " text-xxs") +
    " bg-gray-400 rounded-lg font-semibold px-2 text-white h-5 flex justify-center items-center ml-2 mt-1";

  return (
    <div className={classes}>
      <p>{text}</p>
    </div>
  );
}
