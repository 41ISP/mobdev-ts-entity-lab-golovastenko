import { API_URL } from "../api";
import type { ITeam } from "../types";

interface IHLTVCard extends ITeam { }

export function HLTVCard({ Name, VRS, Coach, AveragePlayerAge, PrizeMoneyAmount, WonAMajor, Logotype, Players }: IHLTVCard) {
    return (
        <article className="card">
            <div className="card__cover">
                {Logotype ? (<img
                    src={API_URL + Logotype.url}
                    alt={Logotype.alternativeText} />
                ) : (Name.length > 7 ? (<span>{Name[0]}</span>) : (<span>{Name}</span>))}
            </div>

            <div className="card__body">
                <h3>{Name}</h3>
                {Coach && (<p className="card__desc">Тренер - {Coach}</p>)}
                {WonAMajor ? (<p className="card__desc">Выигрывали мажор: Да</p>) : (<p className="card__desc">Выигрывали мажор: Нет</p>)}
                {AveragePlayerAge && (<p className="card__meta">Средний возраст игроков: {AveragePlayerAge}</p>)}
                {PrizeMoneyAmount && (<p className="card__meta">Призовые - {PrizeMoneyAmount}</p>)}
                {Players && (<div className="chips">
                    {Players.slice(0, 5).map((player, i) => (
                        <span className="chip" key={i}>
                            {player}
                        </span>
                    ))}
                </div>)}
            </div>

            <footer className="card__footer">
                <strong>{VRS} место в рейтинге VRS</strong>
                <button className="link-btn">Удалить</button>
            </footer>
        </article>
    )
}
