import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-[100%] min-h-[100vh] flex justify-center items-center">
      <SignUp />;
    </div>
  );
}
