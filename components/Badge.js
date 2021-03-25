export default function Badge({ text, classNames }) {
  const isNumeric = !isNaN(text); // TRUE, if text is 123 or '123'

  const classes =
    classNames +
    (isNumeric ? " text-xs" : " text-[0.60rem]") +
    " bg-gray-400 dark:bg-gray-600 rounded-lg font-semibold px-2 text-white h-5 flex justify-center items-center ml-2";

  return (
    <div className={classes}>
      <p className="transform translate-y-[1px]">{text}</p>
    </div>
  );
}
