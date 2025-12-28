import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "../ui/card";

export default function LoginForm() {
  return (
    <div className="min-h-screen flex items-center flex-col bg-gray-100">
      <h1 className="mb-4 mt-15 font-bold text-5xl text-gray-700">
        Find, share and create recipes.
      </h1>
      <div>
        <Card className="w-125 mt-15">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Log in using your email and password.
            </CardDescription>
            <CardAction>
              No account?{" "}
              <a href="https://ui.shadcn.com/docs/components/card">Sign up</a>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-4">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" className="border p-2" />

              <label htmlFor="password">Password:</label>
              <input type="password" id="password" className="border p-2" />

              <button className="bg-green-400 p-2 rounded">Login!</button>
              <button className="bg-gray-200 p-2 rounded">
                Login with Google
              </button>
            </form>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </div>
  );
}
