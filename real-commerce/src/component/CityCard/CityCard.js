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
      (city) => city.id !== itemToRemove.id
    );
    itemToRemove.isFavorite = false;
    favorites.setFavorites(updatedFavorites);
  };

  return (
    <li className={style.li}>
      <div className={style.cardHeader}>
        <div>
          <h3 className={style.h3}>{item.City}</h3>
          <h3>{item.Country}</h3>
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
              console.log(item);
            }}
          >
            add to favorites
          </div>
        )}
      </div>
      <div className={style.details}>
        <p>{item.WeatherText}</p>
        <p>{item.Temperature.Metric.Value}°C</p>
      </div>
    </li>
  );
}
