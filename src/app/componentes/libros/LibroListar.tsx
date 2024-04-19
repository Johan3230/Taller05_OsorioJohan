export const LibroListar = () => {
  return (
    <>
      <div className="pt-3 d-flex justify-content-center">
        <div className="col-md-8 " >
          <table className="table table-bordered border border-primary">
            <thead>
              <tr>
                <th style={{ width: "10%" }}>Codigo</th>
                <th style={{ width: "45%" }}>Titulo</th>
                <th style={{ width: "22.5%" }}>Editorial</th>
                <th style={{ width: "22.5%" }} className="text-center">Tomos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Jojos Phantom blood</td>
                <td>Ivrea</td>
                <td className="text-center">1,2,3</td>
              </tr>
              <tr>
                <td>1.1</td>
                <td>Jojos batlle tendency </td>
                <td>Panini manga</td>
                <td className="text-center">1,2,3,4</td>
              </tr>
              <tr>
                <td>1.2</td>
                <td>Jojos steel ball run</td>
                <td>Ivrea</td>
                <td className="text-center">1,2,3,4,5,6</td>
              </tr>


              <tr>
                <td>2</td>
                <td>Naruto</td>
                <td>Jump Comics</td>
                <td className="text-center">1,2,3,4,5,6,7,8</td>
              </tr>
              <tr>
                <td>2.1</td>
                <td>Naruto Shippuden</td>
                <td>Jump Comics</td>
                <td className="text-center">1,2,3,4,5,6,7,8</td>
              </tr>

              <tr>
                <td>3</td>
                <td>Tokyo Ghoul</td>
                <td>Ivrea</td>
                <td className="text-center">1,2,3,4</td>
              </tr>

              <tr>
                <td>3.1</td>
                <td>Tokyo Ghoul Re:</td>
                <td>Ivrea</td>
                <td className="text-center">1,2,3,4,5,6,7,8,9</td>
              </tr>

              <tr>
                <td>4</td>
                <td>Nana</td>
                <td>Planeta Comic</td>
                <td className="text-center">1,2,3</td>
              </tr>

            </tbody>

          </table>
        </div>
      </div>
    </>
  );
};