import mangaka1 from "../../../assets/img/Hirohiko.jpg"
import mangaka2 from "../../../assets/img/Kishi.jpg"
import mangaka3 from "../../../assets/img/Sui Ishida.jpg"
import mangaka4 from "../../../assets/img/Ai.jpg"

export const Acerca = () => {
  return (
    <>
      <div className="pt-3 d-flex justify-content-center">
        <div className="col-md-8">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card">
                <img src={mangaka1}  height={800} className="card-img-top" alt="El Líder" />
                <div className="card-body">
                  <h4 className="card-title fw-bolder">Hirohiko Araki</h4>
                  <p className="card-text" style={{textAlign: "justify"}}>
                  Hirohiko Araki (荒木 飛呂彦 Araki Hirohiko?, Sendai, Prefectura de Miyagi, 7 de junio de 1960), seudónimo de Toshiyuki Araki2​3​ (荒木 利之, Araki Toshiyuki), 
                  es un mangaka japonés, principalmente es conocido por ser el creador de JoJo's Bizarre Adventure, el cual empezó a ser publicado en la revista Shōnen Jump de 
                  Shūeisha en 1986 y aún continúa en la revista Ultra Jump de la misma editorial. Araki recibió el Premio Tezuka en 1979 por su manga Busō Poker.4​ En España, se han publicado algunas de sus obras.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={mangaka2} height={800} className="card-img-top" alt="Arquitecto" />
                <div className="card-body">
                <h4 className="card-title fw-bolder">Masashi Kishimoto</h4>
                  <p className="card-text">
                  Masashi Kishimoto ​ es un mangaka japonés, conocido por ser el autor de la serie Naruto, comenzada en 1999, dibujando únicamente el manga de esta serie. 
                  Es el hermano gemelo mayor de Seishi Kishimoto.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={mangaka3} height={800} className="card-img-top" alt="..." />
                <div className="card-body">
                <h4 className="card-title fw-bolder">Sui Ishida</h4>
                  <p className="card-text">
                  Sui Ishida es un mangaka de origen japonés. Es reconocido por su popular obra Tokyo Ghoul.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={mangaka4}  height={800} className="card-img-top" alt="..." />
                <div className="card-body">
                <h4 className="card-title fw-bolder">Ai Yazawa</h4>
                  <p className="card-text">
                  Nana (ナナ Nana) es una serie de manga shoujo escrita e ilustrada por Ai Yazawa. Fue serializada en la revista Cookie de la editorial Shueisha desde el 
                  15 de mayo de 2000 hasta junio de 2009, cuando fue puesta en hiatus debido a una enfermedad de la autora.
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
