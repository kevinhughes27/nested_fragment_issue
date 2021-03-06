import { Environment, Network, RecordSource, Store, CacheConfig, Variables, RequestNode } from "relay-runtime";
import RelayQueryResponseCache from "relay-runtime/lib/RelayQueryResponseCache";

const cache = new RelayQueryResponseCache({ size: 250, ttl: 60 * 5 * 1000 });

const fetchQuery = (
  operation: RequestNode,
  variables: Variables,
  cacheConfig: CacheConfig
) => {
  const queryID = operation.name;
  const forceLoad = cacheConfig && cacheConfig.force;
  const cachedData = cache.get(queryID, variables);

  // serve the cache if possible
  if (!forceLoad && cachedData) {
    return cachedData;
  }

  // clear the (whole) cache. this option is set for all mutations
  if (forceLoad) {
    cache.clear();
  }

  const headers = {
    "content-type": "application/json",
  };

  const body = JSON.stringify({
    query: operation.text,
    variables,
  });

  return fetch("/graphql", {
    method: "POST",
    headers,
    body,
  }).then((response) => {
    return response.json();
  }).then((data) => {
    if (operation.operationKind !== "mutation") {
      cache.set(queryID, variables, data);
    }

    return data;
  });
};

const modernEnvironment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default modernEnvironment;
