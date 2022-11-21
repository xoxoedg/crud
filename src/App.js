import {useEffect, useState} from "react";
import {db} from "./firsebase-config"
import {collection, getDocs} from "firebase/firestore"

function App() {
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users")
    useEffect(() => {

        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id}) ))
            }

        getUsers();

    }, [])

  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
