export const LibroAdmin = () => {
  return (
    <>
      <div className="pt-3 d-flex justify-content-center">
        <div className="col-md-8 " >
          <table className="table table-bordered border border-primary">
            <thead>
              <tr>
                <th style={{ width: "10%" }}>Codigo</th>
                <th style={{ width: "50%" }}>Titulo</th>
                <th style={{ width: "20%" }}>Editorialr</th>
                <th style={{ width: "20%" }} className="text-center">Tomos</th>
                <th style={{ width: "20%" }} className="text-center">Opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Jojos Phantom blood</td>
                <td>Ivrea</td>
                <td className="text-center">1,2,3</td>
                <td><i className="fa-regular fa-pen-to-square" style={{ color: "blue" }}></i>
                  &nbsp;
                  <i className="fa-solid fa-ban" style={{ color: "red" }}></i>
                </td>
              </tr>
              <tr>
                <td>1.1</td>
                <td>Jojos batlle tendency </td>
                <td>Panini manga</td>
                <td className="text-center">1,2,3,4</td>
                <td><i className="fa-regular fa-pen-to-square" style={{ color: "blue" }}></i>
                  &nbsp;
                  <i className="fa-solid fa-ban" style={{ color: "red" }}></i>
                </td>
              </tr>
              <tr>
                <td>1.2</td>
                <td>Jojos steel ball run</td>
                <td>Ivrea</td>
                <td className="text-center">1,2,3,4,5,6</td>
                <td><i className="fa-regular fa-pen-to-square" style={{ color: "blue" }}></i>
                  &nbsp;
                  <i className="fa-solid fa-ban" style={{ color: "red" }}></i>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>Naruto</td>
                <td>Jump Comics</td>
                <td className="text-center">1,2,3,4,5,6,7,8</td>
                <td><i className="fa-regular fa-pen-to-square" style={{ color: "blue" }}></i>
                  &nbsp;
                  <i className="fa-solid fa-ban" style={{ color: "red" }}></i>
                </td>
              </tr>
              <tr>
                <td>2.1</td>
                <td>Naruto Shippuden</td>
                <td>Jump Comics</td>
                <td className="text-center">1,2,3,4,5,6,7,8</td>
                <td><i className="fa-regular fa-pen-to-square" style={{ color: "blue" }}></i>
                  &nbsp;
                  <i className="fa-solid fa-ban" style={{ color: "red" }}></i>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td>Tokyo Ghoul</td>
                <td>Ivrea</td>
                <td className="text-center">1,2,3,4</td>
                <td><i className="fa-regular fa-pen-to-square" style={{ color: "blue" }}></i>
                  &nbsp;
                  <i className="fa-solid fa-ban" style={{ color: "red" }}></i>
                </td>
              </tr>
              <tr>
                <td>3.1</td>
                <td>Tokyo Ghoul Re:</td>
                <td>Ivrea</td>
                <td className="text-center">1,2,3,4,5,6,7,8,9</td>
                <td><i className="fa-regular fa-pen-to-square" style={{ color: "blue" }}></i>
                  &nbsp;
                  <i className="fa-solid fa-ban" style={{ color: "red" }}></i>
                </td>
              </tr>

              <tr>
                <td>4</td>
                <td>Nana</td>
                <td>Planeta Comic</td>
                <td className="text-center">1,2,3</td>
                <td><i className="fa-regular fa-pen-to-square" style={{ color: "blue" }}></i>
                  &nbsp;
                  <i className="fa-solid fa-ban" style={{ color: "red" }}></i>
                </td>
              </tr>

          </tbody>

        </table>
      </div>
    </div >
    </>
  );
};