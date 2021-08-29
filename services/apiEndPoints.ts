export const apiUri = {
    auth: {
        login: "/api/v1/login",
        register: "/api/v1/register",
        me: "/api/v1/user",
    },
    blog: {
        categoriesGet: "/api/v1/categories",
        categoriesPost: "/api/v1/create-category",
        categoryPut: "/api/v1/update-category", // /id
        categoryDelete: "/api/v1/delete-category", // id
        blogPost: "/api/v1/create-blog",
        blogListGet: "/api/v1/blogs",
        blogGet: "/api/v1/blog",
        blogPut: "/api/v1/update-blog", // id
    }
}
