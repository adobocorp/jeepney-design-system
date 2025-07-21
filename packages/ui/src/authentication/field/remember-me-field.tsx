export default function RememberMeCheckbox() {
  return (
    <>
      <input name="remember_me" type="hidden" value="0" />
      <input
        className="my-1 mr-1 w-4 h-4 text-sm"
        type="checkbox"
        value="1"
        name="remember_me"
        id="remember_me"
      />
      <label>Remember me</label>
    </>
  );
}
