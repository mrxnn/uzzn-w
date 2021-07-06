export default function Badge({ text, classNames }) {
  const isNumeric = !isNaN(text); // TRUE, if text is 123 or '123'

  // default background color
  const bgDefault = !classNames?.includes("bg-") ? " bg-gray-600" : "";

  const classes =
    classNames +
    (isNumeric ? " text-[0.70rem]" : " text-[0.60rem]") +
    " rounded-lg font-semibold px-2 text-white h-5 flex justify-center items-center ml-2" +
    bgDefault;

  return (
    <div className={classes}>
      <p>{text}</p>
    </div>
  );
}
