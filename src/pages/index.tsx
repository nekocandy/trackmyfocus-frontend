import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import SessionCard from "../components/SessionCard/SessionCard";
import SignIn from "../components/SignIn/SignIn";

export default function HomePage() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <p>Loading...</p>;
  } else if (isAuthenticated && user) {
    return (
      <div className="text-light-700">
        <div className="py-4">
          <span className="text-lg">Hi {user.name},</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {new Array(10).fill(0).map((_, index) => (
            <SessionCard
              key={index}
              index={index + 1}
              id={index.toString()}
              sessionName="Hello"
            />
          ))}
        </div>
      </div>
    );
  } else {
    return <SignIn />;
  }
}
