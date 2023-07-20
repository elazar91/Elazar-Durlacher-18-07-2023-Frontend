import style from "./CityCard.module.scss";

export default function CityCard({ item, favorites }) {
  const handleAddToFavorites = () => {
    if (favorites && !favorites.favorites.includes(item.isFavorite)) {
      favorites.setFavorites([...favorites.favorites, item]);
      item.isFavorite = true;
    } else {
      favorites?.setFavorites([item]);
    }
  };

  const handleRemoveFromFavorites = (itemToRemove) => {
    const updatedFavorites = favorites.favorites.filter(
      (city) => city.Key !== itemToRemove.Key
    );
    itemToRemove.isFavorite = false;
    favorites.setFavorites(updatedFavorites);
  };

  return (
    <li className={style.li}>
      <div className={style.cardHeader}>
        <div>
          <h3 className={style.h3}>{item.LocalizedName}</h3>
          <h3>{item.Country.LocalizedName}</h3>
        </div>
        {item?.isFavorite ? (
          <div
            className={`${style.delete} ${style.button}`}
            onClick={() => handleRemoveFromFavorites(item)}
          >
            remove from favorites
          </div>
        ) : (
          <div
            className={`${style.notFavorite} ${style.button}`}
            onClick={() => {
              handleAddToFavorites();
            }}
          >
            add to favorites
          </div>
        )}
      </div>
      <div className={style.details}>
        <p>{item.data[0].WeatherText}</p>
        <p>
          {item?.data[0].Temperature?.Metric?.Value}{" "}
          {item?.data[0].Temperature?.Metric?.Unit}
        </p>
      </div>
    </li>
  );
}
