import manga1 from "../../../assets/img/Jojos.jpg"
import manga2 from "../../../assets/img/Naruto.jpg"
import manga3 from "../../../assets/img/Tokyo Ghoul.jpg"
import manga4 from "../../../assets/img/NANA_vol1.jpg"

export const Libreria = () => {
  return (
    <>
      <div className="pt-3 d-flex justify-content-center">
        <div className="col-md-8">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card">
                <img src={manga1} height={800} className="card-img-top" alt="Manga Top 1" />
                <div className="card-body">
                  <h4 className="card-title fw-bolder">Jojos</h4>
                  <p className="card-text" style={{textAlign: "justify"}}>
                  JoJo's Bizarre Adventure (ジョジョの 奇妙な冒険 Jojo no Kimyō na Bōken?, lit. Las extrañas aventuras de Jojo) es una serie de manga japonés escrita 
                  e ilustrada por Hirohiko Araki. Su publicación comenzó en la revista Weekly Shōnen Jump en 1987 y continúa en la revista Ultra jump desde 2005.
                  Con 135 volúmenes compilatorios es, hasta el momento, el segundo manga más largo de la editorial Shūeisha —siendo solamente superado por los doscientos
                  volúmenes de Kochikame—. Contando ya con más de cien millones de copias impresas, el manga es distribuido por Viz Media en los Estados Unidos, 
                  por Ivrea en Argentina y España, por Panini Manga en México, por Delcourt/Tonkam en Francia y por Star Comics en Italia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={manga2}  height={800} className="card-img-top" alt="Uno de los Tres Grandes" />
                <div className="card-body">
                <h4 className="card-title fw-bolder">Naruto</h4>
                  <p className="card-text">
                  Naruto (ナルト? romanizada como NARUTO) es una serie de manga escrita e ilustrada por Masashi Kishimoto, posteriormente adaptada a una serie de anime. 
                  Narra la historia de un ninja adolescente llamado Naruto Uzumaki, cuyos padres murieron en el ataque del Zorro Demonio de Nueve Colas llamado Kurama y 
                  quien aspira a convertirse en Hokage (líder de su aldea), con el propósito de ser reconocido como alguien importante dentro de la aldea y entre sus compañeros.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={manga3} height={800} className="card-img-top" alt="Muy Buen Seinen" />
                <div className="card-body">
                <h4 className="card-title fw-bolder">Tokyo Ghoul</h4>
                  <p className="card-text">
                  Tokyo Ghoul (東京喰種:トーキョーグール Tōkyō Gūru?) es una serie de manga escrita e ilustrada por Sui Ishida, 
                  serializada en la revista seinen Young Jump, con entrega semanal desde septiembre de 2011. Compilado en 14 volúmenes 
                  (tankōbon) a partir de junio de 2014. Una adaptación al anime del Studio Pierrot comenzó a emitirse en Tokyo MX el 5 de julio de 2014. 
                  Funimation ha licenciado la serie de anime para el streaming de vídeo y el hogar con distribución en América, mientras en España es Selecta 
                  Visión la encargada de dicha tarea.4​
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={manga4} height={800   } className="card-img-top" alt="Bueno para epoca de pubertad" />
                <div className="card-body">
                <h4 className="card-title fw-bolder">Nana</h4>
                  <p className="card-text">
                  Nana (ナナ Nana?) es una serie de manga shoujo escrita e ilustrada por Ai Yazawa. Fue serializada en la revista Cookie de la editorial Shueisha desde el 15 
                  de mayo de 2000 hasta junio de 2009, cuando fue puesta en hiatus debido a una enfermedad de la autora. Finalmente, Yazawa se recuperó, pero el manga siguió 
                  en pausa indefinida. Los doce primeros volúmenes han vendido más de 22 millones de copias. La historia acompaña a sus dos protagonistas durante el inicio de 
                  sus nuevas vidas tras independizarse en Tokio, partiendo por la coincidiencia de que ambas comparten el mismo nombre, Nana, y siguiendo con las confusiones y 
                  caprichos que este hecho provoca. Sin embargo, pese a coincidir en su nombre, edad y viaje y convivencia en Tokio, lo que las separa ampliamente es la radical 
                  diferencia de sus personalidades. La primera, Nana Komatsu, tiene la inocencia de una niña y nunca puede mantener el control sobre la realidad que le espera, y 
                  Nana Ōsaki, es una cantante de punk que posee una fuerte personalidad. El conocer y convivir con Ōsaki y sus amigos y compañeros de la banda de punk "Black Stones", 
                  así como las charlas con su amiga de instituto y confidente Junko Saotome, tendrán una enorme influencia en Komatsu y harán que descubra cosas desconocidas para ella, 
                  madure y se adentre en su vida adulta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
