import { Environment, Network, RecordSource, Store } from "relay-runtime";

async function fetchGraphQL(query, variables) {
  const response = await fetch(process.env.REACT_APP_GRAPHQL_ENDPOINT, {
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

async function fetchRelay(operation, variables) {
  const response = await fetchGraphQL(operation.text, variables);

  if (process.env.NODE_ENV === "development") {
    console.debug({
      name: operation.name,
      variables,
      response,
    });
  }

  return response;
}

export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});
