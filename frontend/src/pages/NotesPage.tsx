// import { useQuery } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import styles from "./page.module.css";
import { fetchAllNotes } from "../api";

const NotesPage: React.FC = () => {
    const {data: notes} = useQuery({
        queryKey: ["notes"],
        queryFn: fetchAllNotes
    });

    return <div className={styles.page}>
        <h1>Notes</h1>
        <pre>{JSON.stringify(notes)}</pre>
    </div>
};

export default NotesPage;

