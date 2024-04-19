export const LibroCrear = () => {
    return (
      <>
      <div className="pt-4 d-flex justify-content-center">
      <form className="row g-3 needs-validation">
          <div className="col-md-6 position-relative">
            <label htmlFor="marc" className="form-label">Titulo</label>
            <input type="text" className="form-control border border-primary" id="marc" name="marc" required />
          </div>
          <div className="col-md-6 position-relative ">
            <label htmlFor="colo01" className="form-label">Edición</label>
            <select className="form-control border border-primary" id="tall03" name="tall03" required >
              <option selected disabled value="">Edición del Libro...</option>
              <option>...</option>
              <option>1ra Edición</option>
              <option>2ra Edició</option>
              <option>3ra Edició</option>
            </select>
          </div>
  
          <div className="col-md-6 position-relative">
            <label htmlFor="preci02" className="form-label">Precio</label>
            <input type="text" className="form-control border border-primary" id="preci02" name="preci02" required />
          </div>
          <div className="col-md-6 position-relative">
            <label htmlFor="tall03" className="form-label">Precio</label>
            <select className="form-control border border-primary" id="tall03" name="tall03" required >
              <option selected disabled value="">Ingrese Precio Del Libro...</option>
              <option>...</option>
              <option>10.000cop</option>
              <option>20.000cop</option>
              <option>50.000cop</option>
              <option>100.000cop</option>
            </select>
          </div>
  
          <div className="col-12 d-flex justify-content-end">
            <button className="btn btn-primary" type="submit">Ingresar Libro </button>
          </div>
        </form>
      </div>
      </>
    );
  };