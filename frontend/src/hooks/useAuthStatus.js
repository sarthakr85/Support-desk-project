import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const useAuthStatus = () => {
  const [loggedIn, setLoggenIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      setLoggenIn(true);
    } else {
      setLoggenIn(false);
    }
    setLoading(false);
  }, [user]);

  return { loggedIn, loading };
};
