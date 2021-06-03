import { useRouter } from "next/router";
import { ApolloProvider } from "@apollo/client";
import client from "client";
import UserProfile from "components/Users/Profile";
import Layout from "components/Layout";

function User() {
  const router = useRouter();
  const { username } = router.query;
  return (
    <ApolloProvider client={client}>
      <Layout>
        <UserProfile username={username as string} />
      </Layout>
    </ApolloProvider>
  );
}

export default User;
