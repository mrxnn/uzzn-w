export default function Badge({ text, classNames }) {
  const isNumeric = !isNaN(text); // TRUE, if text is 123 or '123'

  // default background color
  const bgDefault = !classNames?.includes("bg-") ? " bg-gray-600" : "";

  const classes =
    classNames +
    (isNumeric ? " text-xs" : " text-[0.60rem]") +
    " rounded-lg font-semibold px-2 text-white h-5 flex justify-center items-center ml-2 transform translate-y-[-1.2px]" +
    bgDefault;

  return (
    <div className={classes}>
      <p className="transform translate-y-[1.2px]">{text}</p>
    </div>
  );
}
