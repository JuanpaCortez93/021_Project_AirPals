import Title from "./Title.jsx";
import Input from "./Input.jsx"

export const Card = () => {

    return (
        <main className="min-h-screen flex justify-center bg-slate-100">
            <div className="mx-auto text-center">
                <Title></Title>
                <Input></Input>
            </div>
        </main>
    )
}

export default Card;