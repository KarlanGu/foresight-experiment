import useSWR from 'swr';
import UuidStore from './UuidStore';

export function fetcher(...args) {
  return fetch(...args).then((res) => res.json());
}

export function fetcherWithToken(...args) {
  if (args[1]) {
    if (args[1].headers) {
      args[1].headers['X-SESSION-TOKEN'] = UuidStore.value;
    } else {
      args[1].headers = { 'X-SESSION-TOKEN': UuidStore.value };
    }
  } else {
    args[1] = { headers: { 'X-SESSION-TOKEN': UuidStore.value } };
  }
  return fetch(...args).then((res) => res.json());
}

export function usePOI() {
  const { data, error } = useSWR(
    'http://foresight.australiaeast.cloudapp.azure.com:3000/pois',
    fetcherWithToken
  );

  return {
    POI: data,
    isError: error,
    isLoading: !error && !data,
  };
}

export function usePOIimg() {
  const { data, error } = useSWR(
    'http://foresight.australiaeast.cloudapp.azure.com:3000/pois/image/51/pois/51',
    fetcherWithToken
  );

  return {
    POI: data,
    isError: error,
    isLoading: !error && !data,
  };
}
