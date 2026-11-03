import { useEffect } from "react"
import { useState } from "react"
import axios from 'axios'

function Main({ bgColor }) {
    const [keys, setKeys] = useState([])
    const [loggedIn, setLoggedIn] = useState(false)
    const [showLogin, setShowLogin] = useState(true)

    const [room, setRoom] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const serverUrl = 'http://127.1.1.1:3000'

    useEffect(() => {
        LoadKeys()
    },[])

    async function LoadKeys() {
        try {
            const response = await axios.get(serverUrl+'/keys')
            //response.data.result
            setKeys(response.data.result)
        } catch (error) {
            console.log(error)
        }
    }

    async function CreateKey() {

    }

    async function EditKey() {

    }

    async function DeleteKey(id) {

    }

    async function Login() {

    }

    async function Register() {

    }

    async function Logout() {

    }

    return <div className="container">
        <main className="row" style={{ backgroundColor: bgColor }}>
            <section className="col-8">
                <h2>Kulcsok</h2>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>Szoba szám</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            keys.map((oneKey) => <tr key={oneKey.id}>
                                <td>{oneKey.room}</td>
                            </tr>)
                        }
                    </tbody>
                </table>

            </section>
            <div className="col-4">
                <section className="p-2">
                    {
                        loggedIn ? <>
                            <h2>Kijelentkezés</h2>
                            <button onClick={Logout} className="btn btn-danger">Kijelentkezés</button>
                        </> : <>
                            {
                                showLogin ? <>
                                    <h2>Bejelentkezés</h2>
                                    <input className="form-control m-1" type="text" placeholder="felhasználónév" onChange={(e) => setUsername(e.target.value)} />
                                    <input className="form-control m-1" type="password" placeholder="jelszó" onChange={(e) => setPassword(e.target.value)} />
                                    <button className="btn btn-primary m-1" onClick={Login}>Bejelentkezés</button>
                                    <button className="btn btn-secondary m-1" onClick={() => setShowLogin(false)}>Regisztráció</button>
                                </> : <>
                                    <h2>Regisztráció</h2>
                                    <input className="form-control m-1" type="text" placeholder="felhasználónév" onChange={(e) => setUsername(e.target.value)} />
                                    <input className="form-control m-1" type="password" placeholder="jelszó" onChange={(e) => setPassword(e.target.value)} />
                                    <button className="btn btn-primary m-1" onClick={Register}>Regisztráció</button>
                                    <button className="btn btn-secondary m-1" onClick={() => setShowLogin(true)}>Bejelentkezés</button>
                                </>
                            }
                        </>
                    }
                </section>
                {
                    loggedIn ? <>
                        <section>
                            <h2>Létrehozás</h2>
                            <input type="text" className="form-control" 
                            onChange={(e) => setRoom(e.target.value)} placeholder="szoba szám"/>
                            <button onClick={CreateKey} className="btn btn-success">Létrehozás</button>
                        </section>
                    </>:<></>
                }
            </div>
        </main>
    </div>


}

export default Main