import "./App.css";
import Table from "./components/Table";

function App() {
    return (
        <>
            <h1 className="font-bold">Compare FDs</h1>
            <h2 className="text-xl">among the best in class</h2>
            <br />
            <br />
            <div className="flex justify-center items-center">
                <Table />
            </div>
        </>
    );
}

export default App;
