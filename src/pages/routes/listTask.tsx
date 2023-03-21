import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Import the FontAwesomeIcon componen
// import the icons you need
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

//firebase
import firebaseApp from "@/firebase";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";

const db = getFirestore(firebaseApp);

export default function ListTask({Task}) {
  //const { query } = useRouter();
  //const router = useRouter();

  /*const updateInfo = (id) => {
    const edit = doc(db,'Task',id);
  }*/

  /*const deleteInfo = async () => {
    const {task} = query
    await deleteDoc(doc(db, "Task", task));
    router.push('/');
  };*/
  return (
    <div className="container-sm">
      <h1>TaskList with Next.js!</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripción</th>
            <th scope="col">Editar</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {Task.map((tasks) => (
            <tr key={tasks.id}>
              <th scope="row">{tasks.id}</th>
              <td>{tasks.nombre}</td>
              <td>{tasks.descripcion}</td>
              <td>
                <button className="btn btn-dark">
                  <FontAwesomeIcon
                    icon={faEdit}
                    style={{ fontSize: 25, color: "white" }}
                  />
                </button>
              </td>
              <td>
                <button className="btn btn-dark">
                  <FontAwesomeIcon
                    icon={faTrash}
                    style={{ fontSize: 25, color: "white" }}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

//obtener para mostrar los productos en la tabla
export const getServerSideProps = async (context) => {
  const querySnapshot = await getDocs(collection(db, "Task"));
  const docs = [];
  querySnapshot.forEach((doc) => {
    docs.push({...doc.data(), id: doc.id});
  });
  return {
    props: {
      Task: docs,
    },
  };
};
