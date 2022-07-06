import { FC } from "react"
import { Inhabitant } from "../../types"

type Props = {
  data: Inhabitant[]
}

const TableInhabitants: FC<Props> = ({ data }) => {

    return(
        <>
        { 
            data && data.length > 0
              ? (
                  <table border={false ? 1 : 5}>
                    <thead>
                      <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>thumbnail</th>
                        <th>age</th>
                        <th>weight</th>
                        <th>height</th>
                        <th>hair_color</th>
                        <th>professions</th>
                        <th>friends</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        data.map(elem => {
                            return (
                                <tr key={elem.id}>
                                  <td>{elem.id}</td>
                                  <td>{elem.name}</td>
                                  <td>{elem.thumbnail}</td>
                                  <td>{elem.age}</td>
                                  <td>{elem.weight}</td>
                                  <td>{elem.height}</td>
                                  <td>{elem.hair_color}</td>
                                  <td>{elem.professions}</td>
                                  <td>{elem.friends}</td>
                                </tr>
                            )
                        })
                      }
                    </tbody>
                  </table>
              ) : (
                <div>
                  No hay datos cargados
                </div>
              ) 
            }
        </>

    )

}

export { TableInhabitants }