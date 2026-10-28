import { HLTVCard } from "./components/HLTVCard"
import { HLTVForm } from "./components/HLTVForm"
import "./App.css"
import { useEffect, useState } from "react"
import { useTeamsStore } from "./store/useTeamsStore"

export default function App() {
    const { teams, getTeams } = useTeamsStore()
    const [error, setIsError] = useState<string | null>(null)
    const [loading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        const load = async () => {
            setIsLoading(true)
            setIsError(null)
            try {
                await getTeams()
            } catch (error)  {
                console.error(error)
                setIsError('Что-то пошло не так')
            } finally {
                setIsLoading(false)
            }
        }
        load()
    }, [])

    useEffect(() => {
        console.log(teams)
    }, [teams])

    return (
        <div className="layout">
            <header className="top">
                <h1>Мои сущности</h1>
                <span className="pill">Количество: {teams?.data.length}</span>
            </header>

            <aside>
                <HLTVForm />
            </aside>

            <main>
                {error && <p className="error">Ошибка: ошибка</p>}
                {loading && <p className="hint">Загрузка…</p>}
                {!loading && !error && teams?.data && teams.data.length > 0 ? (
                <div className="grid">
                    {teams.data.map((el) => (
                        <HLTVCard key={el.id} {...el} />
                    ))}
                </div>
                ) : (<p className="hint">Добавьте сущность</p>)}
            </main>
        </div>
    )
}
