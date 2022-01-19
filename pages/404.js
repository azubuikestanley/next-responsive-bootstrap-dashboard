import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const PageNotFound = () => {
  const router = useRouter();

  useEffect(() => {
    //Go back to home dashboard from 404 page after 5 seconds
    setTimeout(() => {
      router.push("/");
    },5000)
  }, [router]);

  return (
    <div className="page_not_found">
      <Head>
        <title>Substance | 404</title>
        <meta name="description" content="This is an Admin dashboard" />
        <link rel="icon" href="/substance.svg" />
      </Head>
      <h2>Page cannot be found.</h2>
      <p>Go back to the 
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
}

export default PageNotFound;