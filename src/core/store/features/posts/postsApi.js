import { baseApiSlice } from "@/core/store/baseApiSlice";

export const postsApi = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (params) => ({
        url: '/posts',
        params,
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ id }) => ({ type: 'Post', id })),
              { type: 'Post', id: 'LIST' },
            ]
          : [{ type: 'Post', id: 'LIST' }],
    }),
    getPostsWithPagination: builder.query({
      query: (args) => {
        const { page, search, limit } = args;
        const checkedLimit = limit === 0 || limit === "" ? 6 : limit;
        if (search !== "") {
          return `/posts/advanced?page=${page}&limit=${checkedLimit}&search=${search}`;
        } else {
          return `/posts/advanced?page=${page}&limit=${checkedLimit}`;
        }
      },
      providesTags: [{ type: 'Post', id: 'LIST' }],
    }),
    getPost: builder.query({
      query: (id) => `/posts/${id}`,
      providesTags: [{ type: 'Post', id: "LIST" }],
    }),
    searchPosts: builder.query({
      query: ({searchTerm, limit}) => `/posts?search=${searchTerm}&limit=${limit}`,
    }),
    createPost: builder.mutation({
      query: (body) => ({
        url: '/posts',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Post', id: 'LIST' }],
    }),
    createPostMock: builder.mutation({
      // We use queryFn here to mock a server response for demonstration
      // In production, replace with: query: (payload) => ({ url: '/posts', method: 'POST', body: payload })
      async queryFn(arg) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (arg.title.toLowerCase() === 'error') {
              reject({
                error: {
                  status: 500,
                  data: { message: 'Simulated server rejection. Try another title.' },
                },
              });
            } else {
              resolve({
                data: { id: Math.random().toString(36).substring(2, 9), ...arg },
              });
            }
          }, 1200);
        });
      },
    }),
    updatePost: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/posts/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: [{ type: 'Post', id: 'LIST' }],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Post', id: "LIST" }],
    }),
    bulkCreatePosts: builder.mutation({
      query: (posts) => ({
        url: '/posts/bulk-create',
        method: 'POST',
        body: { posts },
      }),
      invalidatesTags: [{ type: 'Post', id: 'LIST' }],
    }),
  }),
  overrideExisting: true
});

export const {
  useGetPostsQuery,
  useSearchPostsQuery,
  useGetPostsWithPaginationQuery,
  useGetPostQuery,
  useCreatePostMutation,
  useCreatePostMockMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
  useBulkCreatePostsMutation,
} = postsApi;