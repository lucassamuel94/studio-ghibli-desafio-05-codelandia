import Content from "./components/content"
import Header from "./components/header"

export default function App() {
  return (
    <main className="bg-background bg-cover bg-center min-h-screen">
      <div className="container">
        <Header />
        <Content />
      </div>
    </main>
  )
}