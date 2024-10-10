import "./Header.css"
import quizLogo from "@assets/quiz-logo.png" 

export const Header = () => {
    return (
        <header>
            <img src={quizLogo} alt="Logo" />
            <h1>React Quiz</h1>
        </header>
    )
}