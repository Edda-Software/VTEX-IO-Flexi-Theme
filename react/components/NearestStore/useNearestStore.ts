import { ChangeEvent, useState } from "react";
import { Store } from ".";

export const useNearestStore = (stores: Store[]) => {
  const initialStore = stores?.length ? stores[0] : ({} as Store);
  const [selectedStore, setSelectedStore] = useState(initialStore);
  const [showToast, setShowToast] = useState(false);

  const handlerChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.currentTarget;
    const store = stores.find((store) => store.name === value);
    if (!store) return;
    setSelectedStore(store);
  };

  const clipboard = () => {
    navigator.clipboard.writeText(selectedStore.address);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return {
    handlerChange,
    clipboard,
    selectedStore,
    showToast,
  };
};
