import React, { ChangeEvent, FC } from "react";
//import { Icon } from "vtex.store-icons";
import { NearestStoreProps, Store } from ".";
import Gmap from "./components/Gmap";
import Loader from "./components/Loader";
import styles from "./styles.css";

interface Props extends NearestStoreProps {
  handlerChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  selectedStore: Store;
  showToast: boolean;
}

const NearestStore: FC<Props> = ({
  title,
  subTitle,
  stores,
  selectedStore,
  googleMapsApiKey,
  showToast,
  handlerChange,
}) => {
  return (
    <>
      <div className={styles.nearestStore}>
        <div className={styles.nearestStoreSearch}>
          <p className={styles.nearestStoreSearchTitle}>{title}</p>
          <p className={styles.nearestStoreSearchSubTitle}>{subTitle}</p>

          <select
            className={styles.nearestStoreSearchSelect}
            onChange={handlerChange}
          >
            {stores?.map((store) => (
              <option key={store.name} value={store.name}>
                {store.name}
              </option>
            ))}
          </select>
          <div className={styles.nearestStoreSearchItem}>
            <div className={styles.nearestStoreSearchItemTitle}>Dirección</div>
            <div className={styles.nearestStoreSearchItemContent}>
              <div className={styles.nearestStoreSearchItemContentAddress}>
                <p className={styles.nearestStoreSearchItemContentAddressText}>
                  {selectedStore.address}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.nearestStoreSearchItem}>
            <div className={styles.nearestStoreSearchItemTitle}>Horarios</div>
            <div className={styles.nearestStoreSearchItemContent}>
              {selectedStore.schedules}
            </div>
            <div className={styles.nearestStoreSearchContact}>
              <a
                href={`https://wa.me/+57${selectedStore.phone}`}
                target="_blank"
                className={styles.nearestStoreSearchItemContentPhoneButton}
              >
                Llamar
              </a>
              <a
                href={`https://maps.google.com?q=${selectedStore.lat},${selectedStore.lng}`}
                target="_blank"
                className={styles.nearestStoreSearchItemContentAddressButton}
              >
                Ver en google maps
              </a>
            </div>
          </div>
        </div>

        <div className={styles.nearestStoreMap}>
          <Gmap
            googleMapsApiKey={googleMapsApiKey}
            center={{ lat: selectedStore.lat, lng: selectedStore.lng }}
            markerPosition={{ lat: selectedStore.lat, lng: selectedStore.lng }}
            mapContainerStyle={{
              width: "100%",
              height: "100%",
            }}
            loadingElement={<Loader />}
          />
        </div>
      </div>

      {showToast && (
        <div className={styles.toast}>
          <p className={styles.nearestStoreSearchItemContentAddressText}>Dirección copiada</p>
        </div>
      )}
    </>
  );
};

export default NearestStore;
