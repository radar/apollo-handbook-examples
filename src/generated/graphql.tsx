import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Book = {
  __typename?: 'Book';
  id: Scalars['ID'];
  title: Scalars['String'];
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Mutation = {
  __typename?: 'Mutation';
  createBook: Book;
  updateBookTitle: Book;
};


export type MutationCreateBookArgs = {
  title: Scalars['String'];
};


export type MutationUpdateBookTitleArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  book: Book;
  books: Array<Book>;
  booksWithTitle: Array<Book>;
  user: UserResult;
};


export type QueryBookArgs = {
  id: Scalars['ID'];
};


export type QueryBooksWithTitleArgs = {
  title: Scalars['String'];
};


export type QueryUserArgs = {
  username: Scalars['String'];
};

export type SuspendedUser = {
  __typename?: 'SuspendedUser';
  id: Scalars['ID'];
  suspensionReason: Scalars['String'];
  username: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
};

export type UserResult = SuspendedUser | User;

export type CreateBookMutationVariables = Exact<{
  title: Scalars['String'];
}>;


export type CreateBookMutation = { __typename?: 'Mutation', createBook: { __typename?: 'Book', id: string, title: string } };

export type AllBooksWithTitleQueryVariables = Exact<{
  title: Scalars['String'];
}>;


export type AllBooksWithTitleQuery = { __typename?: 'Query', books: Array<{ __typename?: 'Book', id: string, title: string }> };

export type UserQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type UserQuery = { __typename?: 'Query', result: { __typename?: 'SuspendedUser', id: string, username: string, suspensionReason: string } | { __typename?: 'User', id: string, username: string } };


export const CreateBookDocument = gql`
    mutation createBook($title: String!) {
  createBook(title: $title) {
    id
    title
  }
}
    `;
export type CreateBookMutationFn = Apollo.MutationFunction<CreateBookMutation, CreateBookMutationVariables>;

/**
 * __useCreateBookMutation__
 *
 * To run a mutation, you first call `useCreateBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookMutation, { data, loading, error }] = useCreateBookMutation({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useCreateBookMutation(baseOptions?: Apollo.MutationHookOptions<CreateBookMutation, CreateBookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBookMutation, CreateBookMutationVariables>(CreateBookDocument, options);
      }
export type CreateBookMutationHookResult = ReturnType<typeof useCreateBookMutation>;
export type CreateBookMutationResult = Apollo.MutationResult<CreateBookMutation>;
export type CreateBookMutationOptions = Apollo.BaseMutationOptions<CreateBookMutation, CreateBookMutationVariables>;
export const AllBooksWithTitleDocument = gql`
    query allBooksWithTitle($title: String!) {
  books: booksWithTitle(title: $title) {
    id
    title
  }
}
    `;

/**
 * __useAllBooksWithTitleQuery__
 *
 * To run a query within a React component, call `useAllBooksWithTitleQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllBooksWithTitleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllBooksWithTitleQuery({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useAllBooksWithTitleQuery(baseOptions: Apollo.QueryHookOptions<AllBooksWithTitleQuery, AllBooksWithTitleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllBooksWithTitleQuery, AllBooksWithTitleQueryVariables>(AllBooksWithTitleDocument, options);
      }
export function useAllBooksWithTitleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllBooksWithTitleQuery, AllBooksWithTitleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllBooksWithTitleQuery, AllBooksWithTitleQueryVariables>(AllBooksWithTitleDocument, options);
        }
export type AllBooksWithTitleQueryHookResult = ReturnType<typeof useAllBooksWithTitleQuery>;
export type AllBooksWithTitleLazyQueryHookResult = ReturnType<typeof useAllBooksWithTitleLazyQuery>;
export type AllBooksWithTitleQueryResult = Apollo.QueryResult<AllBooksWithTitleQuery, AllBooksWithTitleQueryVariables>;
export const UserDocument = gql`
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

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;