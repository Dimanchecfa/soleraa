const Header = () => {
    return (
        <>
            <header className="app-heading homeHeading">
                <div className="homeHeading__background">
                    <span className="homeHeading__imageAuthor">Melody Leporatti</span>
                </div>
                <div className="homeHeading__content">
                    <h1 className="homeHeading__title">Tout pour organiser votre mariage</h1>
                    <p className="homeHeading__subtitle">Plus de 56.000 prestataires pour faire votre choix !</p>
                    <div className="homeHeading__searcherFields app-searcher-tracking">
  <form className="searcherOpenModal app-searcher-modal " method="get" role="search" action="https://www.mariages.net/busc.php">
    <input type="hidden" name="id_grupo"  />
    <input type="hidden" name="id_sector"  />
    <input type="hidden" name="id_region"  />
    <input type="hidden" name="id_provincia"  />
    <input type="hidden" name="id_poblacion"  />
    <input type="hidden" name="id_geozona"  />
    <input type="hidden" name="geoloc" />
    <input type="hidden" name="lat" />
    <input type="hidden" name="long" />
    <i className="svgIcon svgIcon__search searcherOpenModal__icon"><svg viewBox="0 0 74 77"><path d="M49.35 48.835l23.262 23.328a2.316 2.316 0 11-3.28 3.27L45.865 51.901a28.534 28.534 0 01-17.13 5.683C12.867 57.584.014 44.7.014 28.8.014 12.896 12.865.015 28.735.015 44.593.015 57.446 12.9 57.446 28.8a28.728 28.728 0 01-8.097 20.035zM52.813 28.8c0-13.345-10.782-24.153-24.079-24.153-13.31 0-24.089 10.805-24.089 24.153 0 13.344 10.782 24.152 24.09 24.152 13.294 0 24.078-10.811 24.078-24.152z" fillRule="nonzero" /></svg></i>        <div className="searcherOpenModal__inputsContainer app-searcher-inputs-container">
      <div className="searcherOpenModal__category app-filter-searcher-input">
        <input type="hidden" name="txtStrSearch"  data-last-value />
        <span className="searcherOpenModal__input searcherOpenModal__input--placeholder app-searcher-category-input-tracking" data-last-value>Que cherchez-vous ?</span>
      </div>
      <div className="searcherOpenModal__location app-searcher-location-input">
        <input type="hidden" name="txtLocSearch" data-last-value  />
        <span className="searcherOpenModal__input searcherOpenModal__input--placeholder app-searcher-location-input-tracking" data-last-value>
          Où ?              </span>
      </div>
    </div>
  </form>
  <form className="searcher app-searcher" method="get" role="search" action="https://www.mariages.net/busc.php">
    <input type="hidden" name="id_grupo"  />
    <input type="hidden" name="id_sector"  />
    <input type="hidden" name="id_region"  />
    <input type="hidden" name="id_provincia"  />
    <input type="hidden" name="id_poblacion"  />
    <input type="hidden" name="id_geozona"  />
    <input type="hidden" name="geoloc"  />
    <input type="hidden" name="latitude" />
    <input type="hidden" name="longitude" />
    <div className="searcher__category app-filter-searcher-field" data-bound-classes=",.searcher__category">
      <i className="svgIcon svgIcon__search searcher__categoryIcon"><svg viewBox="0 0 74 77"><path d="M49.35 48.835l23.262 23.328a2.316 2.316 0 11-3.28 3.27L45.865 51.901a28.534 28.534 0 01-17.13 5.683C12.867 57.584.014 44.7.014 28.8.014 12.896 12.865.015 28.735.015 44.593.015 57.446 12.9 57.446 28.8a28.728 28.728 0 01-8.097 20.035zM52.813 28.8c0-13.345-10.782-24.153-24.079-24.153-13.31 0-24.089 10.805-24.089 24.153 0 13.344 10.782 24.152 24.09 24.152 13.294 0 24.078-10.811 24.078-24.152z" fillRule="nonzero" /></svg></i>        <input className="searcher__input app-filter-searcher-input app-searcher-category-input-tracking" type="text"  name="txtStrSearch" data-last-value data-placeholder-default="Que cherchez-vous ?" data-placeholder-focused="Que cherchez-vous ?" aria-label="Que cherchez-vous ?" placeholder="Que cherchez-vous ?" autoComplete="off" aria-expanded="true" />
      <span data-href="https://www.mariages.net/busc.php" className="searcher__categoryReset app-searcher-reset-category">
        <i className="svgIcon svgIcon__close searcher__categoryResetIcon"><svg viewBox="0 0 26 26"><path d="M12.983 10.862L23.405.439l2.122 2.122-10.423 10.422 10.423 10.422-2.122 2.122-10.422-10.423L2.561 25.527.439 23.405l10.423-10.422L.439 2.561 2.561.439l10.422 10.423z" fillRule="nonzero" /></svg></i>          </span>
      <div className="searcher__placeholder app-filter-searcher-list">
        <ul className="searcherCategoriesDropdownList">
          <li className="searcherCategoriesDropdownList__item">
            <a href="https://www.mariages.net/busc.php?id_grupo=1" className="searcherCategoriesDropdownList__itemAnchor app-searcher-category-item-tracking app-filter-searcher-item" data-placeholder-name="Lieux de mariage" data-keycategorygroup={1} data-fields="{&quot;id_grupo&quot;:1}" tabIndex={0}>
              <img className="searcherCategoriesDropdownList__itemIcon" src="/assets/svg/source/vendors/categories/categReception.svg" width={22} height={22} />
              Lieux de mariage
            </a>
            <div className="searcherCategoriesDropdownList__itemArrow app-searcher-item-layer-expand">
              <img src="/assets/svg/source/_common/angleDown.svg" width={16} height={16} />
            </div>
            <ul className="searcherCategoriesDropdownSublist">
              <li className="searcherCategoriesDropdownSublist__item ">
                <a href="https://www.mariages.net/busc.php?id_grupo=1&id_sector=1" className="searcherCategoriesDropdownSublist__anchor app-searcher-category-item-tracking app-filter-searcher-item" data-fields="{&quot;id_grupo&quot;:1,&quot;id_sector&quot;:&quot;1&quot;}" data-placeholder-name="Domaine mariage" tabIndex={0} data-keycategory={1}>
                  Domaine mariage</a>
              </li>
              <li className="searcherCategoriesDropdownSublist__item ">
                <a href="https://www.mariages.net/busc.php?id_grupo=1&id_sector=2" className="searcherCategoriesDropdownSublist__anchor app-searcher-category-item-tracking app-filter-searcher-item" data-fields="{&quot;id_grupo&quot;:1,&quot;id_sector&quot;:&quot;2&quot;}" data-placeholder-name="Auberge mariage" tabIndex={0} data-keycategory={2}>
                  Auberge mariage</a>
              </li>
              <li className="searcherCategoriesDropdownSublist__item ">
                <a href="https://www.mariages.net/busc.php?id_grupo=1&id_sector=3" className="searcherCategoriesDropdownSublist__anchor app-searcher-category-item-tracking app-filter-searcher-item" data-fields="{&quot;id_grupo&quot;:1,&quot;id_sector&quot;:&quot;3&quot;}" data-placeholder-name="Hôtel mariage" tabIndex={0} data-keycategory={3}>
                  Hôtel mariage</a>
              </li>
              <li className="searcherCategoriesDropdownSublist__item ">
                <a href="https://www.mariages.net/busc.php?id_grupo=1&id_sector=4" className="searcherCategoriesDropdownSublist__anchor app-searcher-category-item-tracking app-filter-searcher-item" data-fields="{&quot;id_grupo&quot;:1,&quot;id_sector&quot;:&quot;4&quot;}" data-placeholder-name="Restaurant mariage" tabIndex={0} data-keycategory={4}>
                  Restaurant mariage</a>
              </li>
              <li className="searcherCategoriesDropdownSublist__item ">
                <a href="https://www.mariages.net/busc.php?id_grupo=1&id_sector=29" className="searcherCategoriesDropdownSublist__anchor app-searcher-category-item-tracking app-filter-searcher-item" data-fields="{&quot;id_grupo&quot;:1,&quot;id_sector&quot;:&quot;29&quot;}" data-placeholder-name="Salle mariage" tabIndex={0} data-keycategory={29}>
                  Salle mariage</a>
              </li>
              <li className="searcherCategoriesDropdownSublist__item ">
                <a href="https://www.mariages.net/busc.php?id_grupo=1&id_sector=31" className="searcherCategoriesDropdownSublist__anchor app-searcher-category-item-tracking app-filter-searcher-item" data-fields="{&quot;id_grupo&quot;:1,&quot;id_sector&quot;:&quot;31&quot;}" data-placeholder-name="Château mariage" tabIndex={0} data-keycategory={31}>
                  Château mariage</a>
              </li>
              <li className="searcherCategoriesDropdownSublist__item ">
                <a href="https://www.mariages.net/busc.php?id_grupo=1&id_sector=47" className="searcherCategoriesDropdownSublist__anchor app-searcher-category-item-tracking app-filter-searcher-item" data-fields="{&quot;id_grupo&quot;:1,&quot;id_sector&quot;:&quot;47&quot;}" data-placeholder-name="Bateau mariage" tabIndex={0} data-keycategory={47}>
                  Bateau mariage</a>
              </li>
              <li className="searcherCategoriesDropdownSublist__item ">
                <a href="https://www.mariages.net/busc.php?id_grupo=1&id_sector=63" className="searcherCategoriesDropdownSublist__anchor app-searcher-category-item-tracking app-filter-searcher-item" data-fields="{&quot;id_grupo&quot;:1,&quot;id_sector&quot;:&quot;63&quot;}" data-placeholder-name="Mariages à la plage" tabIndex={0} data-keycategory={63}>
                  Mariages à la plage</a>
              </li>
            </ul>
          </li>
          <li className="searcherCategoriesDropdownList__item">
            <a href="https://www.mariages.net/busc.php?id_grupo=2&id_sector=5" className="searcherCategoriesDropdownList__itemAnchor app-searcher-category-item-tracking  app-filter-searcher-item" data-placeholder-name="Traiteur mariage" data-fields="{&quot;id_grupo&quot;:2,&quot;id_sector&quot;:&quot;5&quot;}" data-keycategory={5} tabIndex={0}>
              <img className="searcherCategoriesDropdownList__itemIcon" src="/assets/svg/source/vendors/categories/categCatering.svg" width={22} height={22} />
              Traiteur mariage</a>
          </li>
          <li className="searcherCategoriesDropdownList__item">
            <a href="https://www.mariages.net/busc.php?id_grupo=2&id_sector=6" className="searcherCategoriesDropdownList__itemAnchor app-searcher-category-item-tracking  app-filter-searcher-item" data-placeholder-name="Faire part mariage" data-fields="{&quot;id_grupo&quot;:2,&quot;id_sector&quot;:&quot;6&quot;}" data-keycategory={6} tabIndex={0}>
              <img className="searcherCategoriesDropdownList__itemIcon" src="/assets/svg/source/vendors/categories/categInvite.svg" width={22} height={22} />
              Faire part mariage</a>
          </li>
          <li className="searcherCategoriesDropdownList__item">
            <a href="https://www.mariages.net/busc.php?id_grupo=2&id_sector=7" className="searcherCategoriesDropdownList__itemAnchor app-searcher-category-item-tracking  app-filter-searcher-item" data-placeholder-name="Cadeaux invités mariage" data-fields="{&quot;id_grupo&quot;:2,&quot;id_sector&quot;:&quot;7&quot;}" data-keycategory={7} tabIndex={0}>
              <img className="searcherCategoriesDropdownList__itemIcon" src="/assets/svg/source/vendors/categories/categGift.svg" width={22} height={22} />
              Cadeaux invités mariage</a>
          </li>
          <li className="searcherCategoriesDropdownList__item">
            <a href="https://www.mariages.net/busc.php?id_grupo=2&id_sector=8" className="searcherCategoriesDropdownList__itemAnchor app-searcher-category-item-tracking  app-filter-searcher-item" data-placeholder-name="Photo mariage" data-fields="{&quot;id_grupo&quot;:2,&quot;id_sector&quot;:&quot;8&quot;}" data-keycategory={8} tabIndex={0}>
              <img className="searcherCategoriesDropdownList__itemIcon" src="/assets/svg/source/vendors/categories/categPhoto.svg" width={22} height={22} />
              Photo mariage</a>
          </li>
          <li className="searcherCategoriesDropdownList__item">
            <a href="https://www.mariages.net/busc.php?id_grupo=2&id_sector=9" className="searcherCategoriesDropdownList__itemAnchor app-searcher-category-item-tracking  app-filter-searcher-item" data-placeholder-name="Musique mariage" data-fields="{&quot;id_grupo&quot;:2,&quot;id_sector&quot;:&quot;9&quot;}" data-keycategory={9} tabIndex={0}>
              <img className="searcherCategoriesDropdownList__itemIcon" src="/assets/svg/source/vendors/categories/categMusic.svg" width={22} height={22} />
              Musique mariage</a>
          </li>
          <li className="searcherCategoriesDropdownList__item">
            <a href="https://www.mariages.net/busc.php?id_grupo=2&id_sector=10" className="searcherCategoriesDropdownList__itemAnchor app-searcher-category-item-tracking  app-filter-searcher-item" data-placeholder-name="Voiture mariage" data-fields="{&quot;id_grupo&quot;:2,&quot;id_sector&quot;:&quot;10&quot;}" data-keycategory={10} tabIndex={0}>
              <img className="searcherCategoriesDropdownList__itemIcon" src="/assets/svg/source/vendors/categories/categRental.svg" width={22} height={22} />
              Voiture mariage</a>
          </li>
          <li className="searcherCategoriesDropdownList__item">
            <a href="https://www.mariages.net/busc.php?id_grupo=2&id_sector=11" className="searcherCategoriesDropdownList__itemAnchor app-searcher-category-item-tracking  app-filter-searcher-item" data-placeholder-name="Bus mariage" data-fields="{&quot;id_grupo&quot;:2,&quot;id_sector&quot;:&quot;11&quot;}" data-keycategory={11} tabIndex={0}>
              <img className="searcherCategoriesDropdownList__itemIcon" src="/assets/svg/source/vendors/categories/categTransport.svg" width={22} height={22} />
              Bus mariage</a>
          </li>
          <li className="searcherCategoriesDropdownList__item">
            <a href="https://www.mariages.net/busc.php?id_grupo=2&id_sector=12" className="searcherCategoriesDropdownList__itemAnchor app-searcher-category-item-tracking  app-filter-searcher-item" data-placeholder-name="Décoration mariage" data-fields="{&quot;id_grupo&quot;:2,&quot;id_sector&quot;:&quot;12&quot;}" data-keycategory={12} tabIndex={0}>
              <img className="searcherCategoriesDropdownList__itemIcon" src="/assets/svg/source/vendors/categories/categFurniture.svg" width={22} height={22} />
              Décoration mariage</a>
          </li>
          <li className="searcherCategoriesDropdownList__item">
            <a href="https://www.mariages.net/busc.php?id_grupo=2&id_sector=13" className="searcherCategoriesDropdownList__itemAnchor app-searcher-category-item-tracking  app-filter-searcher-item" data-placeholder-name="Chapiteau mariage" data-fields="{&quot;id_grupo&quot;:2,&quot;id_sector&quot;:&quot;13&quot;}" data-keycategory={13} tabIndex={0}>
              <img className="searcherCategoriesDropdownList__itemIcon" src="/assets/svg/source/vendors/categories/categRentals.svg" width={22} height={22} />
              Chapiteau mariage</a>
          </li>
          <li className="searcherCategoriesDropdownList__item">
            <a href="https://www.mariages.net/busc.php?id_grupo=2&id_sector=14" className="searcherCategoriesDropdownList__itemAnchor app-searcher-category-item-tracking  app-filter-searcher-item" data-placeholder-name="Animation mariage" data-fields="{&quot;id_grupo&quot;:2,&quot;id_sector&quot;:&quot;14&quot;}" data-keycategory={14} tabIndex={0}>
              <img className="searcherCategoriesDropdownList__itemIcon" src="/assets/svg/source/vendors/categories/categMisc.svg" width={22} height={22} />
              Animation mariage</a>
          </li>
          <li className="searcherCategoriesDropdownList__item">
            <a href="https://www.mariages.net/busc.php?id_grupo=2&id_sector=15" className="searcherCategoriesDropdownList__itemAnchor app-searcher-category-item-tracking  app-filter-searcher-item" data-placeholder-name="Fleurs mariage" data-fields="{&quot;id_grupo&quot;:2,&quot;id_sector&quot;:&quot;15&quot;}" data-keycategory={15} tabIndex={0}>
              <img className="searcherCategoriesDropdownList__itemIcon" src="/assets/svg/source/vendors/categories/categFlower.svg" width={22} height={22} />
              Fleurs mariage</a>
          </li>
          <li className="searcherCategoriesDropdownList__item">
            <a href="https://www.mariages.net/busc.php?id_grupo=2&id_sector=27" className="searcherCategoriesDropdownList__itemAnchor app-searcher-category-item-tracking  app-filter-searcher-item" data-placeholder-name="Liste de mariage" data-fields="{&quot;id_grupo&quot;:2,&quot;id_sector&quot;:&quot;27&quot;}" data-keycategory={27} tabIndex={0}>
              <img className="searcherCategoriesDropdownList__itemIcon" src="/assets/svg/source/vendors/categories/categRegistry.svg" width={22} height={22} />
              Liste de mariage</a>
          </li>
          <li className="searcherCategoriesDropdownList__item">
            <a href="https://www.mariages.net/busc.php?id_grupo=2&id_sector=28" className="searcherCategoriesDropdownList__itemAnchor app-searcher-category-item-tracking  app-filter-searcher-item" data-placeholder-name="Organisation mariage" data-fields="{&quot;id_grupo&quot;:2,&quot;id_sector&quot;:&quot;28&quot;}" data-keycategory={28} tabIndex={0}>
              <img className="searcherCategoriesDropdownList__itemIcon" src="/assets/svg/source/vendors/categories/categPlanner.svg" width={22} height={22} />
              Organisation mariage</a>
          </li>
          <li className="searcherCategoriesDropdownList__item">
            <a href="https://www.mariages.net/busc.php?id_grupo=2&id_sector=33" className="searcherCategoriesDropdownList__itemAnchor app-searcher-category-item-tracking  app-filter-searcher-item" data-placeholder-name="Vidéo mariage" data-fields="{&quot;id_grupo&quot;:2,&quot;id_sector&quot;:&quot;33&quot;}" data-keycategory={33} tabIndex={0}>
              <img className="searcherCategoriesDropdownList__itemIcon" src="/assets/svg/source/vendors/categories/categVideo.svg" width={22} height={22} />
              Vidéo mariage</a>
          </li>
          <li className="searcherCategoriesDropdownList__item">
            <a href="https://www.mariages.net/busc.php?id_grupo=2&id_sector=40" className="searcherCategoriesDropdownList__itemAnchor app-searcher-category-item-tracking  app-filter-searcher-item" data-placeholder-name="Lune de miel" data-fields="{&quot;id_grupo&quot;:2,&quot;id_sector&quot;:&quot;40&quot;}" data-keycategory={40} tabIndex={0}>
              <img className="searcherCategoriesDropdownList__itemIcon" src="/assets/svg/source/vendors/categories/categPlane.svg" width={22} height={22} />
              Lune de miel</a>
          </li>
          <li className="searcherCategoriesDropdownList__item">
            <a href="https://www.mariages.net/busc.php?id_grupo=2&id_sector=48" className="searcherCategoriesDropdownList__itemAnchor app-searcher-category-item-tracking  app-filter-searcher-item" data-placeholder-name="Wedding cake" data-fields="{&quot;id_grupo&quot;:2,&quot;id_sector&quot;:&quot;48&quot;}" data-keycategory={48} tabIndex={0}>
              <img className="searcherCategoriesDropdownList__itemIcon" src="/assets/svg/source/vendors/categories/categCake.svg" width={22} height={22} />
              Wedding cake</a>
          </li>
          <li className="searcherCategoriesDropdownList__item">
            <a href="https://www.mariages.net/busc.php?id_grupo=2&id_sector=64" className="searcherCategoriesDropdownList__itemAnchor app-searcher-category-item-tracking  app-filter-searcher-item" data-placeholder-name="Officiants" data-fields="{&quot;id_grupo&quot;:2,&quot;id_sector&quot;:&quot;64&quot;}" data-keycategory={64} tabIndex={0}>
              <img className="searcherCategoriesDropdownList__itemIcon" src="/assets/svg/source/vendors/categories/categOfficiant.svg" width={22} height={22} />
              Officiants</a>
          </li>
          <li className="searcherCategoriesDropdownList__item">
            <a href="https://www.mariages.net/busc.php?id_grupo=2&id_sector=79" className="searcherCategoriesDropdownList__itemAnchor app-searcher-category-item-tracking  app-filter-searcher-item" data-placeholder-name="Food Truck" data-fields="{&quot;id_grupo&quot;:2,&quot;id_sector&quot;:&quot;79&quot;}" data-keycategory={79} tabIndex={0}>
              <img className="searcherCategoriesDropdownList__itemIcon" src="/assets/svg/source/vendors/categories/categFoodtruck.svg" width={22} height={22} />
              Food Truck</a>
          </li>
          <li className="searcherCategoriesDropdownList__item">
            <a href="https://www.mariages.net/busc.php?id_grupo=2&id_sector=95" className="searcherCategoriesDropdownList__itemAnchor app-searcher-category-item-tracking  app-filter-searcher-item" data-placeholder-name="Vin et Spiritueux" data-fields="{&quot;id_grupo&quot;:2,&quot;id_sector&quot;:&quot;95&quot;}" data-keycategory={95} tabIndex={0}>
              <img className="searcherCategoriesDropdownList__itemIcon" src="/assets/svg/source/vendors/categories/categWineAndSpirits.svg" width={22} height={22} />
              Vin et Spiritueux</a>
          </li>
          <li className="searcherCategoriesDropdownList__item">
            <a href="https://www.mariages.net/busc.php?id_grupo=3&id_sector=36" className="searcherCategoriesDropdownList__itemAnchor app-searcher-category-item-tracking  app-filter-searcher-item" data-placeholder-name="Bijoux mariage" data-fields="{&quot;id_grupo&quot;:3,&quot;id_sector&quot;:&quot;36&quot;}" data-keycategory={96} tabIndex={0}>
              <img className="searcherCategoriesDropdownList__itemIcon" src="/assets/svg/source/vendors/categories/categJewelryInclusive.svg" width={22} height={22} />
              Bijoux mariage</a>
          </li>
          <li className="searcherCategoriesDropdownList__item">
            <a href="https://www.mariages.net/busc.php?id_grupo=3" className="searcherCategoriesDropdownList__itemAnchor app-searcher-category-item-tracking app-filter-searcher-item" data-placeholder-name="Mariée" data-keycategorygroup={3} data-fields="{&quot;id_grupo&quot;:3}" tabIndex={0}>
              <img className="searcherCategoriesDropdownList__itemIcon" src="/assets/svg/source/vendors/categories/categBride.svg" width={22} height={22} />
              Mariée
            </a>
            <div className="searcherCategoriesDropdownList__itemArrow app-searcher-item-layer-expand">
              <img src="/assets/svg/source/_common/angleDown.svg" width={16} height={16} />
            </div>
            <ul className="searcherCategoriesDropdownSublist">
              <li className="searcherCategoriesDropdownSublist__item ">
                <a href="https://www.mariages.net/busc.php?id_grupo=3&id_sector=17" className="searcherCategoriesDropdownSublist__anchor app-searcher-category-item-tracking app-filter-searcher-item" data-fields="{&quot;id_grupo&quot;:3,&quot;id_sector&quot;:&quot;17&quot;}" data-placeholder-name="Robe de mariée" tabIndex={0} data-keycategory={17}>
                  Robe de mariée</a>
              </li>
              <li className="searcherCategoriesDropdownSublist__item ">
                <a href="https://www.mariages.net/busc.php?id_grupo=3&id_sector=18" className="searcherCategoriesDropdownSublist__anchor app-searcher-category-item-tracking app-filter-searcher-item" data-fields="{&quot;id_grupo&quot;:3,&quot;id_sector&quot;:&quot;18&quot;}" data-placeholder-name="Accessoires mariage" tabIndex={0} data-keycategory={18}>
                  Accessoires mariage</a>
              </li>
              <li className="searcherCategoriesDropdownSublist__item ">
                <a href="https://www.mariages.net/busc.php?id_grupo=3&id_sector=20" className="searcherCategoriesDropdownSublist__anchor app-searcher-category-item-tracking app-filter-searcher-item" data-fields="{&quot;id_grupo&quot;:3,&quot;id_sector&quot;:&quot;20&quot;}" data-placeholder-name="Robe de cocktail" tabIndex={0} data-keycategory={20}>
                  Robe de cocktail</a>
              </li>
              <li className="searcherCategoriesDropdownSublist__item ">
                <a href="https://www.mariages.net/busc.php?id_grupo=3&id_sector=37" className="searcherCategoriesDropdownSublist__anchor app-searcher-category-item-tracking app-filter-searcher-item" data-fields="{&quot;id_grupo&quot;:3,&quot;id_sector&quot;:&quot;37&quot;}" data-placeholder-name="Esthétique coiffure mariage" tabIndex={0} data-keycategory={37}>
                  Esthétique coiffure mariage</a>
              </li>
            </ul>
          </li>
          <li className="searcherCategoriesDropdownList__item">
            <a href="https://www.mariages.net/busc.php?id_grupo=4" className="searcherCategoriesDropdownList__itemAnchor app-searcher-category-item-tracking app-filter-searcher-item" data-placeholder-name="Marié" data-keycategorygroup={4} data-fields="{&quot;id_grupo&quot;:4}" tabIndex={0}>
              <img className="searcherCategoriesDropdownList__itemIcon" src="/assets/svg/source/vendors/categories/categGroom.svg" width={22} height={22} />
              Marié
            </a>
            <div className="searcherCategoriesDropdownList__itemArrow app-searcher-item-layer-expand">
              <img src="/assets/svg/source/_common/angleDown.svg" width={16} height={16} />
            </div>
            <ul className="searcherCategoriesDropdownSublist">
              <li className="searcherCategoriesDropdownSublist__item ">
                <a href="https://www.mariages.net/busc.php?id_grupo=4&id_sector=21" className="searcherCategoriesDropdownSublist__anchor app-searcher-category-item-tracking app-filter-searcher-item" data-fields="{&quot;id_grupo&quot;:4,&quot;id_sector&quot;:&quot;21&quot;}" data-placeholder-name="Costumes mariage" tabIndex={0} data-keycategory={21}>
                  Costumes mariage</a>
              </li>
              <li className="searcherCategoriesDropdownSublist__item ">
                <a href="https://www.mariages.net/busc.php?id_grupo=4&id_sector=23" className="searcherCategoriesDropdownSublist__anchor app-searcher-category-item-tracking app-filter-searcher-item" data-fields="{&quot;id_grupo&quot;:4,&quot;id_sector&quot;:&quot;23&quot;}" data-placeholder-name="Soins beauté" tabIndex={0} data-keycategory={23}>
                  Soins beauté</a>
              </li>
              <li className="searcherCategoriesDropdownSublist__item ">
                <a href="https://www.mariages.net/busc.php?id_grupo=4&id_sector=24" className="searcherCategoriesDropdownSublist__anchor app-searcher-category-item-tracking app-filter-searcher-item" data-fields="{&quot;id_grupo&quot;:4,&quot;id_sector&quot;:&quot;24&quot;}" data-placeholder-name="Accessoires marié" tabIndex={0} data-keycategory={24}>
                  Accessoires marié</a>
              </li>
            </ul>
          </li>
        </ul></div>
    </div>
    <div className="searcher__location">
      <span className="searcher__locationFixedText">à</span>
      <input className="searcher__input app-searcher-location-input app-searcher-location-input-tracking" type="text" data-last-value data-placeholder-default="(Ex: Paris)" placeholder="(Ex: Paris)" data-placeholder-focused="Où ?" aria-label="Où ?"  name="txtLocSearch" autoComplete="off" />
      <span data-href="https://www.mariages.net/busc.php?isClearGeo=1" className="searcher__locationReset app-searcher-reset-location">
        <i className="svgIcon svgIcon__close searcher__locationResetIcon"><svg viewBox="0 0 26 26"><path d="M12.983 10.862L23.405.439l2.122 2.122-10.423 10.422 10.423 10.422-2.122 2.122-10.422-10.423L2.561 25.527.439 23.405l10.423-10.422L.439 2.561 2.561.439l10.422 10.423z" fillRule="nonzero" /></svg></i>          </span>
      <div className="searcher__placeholder app-searcher-location-placeholder">
        <div className="searcherLocationsTabs">
          <div className="searcherLocationsTabs__item app-searcher-location-item-tracking app-searcher-location-tab-modal active selectedTab" data-tab="province" role="tab" aria-controls="app-searcher-location-tab-modal-content-province" aria-selected="true" id="app-searcher-location-tab-modal-province" tabIndex={0}>
            Région
          </div>
          <div className="searcherLocationsTabs__item app-searcher-location-item-tracking app-searcher-location-tab-modal" data-tab="international" role="tab" aria-controls="app-searcher-location-tab-modal-content-international" aria-selected="false" id="app-searcher-location-tab-modal-international" tabIndex={0}>
            International
          </div>
        </div>
        <div className="searcherLocationsDropdownList app-searcher-location-tab-modal-content active" data-tab="province" role="tabpanel" aria-labeledby="app-searcher-location-tab-modal-province" id="app-searcher-location-tab-modal-content-province">
          <ul className="searcherLocationsDropdownList__content">
            <li className="searcherLocationsDropdownList__item searcherLocationsDropdownList__item--adm1">
              <a href="https://www.mariages.net/busc.php?id_region=21" className="searcherLocationsDropdownList__itemAnchor app-searcher-location-item app-searcher-location-item-tracking app-filter-searcher-item" data-fields="{&quot;id_region&quot;:&quot;21&quot;}" data-info="{&quot;type&quot;:&quot;region_adm1&quot;,&quot;id&quot;:&quot;21&quot;}" data-placeholder-name="Alsace" tabIndex={0}>Alsace</a>
              <ul className="searcherLocationsDropdownSublist">
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=21&id_provincia=480" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;21&quot;,&quot;id_provincia&quot;:&quot;480&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;480&quot;}" data-placeholder-name="Bas Rhin" tabIndex={0}>Bas Rhin</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=21&id_provincia=481" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;21&quot;,&quot;id_provincia&quot;:&quot;481&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;481&quot;}" data-placeholder-name="Haut Rhin" tabIndex={0}>Haut Rhin</a>
                </li>
              </ul>
            </li>
            <li className="searcherLocationsDropdownList__item searcherLocationsDropdownList__item--adm1">
              <a href="https://www.mariages.net/busc.php?id_region=22" className="searcherLocationsDropdownList__itemAnchor app-searcher-location-item app-searcher-location-item-tracking app-filter-searcher-item" data-fields="{&quot;id_region&quot;:&quot;22&quot;}" data-info="{&quot;type&quot;:&quot;region_adm1&quot;,&quot;id&quot;:&quot;22&quot;}" data-placeholder-name="Aquitaine" tabIndex={0}>Aquitaine</a>
              <ul className="searcherLocationsDropdownSublist">
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=22&id_provincia=431" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;22&quot;,&quot;id_provincia&quot;:&quot;431&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;431&quot;}" data-placeholder-name="Dordogne" tabIndex={0}>Dordogne</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=22&id_provincia=445" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;22&quot;,&quot;id_provincia&quot;:&quot;445&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;445&quot;}" data-placeholder-name="Gironde" tabIndex={0}>Gironde</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=22&id_provincia=452" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;22&quot;,&quot;id_provincia&quot;:&quot;452&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;452&quot;}" data-placeholder-name="Landes" tabIndex={0}>Landes</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=22&id_provincia=460" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;22&quot;,&quot;id_provincia&quot;:&quot;460&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;460&quot;}" data-placeholder-name="Lot-et-Garonne" tabIndex={0}>Lot-et-Garonne</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=22&id_provincia=477" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;22&quot;,&quot;id_provincia&quot;:&quot;477&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;477&quot;}" data-placeholder-name="Pyrénées-Atlantiques" tabIndex={0}>Pyrénées-Atlantiques</a>
                </li>
              </ul>
            </li>
            <li className="searcherLocationsDropdownList__item searcherLocationsDropdownList__item--adm1">
              <a href="https://www.mariages.net/busc.php?id_region=23" className="searcherLocationsDropdownList__itemAnchor app-searcher-location-item app-searcher-location-item-tracking app-filter-searcher-item" data-fields="{&quot;id_region&quot;:&quot;23&quot;}" data-info="{&quot;type&quot;:&quot;region_adm1&quot;,&quot;id&quot;:&quot;23&quot;}" data-placeholder-name="Auvergne" tabIndex={0}>Auvergne</a>
              <ul className="searcherLocationsDropdownSublist">
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=23&id_provincia=414" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;23&quot;,&quot;id_provincia&quot;:&quot;414&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;414&quot;}" data-placeholder-name="Allier" tabIndex={0}>Allier</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=23&id_provincia=426" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;23&quot;,&quot;id_provincia&quot;:&quot;426&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;426&quot;}" data-placeholder-name="Cantal" tabIndex={0}>Cantal</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=23&id_provincia=456" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;23&quot;,&quot;id_provincia&quot;:&quot;456&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;456&quot;}" data-placeholder-name="Haute-Loire" tabIndex={0}>Haute-Loire</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=23&id_provincia=476" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;23&quot;,&quot;id_provincia&quot;:&quot;476&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;476&quot;}" data-placeholder-name="Puy-de-Dôme" tabIndex={0}>Puy-de-Dôme</a>
                </li>
              </ul>
            </li>
            <li className="searcherLocationsDropdownList__item searcherLocationsDropdownList__item--adm1">
              <a href="https://www.mariages.net/busc.php?id_region=24" className="searcherLocationsDropdownList__itemAnchor app-searcher-location-item app-searcher-location-item-tracking app-filter-searcher-item" data-fields="{&quot;id_region&quot;:&quot;24&quot;}" data-info="{&quot;type&quot;:&quot;region_adm1&quot;,&quot;id&quot;:&quot;24&quot;}" data-placeholder-name="Basse - Normandie" tabIndex={0}>Basse - Normandie</a>
              <ul className="searcherLocationsDropdownSublist">
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=24&id_provincia=425" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;24&quot;,&quot;id_provincia&quot;:&quot;425&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;425&quot;}" data-placeholder-name="Calvados" tabIndex={0}>Calvados</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=24&id_provincia=463" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;24&quot;,&quot;id_provincia&quot;:&quot;463&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;463&quot;}" data-placeholder-name="Manche" tabIndex={0}>Manche</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=24&id_provincia=474" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;24&quot;,&quot;id_provincia&quot;:&quot;474&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;474&quot;}" data-placeholder-name="Orne" tabIndex={0}>Orne</a>
                </li>
              </ul>
            </li>
            <li className="searcherLocationsDropdownList__item searcherLocationsDropdownList__item--adm1">
              <a href="https://www.mariages.net/busc.php?id_region=223" className="searcherLocationsDropdownList__itemAnchor app-searcher-location-item app-searcher-location-item-tracking app-filter-searcher-item" data-fields="{&quot;id_region&quot;:&quot;223&quot;}" data-info="{&quot;type&quot;:&quot;region_adm1&quot;,&quot;id&quot;:&quot;223&quot;}" data-placeholder-name="Belgique" tabIndex={0}>Belgique</a>
              <ul className="searcherLocationsDropdownSublist">
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=223&id_provincia=8859" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;223&quot;,&quot;id_provincia&quot;:&quot;8859&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;8859&quot;}" data-placeholder-name="Brabant flamand" tabIndex={0}>Brabant flamand</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=223&id_provincia=8857" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;223&quot;,&quot;id_provincia&quot;:&quot;8857&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;8857&quot;}" data-placeholder-name="Brabant wallon" tabIndex={0}>Brabant wallon</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=223&id_provincia=8874" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;223&quot;,&quot;id_provincia&quot;:&quot;8874&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;8874&quot;}" data-placeholder-name="Bruxelles - Capitale" tabIndex={0}>Bruxelles - Capitale</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=223&id_provincia=8849" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;223&quot;,&quot;id_provincia&quot;:&quot;8849&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;8849&quot;}" data-placeholder-name="Hainaut" tabIndex={0}>Hainaut</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=223&id_provincia=8855" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;223&quot;,&quot;id_provincia&quot;:&quot;8855&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;8855&quot;}" data-placeholder-name="Liège" tabIndex={0}>Liège</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=223&id_provincia=8853" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;223&quot;,&quot;id_provincia&quot;:&quot;8853&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;8853&quot;}" data-placeholder-name="Luxembourg" tabIndex={0}>Luxembourg</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=223&id_provincia=8851" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;223&quot;,&quot;id_provincia&quot;:&quot;8851&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;8851&quot;}" data-placeholder-name="Namur" tabIndex={0}>Namur</a>
                </li>
              </ul>
            </li>
            <li className="searcherLocationsDropdownList__item searcherLocationsDropdownList__item--adm1">
              <a href="https://www.mariages.net/busc.php?id_region=25" className="searcherLocationsDropdownList__itemAnchor app-searcher-location-item app-searcher-location-item-tracking app-filter-searcher-item" data-fields="{&quot;id_region&quot;:&quot;25&quot;}" data-info="{&quot;type&quot;:&quot;region_adm1&quot;,&quot;id&quot;:&quot;25&quot;}" data-placeholder-name="Bourgogne" tabIndex={0}>Bourgogne</a>
              <ul className="searcherLocationsDropdownSublist">
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=25&id_provincia=433" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;25&quot;,&quot;id_provincia&quot;:&quot;433&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;433&quot;}" data-placeholder-name="Côte d'Or" tabIndex={0}>Côte d'Or</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=25&id_provincia=471" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;25&quot;,&quot;id_provincia&quot;:&quot;471&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;471&quot;}" data-placeholder-name="Nièvre" tabIndex={0}>Nièvre</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=25&id_provincia=434" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;25&quot;,&quot;id_provincia&quot;:&quot;434&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;434&quot;}" data-placeholder-name="Saône et Loire" tabIndex={0}>Saône et Loire</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=25&id_provincia=499" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;25&quot;,&quot;id_provincia&quot;:&quot;499&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;499&quot;}" data-placeholder-name="Yonne" tabIndex={0}>Yonne</a>
                </li>
              </ul>
            </li>
            <li className="searcherLocationsDropdownList__item searcherLocationsDropdownList__item--adm1">
              <a href="https://www.mariages.net/busc.php?id_region=26" className="searcherLocationsDropdownList__itemAnchor app-searcher-location-item app-searcher-location-item-tracking app-filter-searcher-item" data-fields="{&quot;id_region&quot;:&quot;26&quot;}" data-info="{&quot;type&quot;:&quot;region_adm1&quot;,&quot;id&quot;:&quot;26&quot;}" data-placeholder-name="Bretagne" tabIndex={0}>Bretagne</a>
              <ul className="searcherLocationsDropdownSublist">
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=26&id_provincia=435" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;26&quot;,&quot;id_provincia&quot;:&quot;435&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;435&quot;}" data-placeholder-name="Côtes d'Armor" tabIndex={0}>Côtes d'Armor</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=26&id_provincia=441" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;26&quot;,&quot;id_provincia&quot;:&quot;441&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;441&quot;}" data-placeholder-name="Finistère" tabIndex={0}>Finistère</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=26&id_provincia=447" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;26&quot;,&quot;id_provincia&quot;:&quot;447&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;447&quot;}" data-placeholder-name="Ille et Vilaine" tabIndex={0}>Ille et Vilaine</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=26&id_provincia=469" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;26&quot;,&quot;id_provincia&quot;:&quot;469&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;469&quot;}" data-placeholder-name="Morbihan" tabIndex={0}>Morbihan</a>
                </li>
              </ul>
            </li>
            <li className="searcherLocationsDropdownList__item searcherLocationsDropdownList__item--adm1">
              <a href="https://www.mariages.net/busc.php?id_region=27" className="searcherLocationsDropdownList__itemAnchor app-searcher-location-item app-searcher-location-item-tracking app-filter-searcher-item" data-fields="{&quot;id_region&quot;:&quot;27&quot;}" data-info="{&quot;type&quot;:&quot;region_adm1&quot;,&quot;id&quot;:&quot;27&quot;}" data-placeholder-name="Centre" tabIndex={0}>Centre</a>
              <ul className="searcherLocationsDropdownSublist">
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=27&id_provincia=429" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;27&quot;,&quot;id_provincia&quot;:&quot;429&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;429&quot;}" data-placeholder-name="Cher" tabIndex={0}>Cher</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=27&id_provincia=440" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;27&quot;,&quot;id_provincia&quot;:&quot;440&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;440&quot;}" data-placeholder-name="Eure-et-Loir" tabIndex={0}>Eure-et-Loir</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=27&id_provincia=448" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;27&quot;,&quot;id_provincia&quot;:&quot;448&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;448&quot;}" data-placeholder-name="Indre" tabIndex={0}>Indre</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=27&id_provincia=449" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;27&quot;,&quot;id_provincia&quot;:&quot;449&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;449&quot;}" data-placeholder-name="Indre-et-Loire" tabIndex={0}>Indre-et-Loire</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=27&id_provincia=453" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;27&quot;,&quot;id_provincia&quot;:&quot;453&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;453&quot;}" data-placeholder-name="Loir-et-Cher" tabIndex={0}>Loir-et-Cher</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=27&id_provincia=458" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;27&quot;,&quot;id_provincia&quot;:&quot;458&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;458&quot;}" data-placeholder-name="Loiret" tabIndex={0}>Loiret</a>
                </li>
              </ul>
            </li>
            <li className="searcherLocationsDropdownList__item searcherLocationsDropdownList__item--adm1">
              <a href="https://www.mariages.net/busc.php?id_region=28" className="searcherLocationsDropdownList__itemAnchor app-searcher-location-item app-searcher-location-item-tracking app-filter-searcher-item" data-fields="{&quot;id_region&quot;:&quot;28&quot;}" data-info="{&quot;type&quot;:&quot;region_adm1&quot;,&quot;id&quot;:&quot;28&quot;}" data-placeholder-name="Champagne - Ardenne" tabIndex={0}>Champagne - Ardenne</a>
              <ul className="searcherLocationsDropdownSublist">
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=28&id_provincia=419" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;28&quot;,&quot;id_provincia&quot;:&quot;419&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;419&quot;}" data-placeholder-name="Ardennes" tabIndex={0}>Ardennes</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=28&id_provincia=421" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;28&quot;,&quot;id_provincia&quot;:&quot;421&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;421&quot;}" data-placeholder-name="Aube" tabIndex={0}>Aube</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=28&id_provincia=465" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;28&quot;,&quot;id_provincia&quot;:&quot;465&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;465&quot;}" data-placeholder-name="Haute-Marne" tabIndex={0}>Haute-Marne</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=28&id_provincia=464" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;28&quot;,&quot;id_provincia&quot;:&quot;464&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;464&quot;}" data-placeholder-name="Marne" tabIndex={0}>Marne</a>
                </li>
              </ul>
            </li>
            <li className="searcherLocationsDropdownList__item ">
              <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=29&id_provincia=432" className="searcherLocationsDropdownList__itemAnchor app-searcher-location-item app-searcher-location-item-tracking app-filter-searcher-item" data-fields="{&quot;id_region&quot;:&quot;29&quot;,&quot;id_provincia&quot;:&quot;432&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;432&quot;}" data-placeholder-name="Corse" tabIndex={0}>Corse</a>
            </li>
            <li className="searcherLocationsDropdownList__item searcherLocationsDropdownList__item--adm1">
              <a href="https://www.mariages.net/busc.php?id_region=30" className="searcherLocationsDropdownList__itemAnchor app-searcher-location-item app-searcher-location-item-tracking app-filter-searcher-item" data-fields="{&quot;id_region&quot;:&quot;30&quot;}" data-info="{&quot;type&quot;:&quot;region_adm1&quot;,&quot;id&quot;:&quot;30&quot;}" data-placeholder-name="Franche - Comté" tabIndex={0}>Franche - Comté</a>
              <ul className="searcherLocationsDropdownSublist">
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=30&id_provincia=437" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;30&quot;,&quot;id_provincia&quot;:&quot;437&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;437&quot;}" data-placeholder-name="Doubs" tabIndex={0}>Doubs</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=30&id_provincia=482" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;30&quot;,&quot;id_provincia&quot;:&quot;482&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;482&quot;}" data-placeholder-name="Haute-Saône" tabIndex={0}>Haute-Saône</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=30&id_provincia=451" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;30&quot;,&quot;id_provincia&quot;:&quot;451&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;451&quot;}" data-placeholder-name="Jura" tabIndex={0}>Jura</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=30&id_provincia=500" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;30&quot;,&quot;id_provincia&quot;:&quot;500&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;500&quot;}" data-placeholder-name="Territoire de Belfort" tabIndex={0}>Territoire de Belfort</a>
                </li>
              </ul>
            </li>
            <li className="searcherLocationsDropdownList__item ">
              <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=219&id_provincia=8843" className="searcherLocationsDropdownList__itemAnchor app-searcher-location-item app-searcher-location-item-tracking app-filter-searcher-item" data-fields="{&quot;id_region&quot;:&quot;219&quot;,&quot;id_provincia&quot;:&quot;8843&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;8843&quot;}" data-placeholder-name="Guadeloupe" tabIndex={0}>Guadeloupe</a>
            </li>
            <li className="searcherLocationsDropdownList__item ">
              <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=220&id_provincia=8845" className="searcherLocationsDropdownList__itemAnchor app-searcher-location-item app-searcher-location-item-tracking app-filter-searcher-item" data-fields="{&quot;id_region&quot;:&quot;220&quot;,&quot;id_provincia&quot;:&quot;8845&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;8845&quot;}" data-placeholder-name="Guyane" tabIndex={0}>Guyane</a>
            </li>
            <li className="searcherLocationsDropdownList__item searcherLocationsDropdownList__item--adm1">
              <a href="https://www.mariages.net/busc.php?id_region=31" className="searcherLocationsDropdownList__itemAnchor app-searcher-location-item app-searcher-location-item-tracking app-filter-searcher-item" data-fields="{&quot;id_region&quot;:&quot;31&quot;}" data-info="{&quot;type&quot;:&quot;region_adm1&quot;,&quot;id&quot;:&quot;31&quot;}" data-placeholder-name="Haute - Normandie" tabIndex={0}>Haute - Normandie</a>
              <ul className="searcherLocationsDropdownSublist">
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=31&id_provincia=439" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;31&quot;,&quot;id_provincia&quot;:&quot;439&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;439&quot;}" data-placeholder-name="Eure" tabIndex={0}>Eure</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=31&id_provincia=486" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;31&quot;,&quot;id_provincia&quot;:&quot;486&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;486&quot;}" data-placeholder-name="Seine-Maritime" tabIndex={0}>Seine-Maritime</a>
                </li>
              </ul>
            </li>
            <li className="searcherLocationsDropdownList__item searcherLocationsDropdownList__item--adm1">
              <a href="https://www.mariages.net/busc.php?id_region=32" className="searcherLocationsDropdownList__itemAnchor app-searcher-location-item app-searcher-location-item-tracking app-filter-searcher-item" data-fields="{&quot;id_region&quot;:&quot;32&quot;}" data-info="{&quot;type&quot;:&quot;region_adm1&quot;,&quot;id&quot;:&quot;32&quot;}" data-placeholder-name="Île-de-France" tabIndex={0}>Île-de-France</a>
              <ul className="searcherLocationsDropdownSublist">
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=32&id_provincia=501" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;32&quot;,&quot;id_provincia&quot;:&quot;501&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;501&quot;}" data-placeholder-name="Essonne" tabIndex={0}>Essonne</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=32&id_provincia=502" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;32&quot;,&quot;id_provincia&quot;:&quot;502&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;502&quot;}" data-placeholder-name="Hauts-de-Seine" tabIndex={0}>Hauts-de-Seine</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=32&id_provincia=485" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;32&quot;,&quot;id_provincia&quot;:&quot;485&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;485&quot;}" data-placeholder-name="Paris" tabIndex={0}>Paris</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=32&id_provincia=487" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;32&quot;,&quot;id_provincia&quot;:&quot;487&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;487&quot;}" data-placeholder-name="Seine-et-Marne" tabIndex={0}>Seine-et-Marne</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=32&id_provincia=503" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;32&quot;,&quot;id_provincia&quot;:&quot;503&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;503&quot;}" data-placeholder-name="Seine-Saint-Denis" tabIndex={0}>Seine-Saint-Denis</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=32&id_provincia=504" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;32&quot;,&quot;id_provincia&quot;:&quot;504&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;504&quot;}" data-placeholder-name="Val-de-Marne" tabIndex={0}>Val-de-Marne</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=32&id_provincia=505" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;32&quot;,&quot;id_provincia&quot;:&quot;505&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;505&quot;}" data-placeholder-name="Val-d'Oise" tabIndex={0}>Val-d'Oise</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=32&id_provincia=488" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;32&quot;,&quot;id_provincia&quot;:&quot;488&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;488&quot;}" data-placeholder-name="Yvelines" tabIndex={0}>Yvelines</a>
                </li>
              </ul>
            </li>
            <li className="searcherLocationsDropdownList__item ">
              <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=218&id_provincia=8842" className="searcherLocationsDropdownList__itemAnchor app-searcher-location-item app-searcher-location-item-tracking app-filter-searcher-item" data-fields="{&quot;id_region&quot;:&quot;218&quot;,&quot;id_provincia&quot;:&quot;8842&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;8842&quot;}" data-placeholder-name="La Réunion" tabIndex={0}>La Réunion</a>
            </li>
            <li className="searcherLocationsDropdownList__item searcherLocationsDropdownList__item--adm1">
              <a href="https://www.mariages.net/busc.php?id_region=33" className="searcherLocationsDropdownList__itemAnchor app-searcher-location-item app-searcher-location-item-tracking app-filter-searcher-item" data-fields="{&quot;id_region&quot;:&quot;33&quot;}" data-info="{&quot;type&quot;:&quot;region_adm1&quot;,&quot;id&quot;:&quot;33&quot;}" data-placeholder-name="Languedoc - Roussillon" tabIndex={0}>Languedoc - Roussillon</a>
              <ul className="searcherLocationsDropdownSublist">
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=33&id_provincia=422" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;33&quot;,&quot;id_provincia&quot;:&quot;422&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;422&quot;}" data-placeholder-name="Aude" tabIndex={0}>Aude</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=33&id_provincia=442" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;33&quot;,&quot;id_provincia&quot;:&quot;442&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;442&quot;}" data-placeholder-name="Gard" tabIndex={0}>Gard</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=33&id_provincia=446" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;33&quot;,&quot;id_provincia&quot;:&quot;446&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;446&quot;}" data-placeholder-name="Hérault" tabIndex={0}>Hérault</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=33&id_provincia=461" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;33&quot;,&quot;id_provincia&quot;:&quot;461&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;461&quot;}" data-placeholder-name="Lozère" tabIndex={0}>Lozère</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=33&id_provincia=479" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;33&quot;,&quot;id_provincia&quot;:&quot;479&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;479&quot;}" data-placeholder-name="Pyrénées-Orientales" tabIndex={0}>Pyrénées-Orientales</a>
                </li>
              </ul>
            </li>
            <li className="searcherLocationsDropdownList__item searcherLocationsDropdownList__item--adm1">
              <a href="https://www.mariages.net/busc.php?id_region=34" className="searcherLocationsDropdownList__itemAnchor app-searcher-location-item app-searcher-location-item-tracking app-filter-searcher-item" data-fields="{&quot;id_region&quot;:&quot;34&quot;}" data-info="{&quot;type&quot;:&quot;region_adm1&quot;,&quot;id&quot;:&quot;34&quot;}" data-placeholder-name="Limousin" tabIndex={0}>Limousin</a>
              <ul className="searcherLocationsDropdownSublist">
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=34&id_provincia=430" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;34&quot;,&quot;id_provincia&quot;:&quot;430&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;430&quot;}" data-placeholder-name="Corrèze" tabIndex={0}>Corrèze</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=34&id_provincia=436" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;34&quot;,&quot;id_provincia&quot;:&quot;436&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;436&quot;}" data-placeholder-name="Creuse" tabIndex={0}>Creuse</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=34&id_provincia=497" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;34&quot;,&quot;id_provincia&quot;:&quot;497&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;497&quot;}" data-placeholder-name="Haute-Vienne" tabIndex={0}>Haute-Vienne</a>
                </li>
              </ul>
            </li>
            <li className="searcherLocationsDropdownList__item searcherLocationsDropdownList__item--adm1">
              <a href="https://www.mariages.net/busc.php?id_region=35" className="searcherLocationsDropdownList__itemAnchor app-searcher-location-item app-searcher-location-item-tracking app-filter-searcher-item" data-fields="{&quot;id_region&quot;:&quot;35&quot;}" data-info="{&quot;type&quot;:&quot;region_adm1&quot;,&quot;id&quot;:&quot;35&quot;}" data-placeholder-name="Lorraine" tabIndex={0}>Lorraine</a>
              <ul className="searcherLocationsDropdownSublist">
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=35&id_provincia=467" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;35&quot;,&quot;id_provincia&quot;:&quot;467&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;467&quot;}" data-placeholder-name="Meurthe-et-Moselle" tabIndex={0}>Meurthe-et-Moselle</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=35&id_provincia=468" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;35&quot;,&quot;id_provincia&quot;:&quot;468&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;468&quot;}" data-placeholder-name="Meuse" tabIndex={0}>Meuse</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=35&id_provincia=470" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;35&quot;,&quot;id_provincia&quot;:&quot;470&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;470&quot;}" data-placeholder-name="Moselle" tabIndex={0}>Moselle</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=35&id_provincia=498" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;35&quot;,&quot;id_provincia&quot;:&quot;498&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;498&quot;}" data-placeholder-name="Vosges" tabIndex={0}>Vosges</a>
                </li>
              </ul>
            </li>
            <li className="searcherLocationsDropdownList__item ">
              <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=180&id_provincia=8841" className="searcherLocationsDropdownList__itemAnchor app-searcher-location-item app-searcher-location-item-tracking app-filter-searcher-item" data-fields="{&quot;id_region&quot;:&quot;180&quot;,&quot;id_provincia&quot;:&quot;8841&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;8841&quot;}" data-placeholder-name="Martinique" tabIndex={0}>Martinique</a>
            </li>
            <li className="searcherLocationsDropdownList__item searcherLocationsDropdownList__item--adm1">
              <a href="https://www.mariages.net/busc.php?id_region=36" className="searcherLocationsDropdownList__itemAnchor app-searcher-location-item app-searcher-location-item-tracking app-filter-searcher-item" data-fields="{&quot;id_region&quot;:&quot;36&quot;}" data-info="{&quot;type&quot;:&quot;region_adm1&quot;,&quot;id&quot;:&quot;36&quot;}" data-placeholder-name="Midi - Pyrénées" tabIndex={0}>Midi - Pyrénées</a>
              <ul className="searcherLocationsDropdownSublist">
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=36&id_provincia=420" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;36&quot;,&quot;id_provincia&quot;:&quot;420&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;420&quot;}" data-placeholder-name="Ariège" tabIndex={0}>Ariège</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=36&id_provincia=423" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;36&quot;,&quot;id_provincia&quot;:&quot;423&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;423&quot;}" data-placeholder-name="Aveyron" tabIndex={0}>Aveyron</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=36&id_provincia=444" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;36&quot;,&quot;id_provincia&quot;:&quot;444&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;444&quot;}" data-placeholder-name="Gers" tabIndex={0}>Gers</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=36&id_provincia=443" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;36&quot;,&quot;id_provincia&quot;:&quot;443&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;443&quot;}" data-placeholder-name="Haute-Garonne" tabIndex={0}>Haute-Garonne</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=36&id_provincia=478" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;36&quot;,&quot;id_provincia&quot;:&quot;478&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;478&quot;}" data-placeholder-name="Hautes-Pyrénées" tabIndex={0}>Hautes-Pyrénées</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=36&id_provincia=459" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;36&quot;,&quot;id_provincia&quot;:&quot;459&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;459&quot;}" data-placeholder-name="Lot" tabIndex={0}>Lot</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=36&id_provincia=491" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;36&quot;,&quot;id_provincia&quot;:&quot;491&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;491&quot;}" data-placeholder-name="Tarn" tabIndex={0}>Tarn</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=36&id_provincia=492" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;36&quot;,&quot;id_provincia&quot;:&quot;492&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;492&quot;}" data-placeholder-name="Tarn-et-Garonne" tabIndex={0}>Tarn-et-Garonne</a>
                </li>
              </ul>
            </li>
            <li className="searcherLocationsDropdownList__item ">
              <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=226&id_provincia=8878" className="searcherLocationsDropdownList__itemAnchor app-searcher-location-item app-searcher-location-item-tracking app-filter-searcher-item" data-fields="{&quot;id_region&quot;:&quot;226&quot;,&quot;id_provincia&quot;:&quot;8878&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;8878&quot;}" data-placeholder-name="Monaco" tabIndex={0}>Monaco</a>
            </li>
            <li className="searcherLocationsDropdownList__item searcherLocationsDropdownList__item--adm1">
              <a href="https://www.mariages.net/busc.php?id_region=37" className="searcherLocationsDropdownList__itemAnchor app-searcher-location-item app-searcher-location-item-tracking app-filter-searcher-item" data-fields="{&quot;id_region&quot;:&quot;37&quot;}" data-info="{&quot;type&quot;:&quot;region_adm1&quot;,&quot;id&quot;:&quot;37&quot;}" data-placeholder-name="Nord-Pas-de-Calais" tabIndex={0}>Nord-Pas-de-Calais</a>
              <ul className="searcherLocationsDropdownSublist">
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=37&id_provincia=472" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;37&quot;,&quot;id_provincia&quot;:&quot;472&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;472&quot;}" data-placeholder-name="Nord" tabIndex={0}>Nord</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=37&id_provincia=475" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;37&quot;,&quot;id_provincia&quot;:&quot;475&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;475&quot;}" data-placeholder-name="Pas-de-Calais" tabIndex={0}>Pas-de-Calais</a>
                </li>
              </ul>
            </li>
            <li className="searcherLocationsDropdownList__item searcherLocationsDropdownList__item--adm1">
              <a href="https://www.mariages.net/busc.php?id_region=38" className="searcherLocationsDropdownList__itemAnchor app-searcher-location-item app-searcher-location-item-tracking app-filter-searcher-item" data-fields="{&quot;id_region&quot;:&quot;38&quot;}" data-info="{&quot;type&quot;:&quot;region_adm1&quot;,&quot;id&quot;:&quot;38&quot;}" data-placeholder-name="Pays de la Loire" tabIndex={0}>Pays de la Loire</a>
              <ul className="searcherLocationsDropdownSublist">
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=38&id_provincia=457" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;38&quot;,&quot;id_provincia&quot;:&quot;457&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;457&quot;}" data-placeholder-name="Loire Atlantique" tabIndex={0}>Loire Atlantique</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=38&id_provincia=462" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;38&quot;,&quot;id_provincia&quot;:&quot;462&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;462&quot;}" data-placeholder-name="Maine et Loire" tabIndex={0}>Maine et Loire</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=38&id_provincia=466" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;38&quot;,&quot;id_provincia&quot;:&quot;466&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;466&quot;}" data-placeholder-name="Mayenne" tabIndex={0}>Mayenne</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=38&id_provincia=483" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;38&quot;,&quot;id_provincia&quot;:&quot;483&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;483&quot;}" data-placeholder-name="Sarthe" tabIndex={0}>Sarthe</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=38&id_provincia=495" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;38&quot;,&quot;id_provincia&quot;:&quot;495&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;495&quot;}" data-placeholder-name="Vendée" tabIndex={0}>Vendée</a>
                </li>
              </ul>
            </li>
            <li className="searcherLocationsDropdownList__item searcherLocationsDropdownList__item--adm1">
              <a href="https://www.mariages.net/busc.php?id_region=39" className="searcherLocationsDropdownList__itemAnchor app-searcher-location-item app-searcher-location-item-tracking app-filter-searcher-item" data-fields="{&quot;id_region&quot;:&quot;39&quot;}" data-info="{&quot;type&quot;:&quot;region_adm1&quot;,&quot;id&quot;:&quot;39&quot;}" data-placeholder-name="Picardie" tabIndex={0}>Picardie</a>
              <ul className="searcherLocationsDropdownSublist">
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=39&id_provincia=413" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;39&quot;,&quot;id_provincia&quot;:&quot;413&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;413&quot;}" data-placeholder-name="Aisne" tabIndex={0}>Aisne</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=39&id_provincia=473" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;39&quot;,&quot;id_provincia&quot;:&quot;473&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;473&quot;}" data-placeholder-name="Oise" tabIndex={0}>Oise</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=39&id_provincia=490" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;39&quot;,&quot;id_provincia&quot;:&quot;490&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;490&quot;}" data-placeholder-name="Somme" tabIndex={0}>Somme</a>
                </li>
              </ul>
            </li>
            <li className="searcherLocationsDropdownList__item searcherLocationsDropdownList__item--adm1">
              <a href="https://www.mariages.net/busc.php?id_region=40" className="searcherLocationsDropdownList__itemAnchor app-searcher-location-item app-searcher-location-item-tracking app-filter-searcher-item" data-fields="{&quot;id_region&quot;:&quot;40&quot;}" data-info="{&quot;type&quot;:&quot;region_adm1&quot;,&quot;id&quot;:&quot;40&quot;}" data-placeholder-name="Poitou - Charentes" tabIndex={0}>Poitou - Charentes</a>
              <ul className="searcherLocationsDropdownSublist">
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=40&id_provincia=427" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;40&quot;,&quot;id_provincia&quot;:&quot;427&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;427&quot;}" data-placeholder-name="Charente" tabIndex={0}>Charente</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=40&id_provincia=428" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;40&quot;,&quot;id_provincia&quot;:&quot;428&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;428&quot;}" data-placeholder-name="Charente Maritime" tabIndex={0}>Charente Maritime</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=40&id_provincia=489" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;40&quot;,&quot;id_provincia&quot;:&quot;489&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;489&quot;}" data-placeholder-name="Deux-Sèvres" tabIndex={0}>Deux-Sèvres</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=40&id_provincia=496" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;40&quot;,&quot;id_provincia&quot;:&quot;496&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;496&quot;}" data-placeholder-name="Vienne" tabIndex={0}>Vienne</a>
                </li>
              </ul>
            </li>
            <li className="searcherLocationsDropdownList__item searcherLocationsDropdownList__item--adm1">
              <a href="https://www.mariages.net/busc.php?id_region=41" className="searcherLocationsDropdownList__itemAnchor app-searcher-location-item app-searcher-location-item-tracking app-filter-searcher-item" data-fields="{&quot;id_region&quot;:&quot;41&quot;}" data-info="{&quot;type&quot;:&quot;region_adm1&quot;,&quot;id&quot;:&quot;41&quot;}" data-placeholder-name="Provence - Alpes - Côte d'Azur" tabIndex={0}>Provence - Alpes - Côte d'Azur</a>
              <ul className="searcherLocationsDropdownSublist">
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=41&id_provincia=415" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;41&quot;,&quot;id_provincia&quot;:&quot;415&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;415&quot;}" data-placeholder-name="Alpes-de-Haute-Provence" tabIndex={0}>Alpes-de-Haute-Provence</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=41&id_provincia=417" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;41&quot;,&quot;id_provincia&quot;:&quot;417&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;417&quot;}" data-placeholder-name="Alpes-Maritimes" tabIndex={0}>Alpes-Maritimes</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=41&id_provincia=424" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;41&quot;,&quot;id_provincia&quot;:&quot;424&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;424&quot;}" data-placeholder-name="Bouches-du-Rhône" tabIndex={0}>Bouches-du-Rhône</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=41&id_provincia=416" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;41&quot;,&quot;id_provincia&quot;:&quot;416&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;416&quot;}" data-placeholder-name="Hautes-Alpes" tabIndex={0}>Hautes-Alpes</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=41&id_provincia=493" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;41&quot;,&quot;id_provincia&quot;:&quot;493&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;493&quot;}" data-placeholder-name="Var" tabIndex={0}>Var</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=41&id_provincia=494" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;41&quot;,&quot;id_provincia&quot;:&quot;494&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;494&quot;}" data-placeholder-name="Vaucluse" tabIndex={0}>Vaucluse</a>
                </li>
              </ul>
            </li>
            <li className="searcherLocationsDropdownList__item searcherLocationsDropdownList__item--adm1">
              <a href="https://www.mariages.net/busc.php?id_region=42" className="searcherLocationsDropdownList__itemAnchor app-searcher-location-item app-searcher-location-item-tracking app-filter-searcher-item" data-fields="{&quot;id_region&quot;:&quot;42&quot;}" data-info="{&quot;type&quot;:&quot;region_adm1&quot;,&quot;id&quot;:&quot;42&quot;}" data-placeholder-name="Rhône - Alpes" tabIndex={0}>Rhône - Alpes</a>
              <ul className="searcherLocationsDropdownSublist">
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=42&id_provincia=411" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;42&quot;,&quot;id_provincia&quot;:&quot;411&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;411&quot;}" data-placeholder-name="Ain" tabIndex={0}>Ain</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=42&id_provincia=418" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;42&quot;,&quot;id_provincia&quot;:&quot;418&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;418&quot;}" data-placeholder-name="Ardèche" tabIndex={0}>Ardèche</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=42&id_provincia=438" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;42&quot;,&quot;id_provincia&quot;:&quot;438&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;438&quot;}" data-placeholder-name="Drôme" tabIndex={0}>Drôme</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=42&id_provincia=412" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;42&quot;,&quot;id_provincia&quot;:&quot;412&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;412&quot;}" data-placeholder-name="Haute-Savoie" tabIndex={0}>Haute-Savoie</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=42&id_provincia=450" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;42&quot;,&quot;id_provincia&quot;:&quot;450&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;450&quot;}" data-placeholder-name="Isère" tabIndex={0}>Isère</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=42&id_provincia=454" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;42&quot;,&quot;id_provincia&quot;:&quot;454&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;454&quot;}" data-placeholder-name="Loire" tabIndex={0}>Loire</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=42&id_provincia=455" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;42&quot;,&quot;id_provincia&quot;:&quot;455&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;455&quot;}" data-placeholder-name="Rhône" tabIndex={0}>Rhône</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=42&id_provincia=484" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;42&quot;,&quot;id_provincia&quot;:&quot;484&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;484&quot;}" data-placeholder-name="Savoie" tabIndex={0}>Savoie</a>
                </li>
              </ul>
            </li>
            <li className="searcherLocationsDropdownList__item searcherLocationsDropdownList__item--adm1">
              <a href="https://www.mariages.net/busc.php?id_region=225" className="searcherLocationsDropdownList__itemAnchor app-searcher-location-item app-searcher-location-item-tracking app-filter-searcher-item" data-fields="{&quot;id_region&quot;:&quot;225&quot;}" data-info="{&quot;type&quot;:&quot;region_adm1&quot;,&quot;id&quot;:&quot;225&quot;}" data-placeholder-name="Suisse" tabIndex={0}>Suisse</a>
              <ul className="searcherLocationsDropdownSublist">
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=225&id_provincia=8871" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;225&quot;,&quot;id_provincia&quot;:&quot;8871&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;8871&quot;}" data-placeholder-name="Berne" tabIndex={0}>Berne</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=225&id_provincia=8873" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;225&quot;,&quot;id_provincia&quot;:&quot;8873&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;8873&quot;}" data-placeholder-name="Canton du Jura" tabIndex={0}>Canton du Jura</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=225&id_provincia=8867" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;225&quot;,&quot;id_provincia&quot;:&quot;8867&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;8867&quot;}" data-placeholder-name="Fribourg" tabIndex={0}>Fribourg</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=225&id_provincia=8861" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;225&quot;,&quot;id_provincia&quot;:&quot;8861&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;8861&quot;}" data-placeholder-name="Genève" tabIndex={0}>Genève</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=225&id_provincia=8869" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;225&quot;,&quot;id_provincia&quot;:&quot;8869&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;8869&quot;}" data-placeholder-name="Neuchâtel" tabIndex={0}>Neuchâtel</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=225&id_provincia=8865" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;225&quot;,&quot;id_provincia&quot;:&quot;8865&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;8865&quot;}" data-placeholder-name="Valais" tabIndex={0}>Valais</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?isSearcherLocation=1&id_region=225&id_provincia=8863" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="{&quot;id_region&quot;:&quot;225&quot;,&quot;id_provincia&quot;:&quot;8863&quot;}" data-info="{&quot;type&quot;:&quot;region&quot;,&quot;id&quot;:&quot;8863&quot;}" data-placeholder-name="Vaud" tabIndex={0}>Vaud</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="searcherLocationsDropdownList app-searcher-location-tab-modal-content" data-tab="international" role="tabpanel" aria-labeledby="app-searcher-location-tab-modal-international" id="app-searcher-location-tab-modal-content-international">
          <ul className="searcherLocationsDropdownList__content">
            <li className="searcherLocationsDropdownList__item ">
              <span className="searcherLocationsDropdownList__itemTitle ">Amérique</span>
              <ul className="searcherLocationsDropdownSublist">
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?destCountry=13" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="[]" data-info="{&quot;type&quot;:&quot;country&quot;,&quot;id&quot;:13}" data-placeholder-name="Brésil" tabIndex={0}>Brésil</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?destCountry=5" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="[]" data-info="{&quot;type&quot;:&quot;country&quot;,&quot;id&quot;:5}" data-placeholder-name="Mexique" tabIndex={0}>Mexique</a>
                </li>
              </ul>
            </li>
            <li className="searcherLocationsDropdownList__item ">
              <span className="searcherLocationsDropdownList__itemTitle ">Europe</span>
              <ul className="searcherLocationsDropdownSublist">
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?destCountry=1" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="[]" data-info="{&quot;type&quot;:&quot;country&quot;,&quot;id&quot;:1}" data-placeholder-name="Espagne" tabIndex={0}>Espagne</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?destCountry=2" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="[]" data-info="{&quot;type&quot;:&quot;country&quot;,&quot;id&quot;:2}" data-placeholder-name="Italie" tabIndex={0}>Italie</a>
                </li>
                <li className="searcherLocationsDropdownSublist__item">
                  <a href="https://www.mariages.net/busc.php?destCountry=6" className="app-filter-searcher-item searcherLocationsDropdownSublist__itemAnchor app-searcher-location-item app-searcher-location-item-tracking" data-fields="[]" data-info="{&quot;type&quot;:&quot;country&quot;,&quot;id&quot;:6}" data-placeholder-name="Portugal " tabIndex={0}>Portugal </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <button type="submit" className="searcher__submit app-searcher-submit-tracking">
      Rechercher      </button>
  </form>
</div>
                    <div className="homeHeading__searcherButton">
                        <div className="app-searcher-category" data-action="https://www.mariages.net/busc.php">
                            <button className="button button--primary button--block app-searcher-category-button app-searcher-category-tracking"><i className="svgIcon svgIcon__search "><svg viewBox="0 0 74 77"><path d="M49.35 48.835l23.262 23.328a2.316 2.316 0 11-3.28 3.27L45.865 51.901a28.534 28.534 0 01-17.13 5.683C12.867 57.584.014 44.7.014 28.8.014 12.896 12.865.015 28.735.015 44.593.015 57.446 12.9 57.446 28.8a28.728 28.728 0 01-8.097 20.035zM52.813 28.8c0-13.345-10.782-24.153-24.079-24.153-13.31 0-24.089 10.805-24.089 24.153 0 13.344 10.782 24.152 24.09 24.152 13.294 0 24.078-10.811 24.078-24.152z" fillRule="nonzero" /></svg></i> Rechercher des prestataires</button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )

}

export default Header;