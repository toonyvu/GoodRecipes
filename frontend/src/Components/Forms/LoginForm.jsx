export default function LoginForm() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-gray-100">
      <h1 className="mb-4">Find Recipes for your hungry needs!</h1>
      <div className="bg-amber-300 w-1/2 p-10 rounded">
        <form className="flex flex-col gap-4">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" className="border p-2" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" className="border p-2" />

          <button className="bg-green-400 p-2 rounded">Login!</button>
        </form>
      </div>
    </div>
  );
}
