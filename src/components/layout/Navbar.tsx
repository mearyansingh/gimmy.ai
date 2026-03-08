import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import { UserButton } from "@neondatabase/neon-js/auth/react";
import { Button } from "../ui/Button";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {

  const { user } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-foreground"
        >
          <Dumbbell className="w-6 h-6 text-accent" />
          <span className="font-semibold text-lg">Gymmy.ai</span>
        </Link>

        <nav className="flex items-center gap-3">
          {user ? (
            <>
              <Link to="/profile">
                <Button variant="ghost" size="sm" className="rounded-full bg-accent/10 text-accent hover:bg-accent/20 hover:text-accent-hover">
                  My Plan
                </Button>
              </Link>
              <UserButton
                size="icon"
                className="rounded-full border-2 border-accent outline-2 outline-accent cursor-pointer w-10 h-10"
              />
            </>
          ) : (
            <>
              <Link to="/auth/sign-in">
                <Button variant="ghost" size="sm" className="rounded-full">
                  Sign In
                </Button>
              </Link>
              <Link to="/auth/sign-up">
                <Button size="sm" className="rounded-full">Sign Up</Button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
