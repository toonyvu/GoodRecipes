export default function LoginForm() {
  return (
    <div className="mt-4">
      <div className=" bg-amber-300 w-[50%] place-self-center">
        <form action="" className="flex flex-col gap-4">
          <label for="username">Username:</label>
          <input type="text" id="username" />

          <label for="password">Password:</label>
          <input type="text" id="password" />

          <button className="bg-green-400">Login!</button>
        </form>
      </div>
    </div>
  );
}
