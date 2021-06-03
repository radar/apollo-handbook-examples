import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
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
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Mutation = {
  __typename?: 'Mutation';
  createBook: Book;
};


export type MutationCreateBookArgs = {
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  books: Array<Book>;
  booksWithTitle: Array<Book>;
  user: UserResult;
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
  username: Scalars['String'];
  suspensionReason: Scalars['String'];
};


export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
};

export type UserResult = User | SuspendedUser;

export type AllBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type AllBooksQuery = (
  { __typename?: 'Query' }
  & { books: Array<(
    { __typename?: 'Book' }
    & Pick<Book, 'title'>
  )> }
);


export const AllBooksDocument = gql`
    query allBooks {
  books {
    title
  }
}
    `;

/**
 * __useAllBooksQuery__
 *
 * To run a query within a React component, call `useAllBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllBooksQuery(baseOptions?: Apollo.QueryHookOptions<AllBooksQuery, AllBooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllBooksQuery, AllBooksQueryVariables>(AllBooksDocument, options);
      }
export function useAllBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllBooksQuery, AllBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllBooksQuery, AllBooksQueryVariables>(AllBooksDocument, options);
        }
export type AllBooksQueryHookResult = ReturnType<typeof useAllBooksQuery>;
export type AllBooksLazyQueryHookResult = ReturnType<typeof useAllBooksLazyQuery>;
export type AllBooksQueryResult = Apollo.QueryResult<AllBooksQuery, AllBooksQueryVariables>;