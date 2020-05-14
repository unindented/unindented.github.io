async function fetchGraphQL(query, variables) {
  const response = await fetch("https://github.unindented.org/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  return await response.json();
}

export default fetchGraphQL;
