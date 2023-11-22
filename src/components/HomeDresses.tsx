export const HomeDresses = () => {
  return (
    <>
      <section className="homeDresses">
        <div className="homeDresses__content">
          <span className="homeDresses__preTitle">Vous n'avez pas encore trouvé votre robe idéale ?</span>
          <h2 className="homeDresses__title">Catalogue de robes</h2>
          <p className="homeDresses__description">Découvrez les dernières tendances des meilleurs créateurs de robes de
            mariée, costumes de marié, accessoires et bien plus encore. Feuilletez notre catalogue en ligne !</p>
          <ul className="homeDresses__listCategories">
            <li>
              <a href="https://www.mariages.net/robes-mariee">Robes de Mariée</a>
            </li>
            <li>
              <a href="https://www.mariages.net/costumes-marie">Costumes de Marié</a>
            </li>
            <li>
              <a href="https://www.mariages.net/robes-soiree">Robes de Soirée</a>
            </li>
            <li>
              <a href="https://www.mariages.net/bijoux">Bijoux</a>
            </li>
            <li>
              <a href="https://www.mariages.net/chaussures">Chaussures</a>
            </li>
            <li>
              <a href="https://www.mariages.net/lingerie">Lingerie</a>
            </li>
            <li>
              <a href="https://www.mariages.net/accessoires">Accessoires</a>
            </li>
          </ul>
          <div className="homeDresses__button">
            <a href="https://www.mariages.net/robes-mariee" className="button button--tertiary">
              Voir catalogue
              <i className="svgIcon svgIcon__arrowShortRight ">
                <svg viewBox="0 0 12 12">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.17.183a.74.74 0 011.044.07l4.603 5.26a.74.74 0 010 .974l-4.603 5.26a.74.74 0 11-1.113-.974l3.563-4.072H.74a.74.74 0 010-1.48h8.856L6.101 1.228A.74.74 0 016.17.183z" />
                </svg>
              </i>
            </a>
          </div>
        </div>
        <div className="homeDresses__contentSlider app-dresses-slider">
          <div className="scrollSnap app-scroll-snap-wrapper homeDressesDesigners scrollSnap--fullBleed scrollSnap--floatArrows" role="region" aria-label="Catalogue de robes Carrousel">
            <button type="button" aria-label="Précédent" className="scrollSnap__arrow scrollSnap__arrow--prev app-scroll-snap-prev hidden disabled">
              <i className="svgIcon svgIcon__arrowLeftThick ">
                <svg viewBox="0 0 20 36">
                  <path d="M18.769.653a2.004 2.004 0 00-2.961 0L1.245 16.17c-.09.07-.175.147-.256.233A2.302 2.302 0 00.376 18c-.005.578.2 1.157.613 1.598.08.086.167.164.256.233l14.563 15.515a2.004 2.004 0 002.96 0c.744-.791.812-2.031.204-2.904l-.203-.25L5.449 18 18.77 3.809l.203-.25c.608-.874.54-2.113-.203-2.906z" />
                </svg>
              </i>
            </button>
            <div className="scrollSnap__container app-scroll-snap-container homeDressesDesigners__slider" dir="ltr">
              <div className="scrollSnap__item app-scroll-snap-item homeDressesDesigners__slide" data-id={0} data-visualized-slide="false">
                <div className="homeDressesTile app-dresses-tile">
                  <img data-src="https://cdn0.mariages.net/cat/robes-mariee/adore-by-justin-alexander/lucille--mfvr885904.jpg" className="lazyload homeDressesTile__image" width={290} height={406} />
                  <div className="homeDressesTile__footer">
                    <a className="homeDressesTile__link app-dresses-tile-link" href="https://www.mariages.net/robes-mariee/adore-by-justin-alexander--d1049">
                      Adore by Justin Alexander </a>
                  </div>
                </div>
              </div>
              <div className="scrollSnap__item app-scroll-snap-item homeDressesDesigners__slide" data-id={1} data-visualized-slide="false">
                <div className="homeDressesTile app-dresses-tile">
                  <img data-src="https://cdn0.mariages.net/cat/robes-mariee/justin-alexander-signature/bobbie--mfvr885912.jpg" className="lazyload homeDressesTile__image" width={290} height={406} />
                  <div className="homeDressesTile__footer">
                    <a className="homeDressesTile__link app-dresses-tile-link" href="https://www.mariages.net/robes-mariee/justin-alexander-signature--d400">
                      Justin Alexander Signature </a>
                  </div>
                </div>
              </div>
              <div className="scrollSnap__item app-scroll-snap-item homeDressesDesigners__slide" data-id={2} data-visualized-slide="false">
                <div className="homeDressesTile app-dresses-tile">
                  <img data-src="https://cdn0.mariages.net/cat/robes-mariee/lillian-west/66256--mfvr885922.jpg" className="lazyload homeDressesTile__image" width={290} height={406} />
                  <div className="homeDressesTile__footer">
                    <a className="homeDressesTile__link app-dresses-tile-link" href="https://www.mariages.net/robes-mariee/lillian-west--d402">
                      Lillian West </a>
                  </div>
                </div>
              </div>
              <div className="scrollSnap__item app-scroll-snap-item homeDressesDesigners__slide" data-id={3} data-visualized-slide="false">
                <div className="homeDressesTile app-dresses-tile">
                  <img data-src="https://cdn0.mariages.net/cat/robes-mariee/justin-alexander/freesia--mfvr893000.jpg" className="lazyload homeDressesTile__image" width={290} height={406} />
                  <div className="homeDressesTile__footer">
                    <a className="homeDressesTile__link app-dresses-tile-link" href="https://www.mariages.net/robes-mariee/justin-alexander--d324">
                      Justin Alexander </a>
                  </div>
                </div>
              </div>
              <div className="scrollSnap__item app-scroll-snap-item homeDressesDesigners__slide" data-id={4} data-visualized-slide="false">
                <div className="homeDressesTile app-dresses-tile">
                  <img data-src="https://cdn0.mariages.net/cat/robes-mariee/eglantine-creations/francesca-c24--mfvr1153950.jpg" className="lazyload homeDressesTile__image" width={290} height={406} />
                  <div className="homeDressesTile__footer">
                    <a className="homeDressesTile__link app-dresses-tile-link" href="https://www.mariages.net/robes-mariee/eglantine-creations--d234">
                      Eglantine Créations </a>
                  </div>
                </div>
              </div>
            </div>
            <button type="button" aria-label="Suivant" className="scrollSnap__arrow scrollSnap__arrow--next app-scroll-snap-next hidden">
              <i className="svgIcon svgIcon__arrowRightThick ">
                <svg viewBox="0 0 20 36">
                  <path d="M.984.653a1.976 1.976 0 012.936 0L18.36 16.17c.089.07.174.147.254.233.41.441.613 1.02.608 1.598a2.313 2.313 0 01-.608 1.598c-.08.086-.165.164-.254.233L3.92 35.346a1.976 1.976 0 01-2.936 0c-.737-.791-.804-2.031-.201-2.904l.2-.25L14.192 18 .984 3.809l-.201-.25C.18 2.684.247 1.445.983.652z" />
                </svg>
              </i>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeDresses