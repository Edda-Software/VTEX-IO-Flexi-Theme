import React from "react";
import NearestStore from "./NearestStore";
import { DefaultConfig, NearestStoreSchema } from "./schema";
import { useNearestStore } from "./useNearestStore";

export interface NearestStoreProps {
  googleMapsApiKey: string;
  showComponent: boolean;
  stores: Store[];
  subTitle: string;
  title: string;
}

export interface Store {
  address: string;
  lat: number;
  lng: number;
  local: string;
  name: string;
  phone: string;
  schedules: string;
  showWhatsapp: boolean;
}

const NearestStoreContainer = (props: NearestStoreProps) => {
  if (!props.showComponent) return null;

  const nearestStore = useNearestStore(props.stores);

  return <NearestStore {...nearestStore} {...props} />;
};

NearestStoreContainer.getSchema = () => NearestStoreSchema;

NearestStoreContainer.defaultProps = DefaultConfig;

export default NearestStoreContainer;
