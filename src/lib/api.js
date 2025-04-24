import { request, gql } from "graphql-request";

const API_URL = "http://avisat-backend.local/graphql";

export async function fetchAPI(query, { variables } = {}) {
  try {
    return await request(API_URL, query, variables);
  } catch (error) {
    console.error("Error fetching API:", error);
    throw new Error("Could not fetch data from API");
  }
}

export async function getAllProducts() {
  const query = gql`
    query AllProducts {
      products(first: 100) {
        nodes {
          id
          title
          slug
          date
          excerpt
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  `;

  const data = await fetchAPI(query);
  return data?.products?.nodes || [];
}

export async function getProductBySlug(slug) {
  const query = gql`
    query ProductBySlug($slug: ID!) {
      product(id: $slug, idType: SLUG) {
        id
        title
        slug
        date
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        // Дополнительные поля в зависимости от вашей структуры
      }
    }
  `;

  const data = await fetchAPI(query, { variables: { slug } });
  return data?.product;
}

// Аналогичные функции для категорий и других нужных данных
