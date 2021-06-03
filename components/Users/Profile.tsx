import gql from "graphql-tag";
import { UserQuery, useUserQuery } from "src/generated/graphql";

type User = Extract<UserQuery["result"], { __typename?: "User" }>;

type SuspendedUser = Extract<
  UserQuery["result"],
  { __typename?: "SuspendedUser" }
>;

const userQuery = gql`
  query user($username: String!) {
    result: user(username: $username) {
      ... on SuspendedUser {
        id
        username
        suspensionReason
      }

      ... on User {
        id
        username
      }
    }
  }
`;

function Profile({ id, username }: User) {
  return (
    <div>
      <h1>
        #{id} - {username}
      </h1>
    </div>
  );
}

function SuspendedUserProfile({
  id,
  username,
  suspensionReason,
}: SuspendedUser) {
  return (
    <div>
      <h1 className="text-red-500">
        #{id} - {username}
      </h1>

      <strong>Suspended: {suspensionReason}</strong>
    </div>
  );
}

function isSuspendedUser(user: UserQuery["result"]): user is SuspendedUser {
  return user.__typename == "SuspendedUser";
}

function WrappedUser({ username }: { username: string }) {
  const { data } = useUserQuery({ variables: { username } });

  if (data) {
    const { result } = data;
    if (isSuspendedUser(result)) {
      return <SuspendedUserProfile {...result} />;
    } else {
      return <Profile {...result} />;
    }
  }

  return null;
}
export default WrappedUser;
