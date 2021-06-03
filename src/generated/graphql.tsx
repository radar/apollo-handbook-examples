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

export type AllBooksWithTitleQueryVariables = Exact<{
  title: Scalars['String'];
}>;


export type AllBooksWithTitleQuery = (
  { __typename?: 'Query' }
  & { books: Array<(
    { __typename?: 'Book' }
    & Pick<Book, 'id' | 'title'>
  )> }
);


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