import { useRouter } from "next/router";
import { ApolloProvider } from "@apollo/client";
import client from "client";
import UserProfile from "components/Users/profile";

function User() {
  const router = useRouter();
  const { username } = router.query;
  return (
    <ApolloProvider client={client}>
      <UserProfile username={username as string} />
    </ApolloProvider>
  );
}

export default User;
