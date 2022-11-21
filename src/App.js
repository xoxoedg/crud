import {useEffect, useState} from "react";
import {db} from "./firsebase-config"
import {addDoc, collection, doc, getDocs, updateDoc} from "firebase/firestore"

function App() {
    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState(0);
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");

    const createUser = async () => {
        await addDoc(usersCollectionRef, {name: newName, age: newAge})
    }

    const getName = (event) => {
        setNewName(event.target.value);
    }

    const getAge = (event) => {
        setNewAge(event.target.value)
    }

    const upDateUser = async (id, age) => {
        const userDoc = doc(db, "users", id)
        const newFields = {age: age + 1}
        await updateDoc(userDoc, newFields)
    }


    useEffect(() => {

        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }

        getUsers();

    }, [])

    return (
        <div className="App">
            <input placeholder="Name..." onChange={getName}/>
            <input type="number" placeholder="Age..." onChange={getAge}/>
            <button onClick={createUser}> Create User</button>
            {users.map((users) => {
                return <div>
                    <h1>{users.name}</h1>
                    <h1>{users.age}</h1>
                    <button onClick={() => upDateUser(users.id, users.age)}>Increase Age</button>
                </div>
            })}
        </div>
    );
}


export default App;
