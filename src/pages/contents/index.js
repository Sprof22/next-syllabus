import { useRouter } from "next/router";
import { useEffect } from "react";


const HomePage = function () {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, []);
  return (
<div></div>
  );
};

export default HomePage;

